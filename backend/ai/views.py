from django.conf import settings
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from openai import OpenAI


class AIChatView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        message = request.data.get("message", "")

        # Validate message type
        if not isinstance(message, str):
            return Response(
                {"error": "Invalid message."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        message = message.strip()

        # Validate empty message
        if not message:
            return Response(
                {"error": "Message is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Prevent excessively large requests
        if len(message) > 1000:
            return Response(
                {"error": "Message is too long."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Check API key configuration
        if not settings.OPENAI_API_KEY:
            return Response(
                {"error": "AI service is not configured."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )

        try:
            client = OpenAI(
                api_key=settings.OPENAI_API_KEY,
            )

            response = client.responses.create(
                model=settings.OPENAI_MODEL,
                instructions="""
You are the official AI assistant for Seva Is Dharma Foundation.

Your role is to help website visitors understand the foundation
and its activities.

Verified foundation information:

Foundation:
Seva Is Dharma Foundation

Focus areas:
- Animal welfare
- Food distribution
- Tree plantation
- Environmental protection
- Education
- Community service

Service areas:
- Ranchi, Jharkhand
- Jamshedpur, Jharkhand
- Purulia District, West Bengal

Head Office:
Singh More, Prem Nagar
Road No. 01, Hatia
Ranchi, Jharkhand - 834003
India

Phone:
+91 91992 33328
+91 72580 50996

Email:
contact@sevaisdharmafoundation.org

Working hours:
Monday - Saturday
9:00 AM - 6:00 PM

Website:
sevaisdharmafoundation.org

Guidelines:

1. Be helpful, friendly, concise, and respectful.

2. Answer questions about the foundation using only verified
   information provided in these instructions.

3. Never invent organizational information.

4. Do not invent registration numbers, financial figures,
   tax benefits, government approvals, certifications,
   achievements, or legal status.

5. Do not claim that a donation is tax-deductible unless
   officially verified information is provided.

6. If you do not know something about the foundation, say so
   clearly and direct the visitor to the official contact details.

7. You may explain the listed causes and how visitors can
   contact the foundation.

8. If asked about politics, candidates, political parties,
   or elections, remain neutral and provide factual information
   without endorsing or opposing anyone.

9. Never request or expose passwords, API keys, payment
   credentials, or other sensitive information.

10. Do not pretend to be a human employee.

Keep responses suitable for a public nonprofit website.
""",
                input=message,
            )

            answer = response.output_text.strip()

            if not answer:
                return Response(
                    {"error": "The AI returned an empty response."},
                    status=status.HTTP_502_BAD_GATEWAY,
                )

            return Response(
                {"response": answer},
                status=status.HTTP_200_OK,
            )

        except Exception as exc:
            print("OPENAI ERROR:", repr(exc))

            return Response(
                {"error": str(exc)},
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )