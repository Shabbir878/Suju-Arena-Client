import { useGetSingleFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const FacilityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: facility, isLoading } = useGetSingleFacilityQuery(id);

  if (isLoading) {
    return <Loading />;
  }
  const { name, description, pricePerHour, location, image } = facility.data;

  const NavigateBook = (_id: string) => {
    navigate(`/booking/${_id}`);
  };

  return (
    <section className="py-[60px]">
      <div className="max-w-[370px] mx-auto relative px-2 py-2 bg-[#FFF3E0] rounded-[9px] border border-[#FFCC80] font-Poppins">
        <img
          className="mb-5 w-full h-[200px] object-cover"
          loading="lazy"
          src={image}
          alt=""
        />

        <div className="flex justify-between mb-5">
          <div>
            <h3 className="text-18px leading-28px md:text-22px md:leading-[32px] font-semibold text-heading mb-[2px]">
              {name}
            </h3>
            <h3 className="text-[16px] leading-[26px] text-[#4E342E] font-semibold">
              {location}
            </h3>
            <p className="text-[16px] leading-[26px] text-[#4E342E]">
              {description}
            </p>
          </div>
          <h3 className="text-22px leading-[32px] font-semibold text-[#FF5722]">
            ${pricePerHour}
            <span className="text-[16px] text-text"> Hr</span>
          </h3>
        </div>
        <div className="max-w-[370px] h-[1px] bg-[#FFAB40] mb-5"></div>

        <div className="font-Poppins font-semibold">
          <button
            onClick={() => NavigateBook(id as any)}
            className="bg-[#FFCC80] w-full py-[10px] rounded-[7px] text-[14px] text-[#3E2723]"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacilityDetail;
