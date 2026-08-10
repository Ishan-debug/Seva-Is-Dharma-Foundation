import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h3 className="mb-8 text-2xl font-bold">
        Contact Information
      </h3>

      <div className="space-y-8">

        <div className="flex gap-4">
          <Phone className="mt-1 h-6 w-6 text-green-600" />
          <div>
            <h4 className="font-semibold">Phone</h4>
            <a
              href="tel:+919199233328"
              className="text-gray-600 hover:text-green-600"
            >
              +91 91992 33328
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <Mail className="mt-1 h-6 w-6 text-green-600" />
          <div>
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-600">
              contact@sevaisdharma.org
            </p>
            <span className="text-sm text-gray-500">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <MapPin className="mt-1 h-6 w-6 text-green-600" />
          <div>
            <h4 className="font-semibold">Head Office</h4>

            <p className="text-gray-600">
              Singh More<br />
              Ranchi, Jharkhand – 834003<br />
              India
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <MapPin className="mt-1 h-6 w-6 text-green-600" />
          <div>
            <h4 className="font-semibold">
              Service Areas
            </h4>

            <ul className="mt-3 space-y-2 text-gray-600">
              <li>✅ Ranchi, Jharkhand</li>
              <li>✅ Jamshedpur, Jharkhand</li>
              <li>✅ Purulia District, West Bengal</li>
            </ul>

            <p className="mt-4 text-gray-600">
              We are continuously expanding our outreach and aspire to serve more
              communities across India through compassion, volunteerism, and
              sustainable initiatives.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Clock className="mt-1 h-6 w-6 text-green-600" />
          <div>
            <h4 className="font-semibold">
              Working Hours
            </h4>

            <p className="text-gray-600">
              Monday – Saturday
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}