import Lottie from "lottie-react";
import support from "@/assets/support.json";
import selection from "@/assets/selection.json";

const WhyChooseUs = () => {
  return (
    <section className="py-[60px] md:py-[90px] bg-[#ffebcc]">
      {" "}
      {/* Background color set to a light orange shade */}
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0">
        <h2 className="text-[30px] leading-[40px] md:text-[70px] md:leading-[80px] text-center font-semibold mb-2 md:mb-8 text-[#1A1A1A]">
          Why <span className="text-[#ff6600]">Choose</span> Us{" "}
          {/* Change the color to a darker orange */}
        </h2>

        <p className="text-[16px] leading-[26px] font-mono max-w-[570px] mx-auto text-center text-[#333]">
          Explore the unique advantages we offer in the sports facility sector,
          where our commitment to excellence, personalized service, and passion
          for delivering the ultimate sports experience truly shine.
        </p>

        {/* body */}
        <div className="space-y-5 mt-5">
          <div className="flex flex-col-reverse md:flex-row items-center">
            {/* details */}
            <div className="flex-1 w-full">
              <h2 className="text-3xl font-bold text-[#ff6600]">
                Cutting-Edge Facilities
              </h2>
              <ul className="space-y-3 mt-5 list-disc ml-4 text-[#333]">
                <li>
                  <span className="font-bold">Top-Notch Equipment:</span> Work
                  out with the latest gear and technology designed to boost your
                  performance and enjoyment.
                </li>
                <li>
                  <span className="font-bold">Variety of Sports:</span>{" "}
                  Experience a wide selection of sports, from classics to the
                  latest trends, all in one place.
                </li>
                <li>
                  <span className="font-bold">Tailored Packages:</span>{" "}
                  Customize your membership or booking options to suit your
                  individual preferences and goals.
                </li>
              </ul>
            </div>
            {/* image container */}
            <div className="flex-1">
              <Lottie
                animationData={selection}
                loop={true}
                className="h-[400px] w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            {/* image container */}
            <div className="flex-1">
              <Lottie
                animationData={support}
                loop={true}
                className="h-[400px] w-full"
              />
            </div>
            {/* details */}
            <div className="flex-1 w-full">
              <h2 className="text-3xl font-bold text-[#ff6600]">
                Exceptional Customer Service
              </h2>
              <ul className="space-y-3 mt-5 list-disc ml-4 text-[#333]">
                <li>
                  <span className="font-bold">Professional Assistance:</span>{" "}
                  Our knowledgeable staff is always on hand to provide
                  personalized support and insights to help you reach your
                  fitness aspirations.
                </li>
                <li>
                  <span className="font-bold">Convenient Booking:</span> Take
                  advantage of flexible and hassle-free booking options, whether
                  for a single session or ongoing visits.
                </li>
                <li>
                  <span className="font-bold">Continuous Support:</span> We
                  offer ongoing assistance, including facility maintenance and
                  access to resources to ensure your experience is nothing short
                  of excellent.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
