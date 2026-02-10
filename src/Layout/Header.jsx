import { LuPhoneCall } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

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
    <div className=" top-0 z-50 lg:bg-white sticky bg-gray-50 ">
      <div className=" flex lg:p-1 lg:mx-15   h-auto">
        <div className="left-15 ">
          <img
            className="h-12  w-25 p-2 lg:h-13 lg:w-35"
            src="\Images\trutest_diagnostic_logo.png"
            alt="Logo Image"
          />
        </div>

        {/* CONTACTS  */}
        <div className="lg:flex  hidden items-center  gap-5 absolute lg:right-15 right-6">
          <Link to="tel:9175078005**">
            <div className="flex ">
              <div className="text-blue-800 mt-2 p-1 text-2xl">
                <LuPhoneCall />
              </div>
              <div className="  mx-2">
                <p className="text-sky-800  font-bold">CALL TO BOOK</p>
                <h1 className="text-sky-500 font-bold cursor-pointer">
                  +91 75078005**
                </h1>
              </div>
            </div>
          </Link>

          <Link to="https://wa.me/9175078005**" target="none">
            <div className="flex ">
              <div className="text-blue-800 mt-2 p-1 text-2xl">
                <BsWhatsapp />
              </div>
              <div className="  mx-2 ">
                <p className="text-sky-800  font-bold">BOOK ON WHATSAPP</p>
                <h1 className="text-sky-500 font-bold cursor-pointer">
                  +91 75078005**
                </h1>
              </div>
            </div>
          </Link>
        </div>

        {/* HAMBURGER (Mobile) */}
        <button
          className="lg:hidden text-3xl flex right-0 p-2 absolute"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ************** DESKTOP NAVBAR ************* */}
      <nav className="hidden lg:block bg-sky-800  ">
        <ul className="flex justify-center text-white gap-x-7">
          {[
            ["Home", "/"],
            ["About us", "/aboutus"],
            ["Health Package", "/healthpackage"],
            ["Home Collection", "/homecollection"],
          ].map(([label, path]) => (
            <li key={label} className="nav-item hover:bg-sky-300  my-auto">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  ` block hover:bg-sky-300 p-3 hover:text-black ${
                    isActive
                      ? "bg-sky-300 p-3 text-black font-semibold h-full "
                      : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* CENTER LOCATOR */}
          <li className="nav-item relative group flex items-center hover:bg-sky-300 p-3 hover:text-black  ">
            Center Locator
            <svg
              className="w-5 h-5 ml-1 p-0.5  transition-transform group-hover:rotate-180 duration-500  "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 9l-7 7-7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <ul className="  scale-y-0 origin-top group-hover:scale-y-100 absolute left-0 top-full w-44 duration-500 bg-white text-black text-sm shadow-lg rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 ">
              {City.map((item, index) => (
                <li key={index}>
                  {/* <Link to={item.path} >{item.name}</Link> */}
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block w-full px-4 py-1 transition
                      hover:bg-sky-800 hover:text-white
                        ${isActive ? "bg-sky-700 text-white" : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {[
            ["Partner With Us", "/partnerwithus"],
            ["Blogs", "/blogs"],
            ["Contact Us", "/contactus"],
          ].map(([label, path]) => (
            <li key={label} className="nav-item hover:bg-sky-300">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  ` block hover:bg-sky-300 p-3 hover:text-black ${
                    isActive
                      ? "bg-sky-300 p-3 text-black font-semibold h-full "
                      : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* ************** MOBILE SIDEBAR ************* */}
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed  inset-0 bg-black/40 z-40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 rounded-2xl overflow-hidden rounded-tr-none rounded-br-none bg-white z-50 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button
          className="absolute top-2 right-2 text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>

        <ul className="lg:block mt-10 justify-center  text-black">
          {[
            ["Home", "/"],
            ["About us", "/aboutus"],
            ["Health Package", "/healthpackage"],
            ["Home Collection", "/homecollection"],
          ].map(([label, path]) => (
            <li key={label} className="nav-item hover:bg-sky-300  my-auto">
              <NavLink
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  ` block hover:bg-sky-300 p-3 hover:text-black ${
                    isActive
                      ? "bg-sky-300 p-3 text-black font-semibold h-full "
                      : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/*MOBILE CENTER LOCATOR */}
          <li>
            <button
              className="flex justify-between w-full py-2 px-3 border-b"
              onClick={() => setCityOpen(!cityOpen)}
            >
              Center Locator
              <span
                className={`transition-transform duration-500 ${cityOpen ? "rotate-180" : ""}`}
              >
                <svg
                  className="w-5 h-5 ml-1 p-0.5  transition-transform group-hover:rotate-180 duration-500  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 9l-7 7-7-7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {cityOpen && (
              <ul className=" pl-5 mt-2 space-y-1  text-sm">
                {City.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block w-full px-4 py-1 rounded-lg transition
                      hover:bg-sky-800 hover:text-white 
                        ${isActive ? "bg-sky-700 text-white" : ""}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {[
            ["Partner With Us", "/partnerwithus"],
            ["Blogs", "/blogs"],
            ["Contact Us", "/contactus"],
          ].map(([label, path]) => (
            <li key={label} className="nav-item hover:bg-sky-300">
              <NavLink
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  ` block hover:bg-sky-300 p-3 hover:text-black ${
                    isActive
                      ? "bg-sky-300 p-3 text-black font-semibold h-full "
                      : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
