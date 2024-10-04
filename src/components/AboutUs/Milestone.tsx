import Lottie from "lottie-react";
import achievement from "@/assets/achievement.json";

const Milestone = () => {
  const historyMilestones = [
    {
      year: 2020,
      event:
        "SuJu Arena was founded with a vision to become the ultimate destination for fitness and sports enthusiasts, starting with a single premium facility in the heart of [Your City].",
    },
    {
      year: 2021,
      event:
        "Expanded our offerings to include a range of world-class amenities, from a state-of-the-art gym to multipurpose courts for basketball, tennis, and more.",
    },
    {
      year: 2022,
      event:
        "Reached a landmark of 50,000 active members, fostering a thriving community of athletes, fitness enthusiasts, and local teams.",
    },
    {
      year: 2023,
      event:
        "Launched the SuJu Arena app, making it easier than ever for members to book classes, reserve courts, and access personalized training programs.",
    },
    {
      year: 2023,
      event:
        "Recognized as one of the top fitness and sports centers in the region, receiving accolades for our commitment to health, wellness, and community engagement.",
    },
    {
      year: "Present Day",
      event:
        "Continuing to lead the way in fitness and sports innovation, with plans to introduce new facilities, cutting-edge equipment, and digital solutions that enhance the experience of our members.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#fff5eb] text-[#2e382c]">
      <div className="max-w-[1200px] mx-auto px-5 xl:px-0">
        <h1 className="text-center font-bold text-[32px] md:text-[48px] leading-tight mb-12 font-Poppins">
          Our <span className="text-[#FF7F50]">Milestones</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Lottie
              animationData={achievement}
              loop={true}
              className="h-[250px] md:h-[400px] w-auto mx-auto"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg md:text-xl font-semibold mb-6 text-[#FF7F50]">
              Our Journey:
            </p>
            <ul className="space-y-5">
              {historyMilestones.map((milestone, index) => (
                <li key={index} className="relative pl-6 md:pl-8">
                  <span className="absolute left-0 top-1 block w-4 h-4 rounded-full bg-[#FF7F50]"></span>
                  <p className="text-md md:text-lg">
                    <span className="font-semibold text-[#FF4500]">
                      {milestone.year}:
                    </span>{" "}
                    {milestone.event}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
