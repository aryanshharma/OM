import { useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full min-h-screen bg-blue-100 pt-24 px-5 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10 lg:gap-12">
      <div className="w-full md:w-1/2 flex flex-col justify-center py-6 md:py-10 lg:py-16">
        <h1 className="text-blue-800 font-bold bg-blue-300 rounded-full px-3 py-2 w-fit text-sm sm:text-base">
          Welcome to Om Hospital
        </h1>

        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl pt-4 leading-tight">
          Quality Healthcare
          <br />
          at your <span className="text-blue-700">Service</span>
        </p>

        <p className="mt-5 text-gray-700 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
          We Provide comprehensive medical services with state-of-the-art
          facilities and experienced healthcare professionals dedicated to your
          well-being.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <button className="flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors duration-300 px-5 py-3 rounded-md text-white font-medium w-full sm:w-auto">
            <CiCalendar className="text-xl" />
            Book Appointment
          </button>

          <button className="flex justify-center items-center gap-2 font-medium px-5 py-3 rounded-md border-2 border-red-600 text-red-600 duration-500  hover:bg-red-600 hover:text-white w-full sm:w-auto">
            Explore Services
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center pb-8 md:pb-0">
        <img
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-2xl md:rounded-3xl shadow-lg"
          src="https://hospitalarchitects.in/sites/default/files/best_architect_for_multi_specialty_hospital_design.jpg"
          alt="Om Hospital"
        />
      </div>
    </div>
  );
}
