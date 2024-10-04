import TestimonialSlide from "@/components/TestimonialSlide";
import HeroSection from "../../components/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import FeaturedFacilities from "../FeaturedFacilities/FeaturedFacilities";
import ScrollToTop from "react-scroll-to-top";
import { LuArrowBigUpDash } from "react-icons/lu";
import WhyChooseUs from "@/components/WhyChooseus";
import Partners from "@/components/Partners";

const Home = () => {
  return (
    <>
      <ScrollToTop smooth component={<LuArrowBigUpDash size={40} />} />
      <HeroSection />
      <FeaturedFacilities isLandingPage={true} />
      <HowItWorks />
      <TestimonialSlide />
      <WhyChooseUs />
      <Partners />
    </>
  );
};

export default Home;
