import { Link } from "react-router-dom";
import background_img from "../assets/bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-[60px] lg:pt-[140px] lg:pb-[90px] bg-gradient-to-b from-[#1a1a1a] to-[#000] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${background_img})`, // Use imported image
        }}
      ></div>

      <div className="relative max-w-[1170px] mx-auto px-5 xl:px-0 font-Poppis z-10">
        <div className="max-w-[770px] mx-auto text-center">
          {/* Hero Heading */}
          <h1 className="text-[35px] leading-[45px] md:text-[70px] md:leading-[80px] font-bold text-white mb-3 md:mb-5">
            Victory Begins at <span className="text-[#FF8C42]">SUJU Arena</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-3 md:mb-5">
            Your premier destination for world-class sports facilities—where
            champions are made, and every game is a step toward greatness.
          </p>

          {/* CTA Button */}
          <Link to="/facilities">
            <button className="bg-gradient-to-r from-[#FF8C42] to-[#FF5722] font-semibold text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#e64a19] transition-all duration-300 ease-in-out">
              Book Now
            </button>
          </Link>

          {/* Rating */}
          <div className="mt-6 flex justify-center items-center space-x-2 text-gray-300">
            {/* Star Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gold"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>

            {/* Rating Text */}
            <p className="text-lg font-semibold text-white">
              Rated <span className="text-[#FF8C42]">4.8/5</span> by thousands
              of players
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
