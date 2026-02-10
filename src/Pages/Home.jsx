import { useEffect, useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { LuNotepadText } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
import PopularPackages from "../Components/PopularPackages";
import AboutTRUtestDiagnostics from "../Components/AboutTRUtestDiagnostics";
import WhatPeopleSay from "../Components/WhatPeopleSay";
import LatestBlogs from "../Components/LatestBlogs";
import WhatWeDo from "../Components/WhatWeDo";
import { Link } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = 4;
  const sliderRef = useRef(null);

  const [selectedPackage, setSelectedPackage] = useState(false);

  // this useEffect use for when form-card is open site-body can bot be scrolling
  useEffect(() => {
    if (selectedPackage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedPackage]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Slide transition
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <>
      <section>
        <div className="mx-5 lg:mx-20 ">
          <div className="w-full mt-10  flex overflow-hidden relative items-center rounded-xl shadow-lg">
            {/* Slider Track */}
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
            >
              {/* Slide 1 */}
              <div className=" min-w-full">
                <img
                  src="Images\HomeSlide1.jpg"
                  alt="Slide 1"
                  className="w-full  h-auto object-cover "
                />
              </div>

              {/* Slide 2 */}
              <div className=" min-w-full">
                <img
                  src="Images\HomeSlide2.jpg"
                  alt="Slide 2"
                  className="w-full  h-auto object-cover"
                />
              </div>

              {/* Slide 3 */}
              <div className=" min-w-full">
                <img
                  src="Images\HomeSlide3.jpg"
                  alt="Slide 3"
                  className="w-full  h-auto object-cover"
                />
              </div>

              {/* Slide 4 */}
              <div className=" min-w-full">
                <img
                  src="Images\HomeSlide4.jpg"
                  alt="Slide 4"
                  className="w-full  h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* for active slides below bar */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300
              ${index === i ? "w-8 bg-blue-600" : "w-2 bg-gray-300"}
            `}
              ></span>
            ))}
          </div>

          {/* new help  */}
          <div className="  lg:px-10">
            <div className="bg-blue-50 mt-10 rounded-xl">
              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold p-6 sm:p-10 text-center sm:text-left">
                Need any <span className="text-sky-500">help?</span>
              </h1>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 sm:px-6 pb-6">
                {/* Card 1 */}
                <Link to="tel:917507800507">
                  <div className="bg-gray-100 rounded-xl p-4 sm:p-5 flex items-center gap-3 shadow-sm hover:bg-sky-100 hover:scale-99 duration-500 transition border border-gray-100 hover:border-sky-500">
                    <div className="flex items-center justify-center text-2xl sm:text-3xl bg-sky-400 text-white h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                      <FiPhoneCall />
                    </div>

                    <div className="flex-1" href="tel:917507800507">
                      <h1 className="text-lg sm:text-xl font-semibold">
                        Call to book your test
                      </h1>
                      <h3 className="text-sm sm:text-base text-gray-400">
                        Our dedicated team call you
                      </h3>
                    </div>

                    <div className="text-3xl sm:text-4xl">
                      <MdNavigateNext />
                    </div>
                  </div>
                </Link>

                {/* Card 2 */}
                <div
                  onClick={() => setSelectedPackage(true)}
                  className="bg-gray-100 cursor-pointer rounded-xl p-4 sm:p-5 flex items-center gap-3 shadow-sm hover:bg-orange-100 hover:scale-99 duration-500 transition border border-gray-100 hover:border-orange-500"
                >
                  <div className="flex items-center justify-center text-2xl sm:text-3xl bg-orange-400 text-white h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                    <LuNotepadText />
                  </div>

                  <div className="flex-1">
                    <h1 className="text-lg sm:text-xl font-semibold">
                      Have a Prescription?
                    </h1>
                    <h3 className="text-sm sm:text-base text-gray-400">
                      Upload and book
                    </h3>
                  </div>

                  <div className="text-3xl sm:text-4xl ">
                    <MdNavigateNext />
                  </div>
                </div>
                {/* Open form  */}
                {selectedPackage && (
                  <div className="fixed inset-0 z-50 bg-black/50  flex items-center justify-center px-5 lg:px-90">
                    {/* LEFT SIDE  */}
                    <div className="  grid grid-cols-1  lg:grid-cols-12 bg-white rounded-2xl">
                      <div className="lg:col-span-5">
                        <img
                          src="\Images\Manipal_img.jpg"
                          alt=""
                          className="hidden sm:block rounded-2xl h-full w-full   object-cover rounded-tr-none rounded-br-none"
                        />
                      </div>
                      {/* RIGHT SIDE  */}
                      <div className="lg:col-span-7 p-6   ">
                        <div className="flex justify-between">
                          <h1 className="text-2xl font-semibold  ">
                            Book <span className="text-sky-500 ">Now</span>
                          </h1>
                          <button
                            onClick={() => setSelectedPackage(false)}
                            className="cursor-pointer  text-2xl font-bold text-gray-500 hover:text-black"
                          >
                            ×
                          </button>
                        </div>

                        <h4 className="font-semibold text-lg mt-5 mb-3">
                          Selected: prescriptions
                        </h4>

                        <form>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="Name"
                              className="border-1  border-gray-300 py-1 px-2 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
                            />
                            <input
                              type="tel"
                              placeholder="Mobile Number"
                              className="border-1 border-gray-300 py-1 px-2 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
                            />
                            <input
                              type="email"
                              placeholder="Email"
                              className="border-1 border-gray-300 py-1 px-2 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
                            />
                            <select
                              name=""
                              id=""
                              className="border-1 border-gray-300 py-1 px-2  text-gray-500 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
                            >
                              <option value="">Select City *</option>
                              <option value="">Banglore</option>
                              <option value="">Pune</option>
                              <option value="">Koltata</option>
                              <option value="">Bhubaneshwar</option>
                              <option value="">Goa</option>
                              <option value="">Vijaywada</option>
                              <option value="">Gurugram</option>
                              <option value="">Ghajiabad</option>
                              <option value="">Ahemdabad</option>
                            </select>
                          </div>

                          <textarea
                            name="message"
                            id="message"
                            className="border-1 border-gray-300 rounded-md px-3 py-1 w-full mt-5 focus:ring-3 focus:ring-sky-500/50 focus:duration-1  00 focus:outline-none "
                          >
                            Your preferred date and time
                          </textarea>

                          <input
                            type="file"
                            placeholder="Upload File"
                            className="border-1 mt-3 border-gray-300 py-1 px-2 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
                          />

                          <div className="grid mt-2 lg:mt-5 mb-5">
                            <button className="bg-sky-700 hover:bg-sky-800 cursor-pointer text-white h-10 w-25  rounded-full ">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                {/* ends form  */}

                {/* Card 3 */}
                <Link to="https://wa.me/9175078005**" target="_blank">
                  <div className="bg-gray-100 rounded-xl p-4 sm:p-5 flex items-center gap-3 shadow-sm cursor-pointer hover:bg-green-100 hover:scale-99 duration-400 transition border border-gray-100 hover:border-green-500">
                    <div className="flex items-center justify-center text-2xl sm:text-3xl bg-green-500 text-white h-10 w-10 sm:h-12 sm:w-12 rounded-full">
                      <BsWhatsapp />
                    </div>

                    <div className="flex-1">
                      <h1 className="text-lg sm:text-xl font-semibold">
                        WhatsApp Booking
                      </h1>
                      <h3 className="text-sm sm:text-base text-gray-400">
                        Text us on WhatsApp to book test
                      </h3>
                    </div>

                    <div className="text-3xl sm:text-4xl ">
                      <MdNavigateNext />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* new help ends  */}

          {/* POPULAR PACKAGES STARTS */}

          <div>
            <h1 className="text-3xl font-semibold  mt-20 mb-10">
              Our <span className="text-sky-500">Popular Packages</span>
            </h1>
          </div>

          <PopularPackages />

          {/* POPOLAR PACKAGES ENDS */}

          {/* OUR STRENGTHS STARTS */}
          <div>
            <h1 className="text-3xl font-semibold  mt-20 mb-10">
              Our <span className="text-sky-500">Strengths</span>
            </h1>
          </div>

          <div>
            <img src="\Images\about_us_two.webp" alt="our strengths image" />
          </div>
          {/* OUR STRENGTHS Ends */}

          {/* WHAT WE DO STARTS */}
          <WhatWeDo />
          {/* WHAT WE DO  ENDS */}

          {/* see all packages starts  */}
          <div className="bg-pink-50 rounded-2xl w-full h-auto grid lg:grid-cols-2 gap-5 mt-20 p-5">
            <div className="p-5">
              <h1 className="xl:text-3xl  mt-5 p-5  ">
                Discover Comprehensive Health <br />
                Packages Tailored to Your Needs.
              </h1>
              <Link to="/healthpackage">
                <button className="btn text-white bg-blue-950 hover:bg-blue-900 cursor-pointer rounded-full p-3 mx-5 mt-2">
                  See all packages
                </button>
              </Link>
            </div>
            <div>
              <img src="\Images\cta-img.png" alt="health package" />
            </div>
          </div>
          {/* see all packages ends  */}

          {/* AboutTRUDiagnostics start  */}
          <AboutTRUtestDiagnostics />
          {/* AboutTRUDiagnostics Ends  */}
        </div>

        {/* WhatPeopleSay start  */}
        <div className="bg-sky-50 h-auto w-full lg:mt-20 mt-10">
          <WhatPeopleSay />
        </div>
        {/* WhatPeopleSay ends  */}

        <div className="mx-5 lg:mx-20">
          <LatestBlogs />
        </div>
      </section>
    </>
  );
};

export default Home;
