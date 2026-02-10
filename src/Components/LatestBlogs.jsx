import { Link } from "react-router-dom";
function LatestBlogs() {
  return (
    <div className="mt-15">
      <div>
        <h1 className="text-3xl font-semibold  mb-10">
          Latest <span className="text-sky-500">Blogs</span>
        </h1>
      </div>
      {/* Cards  */}
      <div className="mt-10 gap-10 grid lg:grid-cols-3 sm:grid-cols-1">
        <Link to="/blog/blogrelibleblood" className="block">
          <div className="rounded-2xl hover:shadow-2xl h-110  hover:-translate-y-2 duration-500 bg-sky-100">
            <img
              className="rounded-2xl rounded-bl-none rounded-br-none"
              src="\Images\blood_test.jpg"
              alt=""
            />
            <div className="p-5 ">
              <h1 className="text-2xl font-bold">
                Reliable Blood Test Centre in Pune with Trusted Services
              </h1>
              <p className="text-l mt-2">
                Finding a reliable pathology lab in Pune is crucial for accurate
                diagnoses diagnosis. Whether you need a basic blood test or a
                comprehensive health package...
              </p>
            </div>
          </div>
        </Link>

        <Link to="/blog/blogcomprehensivehealth" className="block">
          <div className="rounded-2xl hover:shadow-2xl h-110 hover:-translate-y-2 duration-500 bg-gray-100">
            <img
              className="rounded-2xl rounded-bl-none rounded-br-none"
              src="\Images\health_checkup_package.jpg"
              alt=""
            />
            <div className="p-5 ">
              <h1 className="text-2xl font-bold">
                Comprehensive Health Checkup Packages & Diagnostic Services in
                Bhubaneswar
              </h1>
              <p className="text-l mt-2">
                Good health begins with timely diagnosis and preventive care. In
                a fast-paced world, regular checkups and health monitoring play
                a vital role in...
              </p>
            </div>
          </div>
        </Link>

        <Link to="/blog/blogyourtrusted" className="block">
          <div className="rounded-2xl hover:shadow-2xl h-110 hover:-translate-y-2  duration-500 bg-green-100">
            <img
              className="rounded-2xl rounded-bl-none rounded-br-none"
              src="\Images\pathalogy_lab_centre.jpg"
              alt=""
            />
            <div className="p-5 ">
              <h1 className="text-2xl font-bold">
                Your Trusted Pathology Lab and Diagnostic Centre in Goa
              </h1>
              <p className="text-l mt-2">
                In today’s fast-paced lifestyle, maintaining good health
                requires more than just reactive treatment. It calls for
                proactive health monitoring and early diagnosis. That’s...
              </p>
            </div>
          </div>
        </Link>
      </div>
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
              verified and licensed pharmacies. All labs listed on the platform
              are accredited.
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
              verified and licensed pharmacies. All labs listed on the platform
              are accredited.
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
    </div>
  );
}

export default LatestBlogs;
