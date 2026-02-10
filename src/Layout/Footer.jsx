import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const Patients = [
    { name: "Health Packages", path: "/healthpackage" },
    { name: "Home Collection", path: "/homecollection" },
    { name: "View Reports" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const UsefulLinks = [
    { name: "About Us", path: "/aboutus" },
    { name: "Blogs", path: "/blogs" },
    { name: "Partner With Us", path: "/partnerwithus" },
  ];

  const City = [
    { name: "Bangalore", path: "/center/banglore" },
    { name: "Pune", path: "/center/pune" },
    { name: "Kolkata", path: "/center/kolkata" },
    { name: "Bhubaneshwar", path: "/center/bhubaneswar" },
    { name: "Goa", path: "/center/goa" },
    { name: "Vijaywada", path: "/center/vijayawada" },
    { name: "Ghaziabad", path: "/center/ghaziabad" },
    { name: "Gurugram", path: "/center/gurugram" },
    { name: "Rohini", path: "/center/rohini" },
    { name: "Manglore", path: "/center/mangalore" },
    { name: "Ahmedabad", path: "/center/ahmedabad" },
  ];

  return (
    <footer className="mt-20 bottom-0 left-0 right-0 bg-amber-50  p-3 lg:p-20 overflow-hidden">
      {/* for LOGO Image */}
      <div className=" ">
        <img
          className=" h-12 w-[150px]"
          src="\Images\trutest_diagnostic_logo.png"
          alt="Logo Image"
        />
      </div>

      <div className="max-w-7xl px-2 mt-5 grid grid-cols-2 lg:grid-cols-12  sm:grid-cols-2 md:grid-cols-4 lg:gap-5 md:gap-5 gap-10 ">
        {/* section1 */}
        <div className="col-span-4 flex gap-10 ">
          <div className="justify-center text-left col-span-2 ">
            <h1 className="text-xl font-bold text-gray-700">Patient</h1>
            {Patients.map((item, index) => (
              <div key={index}>
                <Link to={item.path}>
                  {" "}
                  <ul>
                    <li className=" hover:text-gray-500 cursor-pointer">
                      {item.name}
                    </li>
                  </ul>
                </Link>
              </div>
            ))}
          </div>
          {/* section 2  */}
          <div className="justify-center text-left  gap-y-1">
            <h1 className="text-xl font-bold text-gray-700">Useful Links</h1>
            {UsefulLinks.map((item, index) => (
              <div key={index}>
                <Link to={item.path}>
                  {" "}
                  <ul>
                    <li className=" hover:text-gray-500 cursor-pointer">
                      {item.name}
                    </li>
                  </ul>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Our Centers  */}

        <div className="justify-center text-left grid grid-cols-2 gap-x-4 gap-y-1  col-span-4">
          <h1 className="text-xl font-bold justify-center text-left text-gray-700 ">
            Our Centers
          </h1>
          {City.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>
                {" "}
                <ul className="">
                  <li className=" hover:text-gray-500  cursor-pointer">
                    {item.name}
                  </li>
                </ul>
              </Link>
            </div>
          ))}
        </div>

        {/* CONTACT INFORMATION */}
        <div className="text-left  col-span-4">
          <h1 className="text-xl font-bold text-gray-700">
            Contact Information
          </h1>
          <div className="w-50 h-0.5  bg-black"></div>
          <ul>
            <div className="flex gap-1">
              <div className="text-gray-800  p-1 text-xl font-semibold">
                <FaMapMarkerAlt />
              </div>

              <li>
                DLF Towers, Shivaji Marg, DSM 236-237, Najafgarh Rd, House
                Complex Market, Karampura Industrial Area, Najafgarh Road
                Industrial Area, Delhi - 110015
              </li>
            </div>

            <div className="flex gap-1">
              <div className="text-gray-800  p-1 text-xl font-semibold">
                <AiOutlineMail />
              </div>

              <li>
                <a href="#" className=" hover:text-gray-400 cursor-pointer">
                  sagar@gmail.com
                </a>
              </li>
            </div>

            <div className="flex gap-1">
              <div className="text-gray-800  p-1 text-xl font-semibold">
                <FaPhoneAlt />
              </div>

              <li>
                <a href="#" className=" hover:text-gray-400 cursor-pointer">
                  +91 75078005**
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="text-black">
        © 2026 Your Company. All rights reserved by sagar kasar.
      </div>
    </footer>
  );
}
export default Footer;