import { FaMapLocationDot } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <section>
        <div className="relative w-full h-full">
          <img
            src="\Images\contact_banner.jpg"
            alt=""
            className="lg:w-full lg:h-full object-cover "
          />

          <div className="absolute bottom-10 left-30">
            <h2 className="lg:text-white text-blue-800 lg:text-5xl text-xl font-semibold">
              Contact Us
            </h2>
          </div>
        </div>
      </section>

      <div className="mx-2  lg:mx-30 grid grid-cols-1 lg:grid-cols-3 rounded-2xl mt-5  inset-shadow-xs shadow-lg lg:mt-20 ">
        <div className="p-3 col-span-1   lg:p-10 rounded-2xl lg:rounded-bl-2xl rounded-bl-none rounded-br-none lg:rounded-br-none lg:rounded-tr-none text-white bg-blue-400">
          <h1 className="text-lg lg:text-2xl font-semibold">
            Contact Information
          </h1>
          <div className="flex gap-1 lg:mt-5 mt-3 ">
            <div className="mt-1">
              <FaMapLocationDot />
            </div>
            <p>
              {" "}
              DLF Towers, Shivaji Marg, DSM 236-237, Najafgarh Rd, House Complex
              Market, Karampura Industrial Area, Najafgarh Road Industrial Area,
              Delhi - 110015
            </p>
          </div>

          <div className="flex items-start gap-1 lg:mt-5 mt-3 hover:text-black duration-300 ">
            <div className="mt-1">
              <SlEnvolopeLetter />
            </div>
            <a href="mailto:sagar96g.kasar@gmail.com">
              sagar***.kasar@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-1 lg:mt-5 mt-3 hover:text-black duration-300 ">
            <div className="mt-1">
              {" "}
              <BiPhoneCall />{" "}
            </div>
            <a href="tel:9175078005**">+91 75078005**</a>
          </div>

          <h1 className="mt-3 text-lg lg:text-2xl font-semibold ">
            Need Help?
          </h1>
          <p className="mt-2">
            We’re here to assist you with your diagnostics needs.
          </p>
        </div>

        {/* Right Side  */}
        <form className="col-span-2 ">
          <div className="p-5  ">
            <div>
              <h1 className="lg:text-2xl text-xl font-semibold mb-5">
                Enquire <span className="text-sky-500">Now</span>
              </h1>
            </div>

            <div className="gap-5 grid grid-cols-1 lg:grid-cols-2">
              <div className="grid gap-1 lg:gap-2">
                <label> Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder=""
                  className="border-1 border-gray-300 rounded-md px-3 py-1 
             focus:ring-3 focus:ring-sky-500/50 focus:duration-300 focus:outline-none "
                />
              </div>

              <div className="grid gap-1 lg:gap-2">
                <label>Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  className="border-1 border-gray-300 rounded-md px-3 py-1 
             focus:ring-3 focus:ring-sky-500/50 focus:duration-300 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid mt-5 lg:mt-5 gap-1 lg:gap-2">
              <label>Mobile Number</label>
              <input
                type="tel"
                id="email"
                placeholder=""
                className="border-1 border-gray-300 rounded-md px-3 py-1 
             focus:ring-3 focus:ring-sky-500/50 focus:duration-300 focus:outline-none "
              />
            </div>

            <div className="grid mt-5 lg:mt-5 gap-1 lg:gap-2">
              <label>Message</label>
              <textarea
                name=""
                id="message"
                className="border-1 border-gray-300 rounded-md px-3 py-1 
             focus:ring-3 focus:ring-sky-500/50 focus:duration-300 focus:outline-none "
              ></textarea>
            </div>

            <div className="flex items-start gap-2 text-md mt-2 lg:mt-5">
              <input
                type="checkbox"
                className="mt-2 border-1 border-gray-300 rounded-md px-3 py-1 
             focus:ring-3 focus:ring-sky-500/50 focus:duration-300 focus:outline-none "
              />
              <p className="text-gray-800 ">
                By submitting this form, I acknowledge and agree to the{" "}
                <span className="text-blue-700 ">
                  <Link
                    to="/termscondition"
                    className="cursor-pointer hover:text-black"
                  >
                    T&C,
                  </Link>{" "}
                  <Link
                    to="/PrivacyPolicy"
                    className="cursor-pointer hover:text-black"
                  >
                    {" "}
                    Privacy Policy,{" "}
                  </Link>
                </span>
                and consent to RCS, SMS and WhatsApp communication.
              </p>
            </div>

            <div className="grid mt-2 lg:mt-5 mb-5">
              <button className="bg-sky-700 hover:bg-sky-800 cursor-pointer text-white h-10 w-25  rounded-full ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
