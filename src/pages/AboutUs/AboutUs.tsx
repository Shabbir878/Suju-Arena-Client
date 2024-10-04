import Milestone from "@/components/AboutUs/Milestone";
import Mission from "@/components/AboutUs/Mission";
import Team from "@/components/AboutUs/Team";
import { LuArrowBigUpDash } from "react-icons/lu";
import ScrollToTop from "react-scroll-to-top";

const AboutUs = () => {
  return (
    <div>
      <ScrollToTop smooth component={<LuArrowBigUpDash size={40} />} />
      <Mission />
      <Milestone />
      <Team />
    </div>
  );
};

export default AboutUs;
