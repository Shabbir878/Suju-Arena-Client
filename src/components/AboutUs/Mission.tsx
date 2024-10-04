import Lottie from "lottie-react";
import mission from "@/assets/mission.json";
import purpose from "@/assets/purpose.json";

const Mission = () => {
  return (
    <section className="py-12 md:py-16 bg-[#fff5eb] text-[#2e382c]">
      <div className="max-w-[1200px] mx-auto px-5 xl:px-0 font-Poppins">
        <h1 className="text-center font-bold text-[32px] md:text-[48px] leading-tight mb-12">
          Our <span className="text-[#FF7F50]">Mission</span>
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
          {/* Text Section */}
          <div className="space-y-6 flex-1 text-justify">
            <p className="text-lg leading-[28px] font-medium">
              At SuJu Arena, our mission is to provide an exceptional fitness
              and sports environment where individuals of all skill levels can
              achieve their personal best. We are dedicated to delivering a
              premium experience that supports health, wellness, and athletic
              growth for everyone.
            </p>

            <p className="text-lg leading-[28px] font-medium">
              Whether you’re an elite athlete or someone just starting your
              fitness journey, SuJu Arena offers a welcoming space equipped with
              cutting-edge facilities, expert trainers, and a supportive
              community. We are constantly innovating to ensure our services
              meet the evolving needs of our members, providing both a
              personalized and community-driven experience.
            </p>
          </div>

          {/* Animation */}
          <div>
            <Lottie
              animationData={mission}
              loop={true}
              className="h-[250px] md:h-[350px] w-auto mx-auto"
            />
          </div>
        </div>

        {/* Purpose Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Animation */}
          <div>
            <Lottie
              animationData={purpose}
              loop={true}
              className="h-[250px] md:h-[350px] w-auto mx-auto"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-justify">
            <p className="text-lg leading-[28px] font-medium mb-6">
              Our purpose at SuJu Arena is to inspire, motivate, and empower
              every individual through fitness and sports. We strive to:
            </p>

            <ul className="space-y-4">
              <li>
                <p>
                  <span className="font-semibold text-[#FF4500]">
                    Innovation:
                  </span>{" "}
                  Constantly improve our facilities and services, incorporating
                  the latest fitness trends and technology to enhance our
                  members' experience.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold text-[#FF4500]">
                    Integrity:
                  </span>{" "}
                  Uphold the highest standards of professionalism and
                  transparency in all our interactions, fostering trust with our
                  members and partners.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold text-[#FF4500]">
                    Excellence:
                  </span>{" "}
                  Deliver a top-tier fitness environment, offering high-quality
                  equipment, expert staff, and exceptional customer service.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold text-[#FF4500]">
                    Community:
                  </span>{" "}
                  Build a strong and inclusive community where members can
                  connect, achieve their goals, and support one another in their
                  fitness and sports journey.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
