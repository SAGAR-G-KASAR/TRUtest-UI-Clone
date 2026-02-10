import AboutTRUtestDiagnostics from "../Components/AboutTRUtestDiagnostics";
import WhatWeDo from "../Components/WhatWeDo";
import CostomerExperiance from "../Components/CostomerExperiance";
import WhatPeopleSay from "../Components/WhatPeopleSay";

function AboutUs() {
  return (
    <>
      <section>
        <div className="relative w-full h-full">
          <img
            src="\Images\about_banner.jpg"
            alt=""
            className="lg:w-full lg:h-full object-cover "
          />

          <div className="absolute bottom-10 left-30   ">
            <h2 className="lg:text-white text-blue-800 lg:text-5xl text-xl font-semibold">
              About Us
            </h2>
          </div>
        </div>

        <div className="lg:mx-20 mx-5">
          {/* AboutTRUDiagnostics start  */}
          <AboutTRUtestDiagnostics />
          {/* AboutTRUDiagnostics Ends  */}

          {/* Awards & Recognition Starts  */}
          <div className="mt-10  lg:mt-20 ">
            <h1 className="lg:text-3xl text-xl font-semibold  mb-10">
              Awards <span className="text-sky-500">& Recognition</span>
            </h1>
            <img
              src="\Images\awards_recognization_banner.jpg"
              alt=""
              className=" lg:max-w-5xl mx-auto "
            />
          </div>
          {/* Awards & Recognition Ends  */}

          {/* OUR STRENGTHS STARTS */}
          <div className="mt-10 lg:mt-20">
            <h1 className="lg:text-3xl text-xl font-semibold  mt-10 lg:mt-20 mb-10">
              Our <span className="text-sky-500">Strengths</span>
            </h1>
          </div>

          <div>
            <img
              src="\Images\about_us_two.webp"
              alt="our strengths image"
              className=" lg:max-w-5xl mx-auto"
            />
          </div>
          {/* OUR STRENGTHS Ends */}
        </div>
      </section>

      {/* OUR Mission Section  */}
      <section>
        <div className="bg-sky-50 h-auto w-full lg:mt-20 mt-10 p-10 lg:p-20 ">
          <div className=" grid lg:flex lg:grid-col-2 gap-5 lg:gap-15   lg:px-50 px-1">
            {/* card 1 */}
            <div className="p-5 lg:p-10 bg-white text-center rounded-3xl gap-3 mx-auto hover:-translate-y-2 duration-500 shadow-sm">
              <img
                src="\Images\Logo_Image\goal.png"
                alt=""
                className="mx-auto mb-3"
              />
              <h1 className="lg:text-2xl text-xl font-semibold mb-4 lg:mb-5">
                Our <span className="text-sky-500">Mission</span>
              </h1>
              <p className="text-center text-gray-700">
                To combine the power of medical experts and cutting-edge
                technology to make quality health care more accessible,
                affordable, accurate, and transparent for everyone.
              </p>
            </div>

            {/* card 2 */}
            <div className="p-5 lg:p-10 bg-white text-center rounded-3xl gap-3 mx-auto hover:-translate-y-2 duration-500 shadow-sm">
              <img
                src="\Images\Logo_Image\robot.png"
                alt=""
                className="mx-auto mb-3"
              />
              <h1 className="lg:text-2xl text-xl font-semibold mb-4 lg:mb-5">
                Our <span className="text-sky-500">Vision</span>
              </h1>
              <p className="text-center text-gray-700">
                To bring focus to the healthcare industry on quality,
                transparency, speed, and accuracy, and become ‘the preferred
                diagnostics partner’ for individuals, doctors, and medical
                institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:mx-20 mx-5">
          {/* What we do starts  */}
          <div>
            <WhatWeDo />
          </div>
          {/* What we do Ends  */}
          {/* customer experience starts  */}
          <div>
            <CostomerExperiance />
          </div>
          {/* customer experience Ends  */}
        </div>
      </section>

      <section>
        {/* WhatPeopleSay start  */}
        <div className="bg-sky-50 h-auto w-full lg:mt-10 mt-5">
          <WhatPeopleSay />
        </div>
        {/* WhatPeopleSay ends  */}
      </section>

      <section className="mx-5 lg:mx-20">
        <div className="grid lg:grid-cols-3 gap-10 mt-20">
          {/* card 1  */}
          <div className="flex rounded-xl shadow-l gap-2 p-5 border border-gray-300">
            <div className=" w-40">
              <img src="\Images\Logo_Image\shield.svg" alt="" />
            </div>
            <div>
              <h2 className="font-bold">Reliable</h2>
              <p className="text-gray-600 text-xs lg:text-sm">
                All products displayed on TRUtest Diagnostics are procured from
                verified and licensed pharmacies. All labs listed on the
                platform are accredited.
              </p>
            </div>
          </div>

          {/* card 2  */}
          <div className="flex rounded-xl shadow-l gap-2 p-5 border border-gray-300">
            <div className=" w-40">
              <img src="\Images\Logo_Image\lock.svg" alt="" />
            </div>
            <div>
              <h2 className="font-bold">Secure</h2>
              <p className="text-gray-600 text-xs lg:text-sm">
                All products displayed on TRUtest Diagnostics are procured from
                verified and licensed pharmacies. All labs listed on the
                platform are accredited.
              </p>
            </div>
          </div>

          {/* card 3  */}
          <div className="flex rounded-xl shadow-l gap-2 p-5 border border-gray-300">
            <div className=" w-40">
              <img src="\Images\Logo_Image\artboard.svg" alt="" />
            </div>
            <div>
              <h2 className="font-bold">Affordable</h2>
              <p className="text-gray-600 text-xs lg:text-sm">
                Find affordable medicine substitutes, health products, lab tests
                and free doctor consultations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
