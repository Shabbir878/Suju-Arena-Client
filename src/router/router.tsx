import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import FacilityDetail from "@/components/FacilityDetail";
import FacilityBooking from "@/components/FacilityBooking";
import Contact from "@/pages/Contact/Contact";
import NotFound from "@/pages/NotFound/NotFound";
import DashBoard from "@/components/layout/DashBoard";
import AddFacility from "@/pages/Dashboard/AddFacility/AddFacility";
import DeleteFacility from "@/pages/Dashboard/DeleteFacility/DeleteFacility";
import MakeAdmin from "@/pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./AdminRoute";
import AboutUs from "@/pages/AboutUs/AboutUs";
import AllBooking from "@/pages/Dashboard/AllBooking/AllBooking";
import MyBooking from "@/pages/Dashboard/MyBooking/MyBooking";
import PaymentSuccess from "@/pages/Payment/PaymentSuccess";
import Signup from "../pages/Signup/Signup";
import Facilities from "@/pages/Facilities/Facilities";
import MyProfile from "@/pages/Dashboard/MyProfile";
import UpdateFacility from "@/pages/Dashboard/UpdateFacility/UpdateFacility";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/success",
        element: <PaymentSuccess />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <FacilityDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/booking/:id",
        element: <FacilityBooking />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myProfile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/addFacility",
        element: <AddFacility />,
      },
      {
        path: "/dashboard/allFacility",
        element: <DeleteFacility />,
      },
      {
        path: "/dashboard/updatedFacility/:id",
        element: (
          <AdminRoute>
            <UpdateFacility />
          </AdminRoute>
        ),
      },
      {
        path: "makeAdmin",
        element: (
          <AdminRoute>
            {" "}
            <MakeAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "allBooking",
        element: (
          <AdminRoute>
            {" "}
            <AllBooking />
          </AdminRoute>
        ),
      },
      {
        path: "myBooking",
        element: (
          <PrivateRoute>
            {" "}
            <MyBooking />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
