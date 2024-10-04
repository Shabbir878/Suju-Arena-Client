import { Link, Outlet, useLocation } from "react-router-dom";
import {
  AiFillShopping,
  AiOutlinePlus,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { useGetMeQuery } from "@/redux/api/authApi/authApi";
import Loading from "../Loading";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import logo from "../../assets/logo.jpeg";

const DashBoard = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const { pathname } = useLocation();
  const { data: me, isLoading } = useGetMeQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-gray-800 shadow-lg">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold text-xl text-white">
              {pathname.includes("myProfile") && <h1>Dashboard</h1>}
              {pathname.includes("addFacility") && <h1>Add Facility</h1>}
              {pathname.includes("allFacility") && <h1>All Facilities</h1>}
              {pathname.includes("ordercomfir") && <h1>Order</h1>}
              {pathname.includes("makeAdmin") && <h1>Make Admin</h1>}
            </div>
            <div className="flex-none lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <p className="font-bold text-white">{me?.data.name}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-2 xl:px-0">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-gray-800 min-h-screen text-white">
            <div className="flex justify-center mb-6">
              <Link to="/">
                <img className="w-28" src={logo} alt="Logo" />
              </Link>
            </div>

            <li>
              <Link to="/dashboard/myProfile" className="flex items-center">
                <MdDashboard />
                <span className="ml-2 text-[16px]">Dashboard</span>
              </Link>
            </li>

            {user?.role === "admin" ? null : (
              <li>
                <Link to="/dashboard/myBooking" className="flex items-center">
                  <AiOutlineShoppingCart />
                  <span className="ml-2 text-[16px]">My Booking</span>
                </Link>
              </li>
            )}

            {user?.role === "admin" && (
              <>
                <li>
                  <Link
                    to="/dashboard/addFacility"
                    className="flex items-center"
                  >
                    <AiFillShopping />
                    <span className="ml-2 text-[16px]">Add Facility</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allFacility"
                    className="flex items-center"
                  >
                    <AiOutlinePlus />
                    <span className="ml-2 text-[16px]">All Facilities</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/makeAdmin" className="flex items-center">
                    <AiOutlineUserAdd />
                    <span className="ml-2 text-[16px]">Make Admin</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allBooking"
                    className="flex items-center"
                  >
                    <AiOutlineShoppingCart />
                    <span className="ml-2 text-[16px]">All Bookings</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myBooking" className="flex items-center">
                    <AiOutlineShoppingCart />
                    <span className="ml-2 text-[16px]">My Bookings</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
