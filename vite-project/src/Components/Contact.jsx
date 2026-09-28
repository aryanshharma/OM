import { useEffect } from "react";
import { FaArrowUpRightFromSquare, FaLocationDot, FaPhone } from "react-icons/fa6";

const mapUrl = "https://maps.app.goo.gl/Rxu3hFw2tUCnKaV1A?g_st=iw";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="min-h-screen bg-blue-100 px-5 pb-16 pt-24 sm:px-8 md:px-12 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto w-fit rounded-full bg-blue-300 px-4 py-2 text-sm font-semibold text-blue-800">
            Om Hospital · Assandh
          </p>
          <h1 className="mt-5 text-4xl font-bold text-blue-950 sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            We’re here to help. Call the hospital or find us in Ram Nagar,
            Assandh.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <article className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl text-white">
                <FaPhone />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-wider text-red-600">
                Emergency
              </p>
              <a
                href="tel:9050570182"
                className="mt-1 block text-2xl font-bold text-blue-900 hover:text-red-600"
              >
                9050570182
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Tap to call for emergency assistance.
              </p>
            </article>

            <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-xl text-white">
                <FaPhone />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-wider text-blue-700">
                Reception
              </p>
              <a
                href="tel:01740298111"
                className="mt-1 block text-2xl font-bold text-blue-900 hover:text-red-600"
              >
                01740-298111
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Call reception for general enquiries.
              </p>
            </article>

            <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-xl text-white">
                <FaLocationDot />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-wider text-blue-700">
                Visit us
              </p>
              <address className="mt-2 not-italic leading-relaxed text-gray-700">
                Ram Nagar, Near Govt. School
                <br />
                Assandh, Karnal, Haryana 132039
              </address>
              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-red-600 hover:text-red-700"
              >
                Open in Google Maps <FaArrowUpRightFromSquare />
              </a>
            </article>
          </div>

          <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm lg:col-span-3">
            <iframe
              title="Om Hospital location in Assandh"
              src="https://maps.google.com/maps?q=Ram%20Nagar%2C%20Assandh%2C%20Karnal%2C%20Haryana%20132039&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-105 w-full border-0 sm:h-full sm:min-h-140"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
