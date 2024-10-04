import { Link } from "react-router-dom";
import error_img from "../../assets/Error_blue.gif";

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen text-center">
      <div className="w-1/2 md:w-1/3 lg:w-1/5">
        <img src={error_img} alt="error image" />
      </div>
      <h2 className="text-6xl font-bold">404</h2>
      <p className="text-2xl">Page is not found !</p>
      <Link to="/" className="my-5">
        {" "}
        <button className="btn btn-info btn-rounded">Go to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
