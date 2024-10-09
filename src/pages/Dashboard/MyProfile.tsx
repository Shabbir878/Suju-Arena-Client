import Loading from "@/components/Loading";
import { useGetMeQuery } from "@/redux/api/authApi/authApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Overview from "./Overview/Overview";
import ScrollToTop from "react-scroll-to-top";
import { LuArrowBigUpDash } from "react-icons/lu";

const MyProfile = () => {
  const navigate = useNavigate();

  const {
    data: me,
    isLoading,
    isError,
    refetch,
  } = useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: `Something went wrong`,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/"); // Navigate after the alert is dismissed
      });
    }
  }, [isError, navigate]);

  const handleRefetch = () => {
    refetch();
  };

  if (isLoading) {
    return <Loading />;
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const User = me?.data;

  return (
    <div className="max-w-screen-xl mx-auto bg-[#FFF7E4] p-6 md:p-10 lg:p-12 rounded-lg shadow-md font-Poppins mt-10">
      {" "}
      {/* Adjusted for responsiveness */}
      <p className="text-[16px] leading-[28px] text-[#555] mb-5 text-center">
        {formattedDate}
      </p>
      <h2 className="text-3xl text-[#FF8C00] font-semibold mb-2 text-center">
        Welcome Back, {User?.name}
      </h2>
      <p className="text-[16px] leading-[26px] text-[#555] mb-5 text-center">
        Always stay updated with your profile.
      </p>
      <div className="flex justify-center mb-4">
        <button
          onClick={handleRefetch}
          className="bg-[#FF8C00] text-white px-4 py-2 rounded-md hover:bg-[#e07b00] transition-colors duration-200"
        >
          Refresh Profile
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h3 className="text-xl font-bold text-[#FF8C00] mb-4">
          Profile Information
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium text-[#333]">Email:</span>
            <span className="text-[#555]">{User?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-[#333]">Phone:</span>
            <span className="text-[#555]">{User?.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-[#333]">Address:</span>
            <span className="text-[#555]">{User?.address}</span>
          </div>
        </div>
      </div>
      {User?.role === "admin" && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-xl font-bold text-[#FF8C00] mb-4">Overview</h3>
          <div className="w-full">
            <Overview />
          </div>
          <ScrollToTop smooth component={<LuArrowBigUpDash size={40} />} />
        </div>
      )}
    </div>
  );
};

export default MyProfile;
