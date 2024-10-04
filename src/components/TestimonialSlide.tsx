import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Rate } from "antd";

interface Testimonial {
  statue: string;
  feedback: string;
  image: string;
  name: string;
}

const TestimonialSlide = () => {
  const [data, setData] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <section className="pt-[40px] bg-[#f5f8fc] pb-20">
      {/* Heading */}
      <div className="text-center font-Poppins mb-8">
        <h2 className="text-[30px] leading-[40px] md:text-[70px] md:leading-[80px] text-center font-semibold mb-2 md:mb-8 text-[#1A1A1A]">
          Testi<span className="text-[#FF5722]">monials</span>
        </h2>
        {/* Description */}
        <p className="text-[16px] leading-[26px] font-mono max-w-[570px] mx-auto text-center text-[#333]">
          Hear from our satisfied users in the Testimonials section, where real
          customers share their experiences and stories about their favorite
          facilities and the exceptional service they received.
        </p>
      </div>

      {/* Slider */}
      <div className="mx-auto max-w-[1200px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg p-5 px-6 border bg-white shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  {/* Image and Name */}
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-full mb-2"
                    />
                    <h2 className="font-semibold text-[#333]">{item.name}</h2>
                  </div>
                  {/* Rating */}
                  <Rate className="text-sm" disabled defaultValue={4} />
                  {/* Testimonial */}
                  <h2 className="text-[#333] font-semibold my-4">
                    {item.statue}
                  </h2>
                  <p className="text-sm max-w-2xl mx-auto">"{item.feedback}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlide;
