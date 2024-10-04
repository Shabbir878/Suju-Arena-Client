import Loading from "@/components/Loading";
import { useGetMeQuery } from "@/redux/api/authApi/authApi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

const MyProfile = () => {
  const navigate = useNavigate();

  // Destructure refetch from useGetMeQuery
  const {
    data: me,
    isLoading,
    isError,
    refetch,
  } = useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: true, // Automatically refetch when component mounts or when arguments change
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

  // Manual refetch function, e.g., could be triggered by a button
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
    <div className="max-w-[800px] mx-auto bg-[#FFF7E4] px-6 py-6 rounded-lg shadow-md font-Poppins mt-10">
      <p className="text-[16px] leading-[28px] text-[#555] mb-5">
        {formattedDate}
      </p>

      <h2 className="text-3xl text-[#FF8C00] font-semibold mb-2">
        Welcome Back, {User?.name}
      </h2>
      <p className="text-[16px] leading-[26px] text-[#555] mb-5">
        Always stay updated with your profile.
      </p>

      {/* Button to manually refetch user data */}
      <button
        onClick={handleRefetch}
        className="bg-[#FF8C00] text-white px-4 py-2 rounded-md mb-4"
      >
        Refresh Profile
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
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
    </div>
  );
};

export default MyProfile;
