import { LuArrowBigUpDash } from "react-icons/lu";
import ScrollToTop from "react-scroll-to-top";

const Contact = () => {
  return (
    <section className="pb-[60px] md:pb-[80px] bg-gray-50">
      <ScrollToTop smooth component={<LuArrowBigUpDash size={40} />} />

      {/* Google Map */}
      <div className="h-[400px] md:h-[500px] lg:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361442392!2d-74.30933974441683!3d40.69753995048309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1728029989526!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Information and Form */}
      <div className="font-Poppins pt-[60px] lg:pt-[80px] px-5 lg:px-0">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-[40px] lg:gap-x-[60px]">
          {/* Contact Info */}
          <div className="lg:bg-orange-300 lg:h-[100vh] flex flex-col justify-center p-[40px] rounded-[12px] shadow-lg">
            <div className="space-y-10">
              {/* Location */}
              <div className="flex items-start gap-x-[20px]">
                <img
                  src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/qyfOQjUhZCklLUmpq2uU1698592256.svg"
                  alt="Location Icon"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#1E88E5]">
                    Our Office
                  </h3>
                  <p className="text-lg text-[#333]">
                    1234 Broadway Ave, New York, NY 10001, USA
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-x-[20px]">
                <img
                  src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/z3VtDXQWCLwF8igKzy261698593387.svg"
                  alt="Phone Icon"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#1E88E5]">
                    Call Us
                  </h3>
                  <p className="text-lg text-[#333]">(+1) 212-555-1234</p>
                  <p className="text-sm text-[#666]">Mon-Fri: 9am - 6pm EST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-x-[20px]">
                <img
                  src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/ezytor/theme/qyfOQjUhZCklLUmpq2uU1698592256.svg"
                  alt="Email Icon"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#1E88E5]">
                    Email Us
                  </h3>
                  <p className="text-lg text-[#333]">support@sujuarena.com</p>
                  <p className="text-sm text-[#666]">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:py-[40px]">
            <div className="bg-white p-[40px] rounded-[12px] shadow-lg">
              <h2 className="text-[32px] font-semibold text-[#333] mb-[30px] text-center">
                Get in Touch
              </h2>
              <form>
                <input
                  className="w-full border border-[#D3D3D3] px-5 py-4 rounded-[8px] mb-5 text-lg focus:outline-none focus:border-[#1E88E5] transition-all duration-300"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="w-full border border-[#D3D3D3] px-5 py-4 rounded-[8px] mb-5 text-lg focus:outline-none focus:border-[#1E88E5] transition-all duration-300"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full border border-[#D3D3D3] px-5 py-4 rounded-[8px] mb-5 text-lg focus:outline-none focus:border-[#1E88E5] transition-all duration-300"
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  className="w-full border border-[#D3D3D3] px-5 py-4 h-[150px] rounded-[8px] mb-5 text-lg resize-none focus:outline-none focus:border-[#1E88E5] transition-all duration-300"
                  placeholder="Message"
                ></textarea>
                <button
                  className="w-full bg-gradient-to-r from-[#FF7F50] to-[#FF5E2F] hover:opacity-90 transition-all duration-300 text-white py-4 rounded-[8px] text-lg font-semibold"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
