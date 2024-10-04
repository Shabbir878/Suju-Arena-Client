import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="py-10 px-5 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="flex flex-col items-start max-w-xs">
            <a className="mb-6" href="">
              <img
                src={logo}
                alt="Logo"
                className="h-24 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Find and Book the Best Sports Facilities. Your gateway to top-tier
              sports venues—anytime, anywhere.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <h5 className="text-lg font-semibold text-blue-300 mb-4">
                Company
              </h5>
              <ul>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-blue-300" href="">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-blue-300" href="">
                    Press
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-blue-300" href="">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-blue-300 mb-4">
                About Us
              </h5>
              <ul>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-blue-300" href="">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-blue-300" href="">
                    Community
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-blue-300" href="">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-blue-300 mb-4">
                Contact Us
              </h5>
              <ul>
                <li className="mb-2">
                  <a
                    className="text-gray-400 hover:text-blue-300 flex items-center"
                    href=""
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    LinkedIn
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-gray-400 hover:text-blue-300 flex items-center"
                    href=""
                  >
                    <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                    Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-gray-400 hover:text-blue-300 flex items-center"
                    href=""
                  >
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-gray-400 hover:text-blue-300 flex items-center"
                    href=""
                  >
                    <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4">
            <a className="text-gray-400 hover:text-blue-300 text-sm" href="">
              Terms of Service
            </a>
            <a className="text-gray-400 hover:text-blue-300 text-sm" href="">
              Privacy Policy
            </a>
            <a className="text-gray-400 hover:text-blue-300 text-sm" href="">
              Cookie Policy
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Copyright © 2024 SUJU Arena. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
