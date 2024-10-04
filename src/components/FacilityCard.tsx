/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";

const FacilityCard = (props: {
  item: {
    _id: any;
    name: any;
    description: any;
    pricePerHour: any;
    location: any;
    image: any;
  };
}) => {
  const { _id, name, pricePerHour, location, image } = props.item;

  const navigate = useNavigate();
  const NavigateFacility = (_id: string) => {
    navigate(`/details/${_id}`);
  };

  return (
    <div>
      <div className="max-w-[370px] relative px-2 py-2 bg-[#FFF3E0] mx-auto rounded-[9px] border border-[#FFCC80] font-Poppins">
        <img
          className="mb-5 w-full object-cover h-[200px]"
          loading="lazy"
          src={image}
          alt=""
        />

        <div className="flex justify-between mb-5">
          <div>
            <h3 className="text-18px leading-28px md:text-22px md:leading-[32px] font-semibold text-heading mb-[2px]">
              {name}
            </h3>
            <p className="text-[16px] leading-[26px] text-[#4E342E]">
              {location}
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
            onClick={() => NavigateFacility(_id)}
            className="bg-[#FFCC80] w-full py-[10px] rounded-[7px] text-[14px] text-[#3E2723]"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;