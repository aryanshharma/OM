import { useEffect } from "react";
import { FaArrowRight, FaHeart, FaShieldHeart, FaUserDoctor } from "react-icons/fa6";

const values = [
  {
    icon: <FaHeart />,
    title: "Compassionate care",
    description:
      "We listen, support, and treat every patient with kindness and respect.",
  },
  {
    icon: <FaUserDoctor />,
    title: "Care you can trust",
    description:
      "Our healthcare team is committed to thoughtful guidance at every step.",
  },
  {
    icon: <FaShieldHeart />,
    title: "Your wellbeing first",
    description:
      "We work to make quality healthcare approachable for families in Assandh.",
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="min-h-screen bg-blue-100 pt-24">
      <section className="px-5 py-14 sm:px-8 md:px-12 lg:px-20 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div>
            <p className="w-fit rounded-full bg-blue-300 px-4 py-2 text-sm font-semibold text-blue-800">
              About Om Hospital
            </p>
            <h1 className="pt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Caring for the people of <span className="text-blue-700">Assandh</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg">
              Om Hospital is here to support the health and wellbeing of
              individuals and families in Assandh. We believe good care begins
              with listening, clear guidance, and treating every person with
              dignity.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700"
            >
              Get in touch <FaArrowRight />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-blue-300" />
            <img
              className="relative h-72 w-full rounded-3xl object-cover shadow-lg sm:h-96"
              src="https://hospitalarchitects.in/sites/default/files/best_architect_for_multi_specialty_hospital_design.jpg"
              alt="Hospital building representing care in the community"
            />
            <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 px-5 py-3 shadow-md">
              <p className="font-bold text-blue-800">Om Hospital</p>
              <p className="text-sm text-gray-600">Assandh, Haryana</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 md:px-12 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              What guides us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue-900 sm:text-4xl">
              Healthcare with a human touch
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our purpose is to help make each visit feel welcoming, considered,
              and focused on what matters to you.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-xl text-white">
                  {value.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-blue-900">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 text-center sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-blue-800 px-6 py-10 text-white sm:px-12 sm:py-14">
          <h2 className="text-3xl font-bold sm:text-4xl">Here for your health</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-blue-100">
            Om Hospital is proud to be part of the Assandh community. We look
            forward to supporting you and your family with care and attention.
          </p>
          <a
            href="/#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700"
          >
            Contact us <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}
