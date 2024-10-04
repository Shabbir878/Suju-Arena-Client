import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const HowItWorks = () => {
  return (
    <section className="py-[60px] md:py-[90px] bg-[#F8F8F8]">
      <h2 className="text-[30px] leading-[40px] md:text-[70px] md:leading-[80px] text-center font-semibold mb-2 md:mb-8 text-[#1A1A1A]">
        How It <span className="text-[#FF6F20]">Functions</span>
      </h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work font-Poppins"
          contentStyle={{ background: "#FFFFFF", color: "#000000" }}
          contentArrowStyle={{ borderLeft: "7px solid #FF6F20" }}
          iconStyle={{
            background: "#FF6F20",
            color: "#FFFFFF",
            width: "30px",
            height: "30px",
            margin: "-10px",
          }}
        >
          <h4 className="text-[#FF6F20] text-[16px] font-semibold text-right">
            01
          </h4>
          <h3 className="vertical-timeline-element-title text-[26px] font-semibold text-right">
            Discover a Facility
          </h3>
          <p className="text-right text-[16px] leading-[26px] font-normal">
            Input your desired time, date, and sport to locate the finest
            facilities available nearby. Instantly verify availability and
            receive real-time updates on reservations. Whether it’s a
            spontaneous match or a scheduled event, we have you covered.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work font-Poppins"
          contentStyle={{ background: "#FFFFFF", color: "#000000" }}
          contentArrowStyle={{ borderLeft: "7px solid #FF6F20" }}
          iconStyle={{
            background: "#FF6F20",
            color: "#FFFFFF",
            width: "30px",
            height: "30px",
            margin: "-10px",
          }}
        >
          <h4 className="text-[#FF6F20] text-[16px] font-semibold">02</h4>
          <h3 className="vertical-timeline-element-title text-[26px] font-semibold">
            Reserve Your Spot
          </h3>
          <p className="text-[16px] leading-[26px] font-normal">
            Choose your preferred time and date, and confirm your reservation
            immediately. Receive instant confirmation and enjoy a hassle-free
            experience. Your ideal sports facility is just a few clicks away.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work font-Poppins"
          contentStyle={{ background: "#FFFFFF", color: "#000000" }}
          contentArrowStyle={{ borderLeft: "7px solid #FF6F20" }}
          iconStyle={{
            background: "#FF6F20",
            color: "#FFFFFF",
            width: "30px",
            height: "30px",
            margin: "-10px",
          }}
        >
          <h4 className="text-[#FF6F20] text-[16px] font-semibold">03</h4>
          <h3 className="vertical-timeline-element-title text-[26px] font-semibold">
            Relish Your Game
          </h3>
          <p className="text-[16px] leading-[26px] font-normal">
            Arrive at the facility, present your booking confirmation, and dive
            into your game! Come with confidence, knowing your place is secured.
            Experience exceptional amenities and make the most of your playtime.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default HowItWorks;
