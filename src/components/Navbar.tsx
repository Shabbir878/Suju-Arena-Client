import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { logout } from "../redux/features/userSlice";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logged out successfully",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <nav className="bg-[#1a1a1a] text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo with enhanced visibility */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="logo"
            className="h-16 md:h-20 lg:h-24 shadow-lg border-2 border-[#FF8C42] rounded-md bg-white p-1"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-[#FF8C42] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#FF8C42] transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#FF8C42] transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/facilities"
              className="hover:text-[#FF8C42] transition duration-300"
            >
              Facilities
            </Link>
          </li>
          {token && (
            <li>
              <Link
                to="/dashboard/myprofile"
                className="hover:text-[#FF8C42] transition duration-300"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        {/* Call-to-Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-[#FF5722] px-6 py-2 rounded-full text-white hover:bg-[#e64a19] transition duration-300"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-[#FF8C42] px-6 py-2 rounded-full text-white hover:bg-[#FF5722] transition duration-300">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation Icon */}
        <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <IoCloseOutline /> : <CiMenuFries />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`fixed top-0 right-0 w-64 h-full bg-[#1a1a1a] z-50 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col py-10 space-y-6 text-lg`}
      >
        <li className="text-right px-6">
          <IoCloseOutline
            onClick={() => setOpen(false)}
            className="cursor-pointer text-3xl"
          />
        </li>
        <li>
          <Link to="/" className="block px-6" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block px-6"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block px-6"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/facilities"
            className="block px-6"
            onClick={() => setOpen(false)}
          >
            Facilities
          </Link>
        </li>
        {token && (
          <li>
            <Link
              to="/dashboard/myprofile"
              className="block px-6"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
          </li>
        )}
        <li className="px-6">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-[#FF5722] w-full py-2 rounded-full text-white hover:bg-[#e64a19] transition duration-300"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-[#FF8C42] w-full py-2 rounded-full text-white hover:bg-[#FF5722] transition duration-300">
                Login
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
