from io import BytesIO

from django.utils import timezone
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


def generate_donation_receipt(donation):
    buffer = BytesIO()

    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        rightMargin=20 * mm,
        leftMargin=20 * mm,
        topMargin=20 * mm,
        bottomMargin=20 * mm,
        title="Donation Receipt",
        author="Seva Is Dharma Foundation",
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        "TitleCustom",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=24,
        leading=30,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#166534"),
        spaceAfter=8,
    )

    subtitle_style = ParagraphStyle(
        "SubtitleCustom",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=12,
        leading=18,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#ea580c"),
        spaceAfter=5,
    )

    heading_style = ParagraphStyle(
        "HeadingCustom",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=15,
        leading=20,
        textColor=colors.HexColor("#166534"),
        spaceAfter=10,
    )

    normal_style = ParagraphStyle(
        "NormalCustom",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=10,
        leading=16,
        textColor=colors.HexColor("#374151"),
    )

    amount_style = ParagraphStyle(
        "AmountCustom",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=24,
        leading=30,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#ea580c"),
    )

    footer_style = ParagraphStyle(
        "FooterCustom",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=9,
        leading=14,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#6b7280"),
    )

    story = []

    # -------------------------------------------------
    # HEADER
    # -------------------------------------------------

    story.append(
        Paragraph(
            "SEVA IS DHARMA FOUNDATION",
            title_style,
        )
    )

    story.append(
        Paragraph(
            "Helping is Bhakti",
            subtitle_style,
        )
    )

    story.append(
        Paragraph(
            "DONATION RECEIPT",
            ParagraphStyle(
                "ReceiptHeading",
                parent=styles["Heading1"],
                fontName="Helvetica-Bold",
                fontSize=18,
                alignment=TA_CENTER,
                textColor=colors.HexColor("#111827"),
                spaceAfter=15,
            ),
        )
    )

    story.append(Spacer(1, 5))

    # -------------------------------------------------
    # AMOUNT
    # -------------------------------------------------

    amount_text = f"Rs. {donation.amount}"

    amount_table = Table(
        [
            [
                Paragraph(
                    amount_text,
                    amount_style,
                )
            ]
        ],
        colWidths=[160 * mm],
    )

    amount_table.setStyle(
        TableStyle(
            [
                (
                    "BACKGROUND",
                    (0, 0),
                    (-1, -1),
                    colors.HexColor("#fff7ed"),
                ),
                (
                    "BOX",
                    (0, 0),
                    (-1, -1),
                    1,
                    colors.HexColor("#fed7aa"),
                ),
                (
                    "TOPPADDING",
                    (0, 0),
                    (-1, -1),
                    18,
                ),
                (
                    "BOTTOMPADDING",
                    (0, 0),
                    (-1, -1),
                    18,
                ),
            ]
        )
    )

    story.append(amount_table)

    story.append(Spacer(1, 25))

    # -------------------------------------------------
    # DONOR INFORMATION
    # -------------------------------------------------

    story.append(
        Paragraph(
            "Donor Information",
            heading_style,
        )
    )

    donor_data = [
        ["Name", str(donation.name)],
        ["Email", str(donation.email)],
        ["Phone", str(donation.phone)],
    ]

    if donation.purpose:
        donor_data.append(
            [
                "Purpose",
                str(donation.purpose),
            ]
        )

    donor_table = Table(
        donor_data,
        colWidths=[45 * mm, 115 * mm],
    )

    donor_table.setStyle(
        TableStyle(
            [
                (
                    "BACKGROUND",
                    (0, 0),
                    (0, -1),
                    colors.HexColor("#f3f4f6"),
                ),
                (
                    "FONTNAME",
                    (0, 0),
                    (0, -1),
                    "Helvetica-Bold",
                ),
                (
                    "FONTNAME",
                    (1, 0),
                    (1, -1),
                    "Helvetica",
                ),
                (
                    "TEXTCOLOR",
                    (0, 0),
                    (-1, -1),
                    colors.HexColor("#374151"),
                ),
                (
                    "GRID",
                    (0, 0),
                    (-1, -1),
                    0.5,
                    colors.HexColor("#d1d5db"),
                ),
                (
                    "VALIGN",
                    (0, 0),
                    (-1, -1),
                    "MIDDLE",
                ),
                (
                    "TOPPADDING",
                    (0, 0),
                    (-1, -1),
                    10,
                ),
                (
                    "BOTTOMPADDING",
                    (0, 0),
                    (-1, -1),
                    10,
                ),
                (
                    "LEFTPADDING",
                    (0, 0),
                    (-1, -1),
                    10,
                ),
                (
                    "RIGHTPADDING",
                    (0, 0),
                    (-1, -1),
                    10,
                ),
            ]
        )
    )

    story.append(donor_table)

    story.append(Spacer(1, 25))

    # -------------------------------------------------
    # PAYMENT INFORMATION
    # -------------------------------------------------

    story.append(
        Paragraph(
            "Payment Information",
            heading_style,
        )
    )

    payment_date = timezone.localtime(
        donation.created_at
    ).strftime(
        "%d %B %Y, %I:%M %p"
    )

    payment_data = [
        ["Amount", f"Rs. {donation.amount}"],
        ["Status", str(donation.status).upper()],
        [
            "Razorpay Payment ID",
            str(donation.razorpay_payment_id or "N/A"),
        ],
        [
            "Razorpay Order ID",
            str(donation.razorpay_order_id or "N/A"),
        ],
        ["Date", payment_date],
    ]

    payment_table = Table(
        payment_data,
        colWidths=[55 * mm, 105 * mm],
    )

    payment_table.setStyle(
        TableStyle(
            [
                (
                    "BACKGROUND",
                    (0, 0),
                    (0, -1),
                    colors.HexColor("#f3f4f6"),
                ),
                (
                    "FONTNAME",
                    (0, 0),
                    (0, -1),
                    "Helvetica-Bold",
                ),
                (
                    "FONTNAME",
                    (1, 0),
                    (1, -1),
                    "Helvetica",
                ),
                (
                    "TEXTCOLOR",
                    (0, 0),
                    (-1, -1),
                    colors.HexColor("#374151"),
                ),
                (
                    "GRID",
                    (0, 0),
                    (-1, -1),
                    0.5,
                    colors.HexColor("#d1d5db"),
                ),
                (
                    "VALIGN",
                    (0, 0),
                    (-1, -1),
                    "MIDDLE",
                ),
                (
                    "TOPPADDING",
                    (0, 0),
                    (-1, -1),
                    10,
                ),
                (
                    "BOTTOMPADDING",
                    (0, 0),
                    (-1, -1),
                    10,
                ),
                (
                    "LEFTPADDING",
                    (0, 0),
                    (-1, -1),
                    10,
                ),
                (
                    "RIGHTPADDING",
                    (0, 0),
                    (-1, -1),
                    10,
                ),
            ]
        )
    )

    story.append(payment_table)

    story.append(Spacer(1, 30))

    # -------------------------------------------------
    # THANK YOU
    # -------------------------------------------------

    story.append(
        Paragraph(
            "Thank you for supporting Seva Is Dharma Foundation.",
            ParagraphStyle(
                "ThankYou",
                parent=normal_style,
                fontName="Helvetica-Bold",
                fontSize=13,
                leading=20,
                alignment=TA_CENTER,
                textColor=colors.HexColor("#166534"),
            ),
        )
    )

    story.append(Spacer(1, 10))

    story.append(
        Paragraph(
            "Your contribution helps us serve people in need, "
            "protect animals, feed the hungry, plant trees, "
            "and protect our environment.",
            ParagraphStyle(
                "Mission",
                parent=normal_style,
                fontSize=10,
                leading=17,
                alignment=TA_CENTER,
            ),
        )
    )

    story.append(Spacer(1, 25))

    story.append(
        Paragraph(
            "Seva Is Dharma Foundation",
            footer_style,
        )
    )

    story.append(
        Paragraph(
            "Helping is Bhakti",
            footer_style,
        )
    )

    story.append(
        Paragraph(
            "Seva Paramo Dharma",
            footer_style,
        )
    )

    # -------------------------------------------------
    # BUILD PDF
    # -------------------------------------------------

    doc.build(story)

    buffer.seek(0)

    return buffer