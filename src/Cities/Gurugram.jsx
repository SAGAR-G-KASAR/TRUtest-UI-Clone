import WhyChoose from "../Components/WhyChoose";
import HealthPackageOnly from "../Components/HealthPackageOnly";
import { BiPhoneCall } from "react-icons/bi";
import BookingForm from "../Components/BookingForm";

function Gurugram() {
  return (
    <>
      <section>
        <div className="relative ">
          <img
            src="\Images\Centers_Image\Gurugram_banner.jpg"
            alt=""
            className="lg:w-full lg:h-full object-cover"
          />

          <div className="absolute bottom-10 left-30">
            <h2 className="lg:text-white text-blue-800 lg:text-5xl text-xl font-semibold">
              Gurugram
            </h2>
          </div>
        </div>
      </section>

      <section className="mx-5 lg:mx-30 mt-10 lg:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30  ">
          {/* left side  */}
          <div>
            <h1 className="lg:text-2xl text-xl font-semibold  mb-5 lg:mb-5">
              Looking for a Reliable &{" "}
              <span className="text-sky-500">
                best blood test center in Gurugram?
              </span>
            </h1>

            <p className="text-gray-800 ">
              Look no further when TRUtest diagnostics, your reliable healthcare
              partner, is here. We offer accurate, reliable, and affordable
              diagnostics services, all with a commitment to your health and
              well-being.
            </p>

            <h1 className="lg:text-3xl text-xl font-semibold mt-5 mb-5 lg:mb-5">
              Blood Test Home Collection Services in Gurugram
            </h1>

            <p className="text-gray-800 ">
              Too busy to visit the lab or facing mobility challenges? Our home
              collection service makes diagnostics easier than ever. Schedule an
              appointment, and our trained phlebotomists will visit your place
              to collect your samples safely, quickly, and hassle-free.
            </p>
          </div>
          {/* right side  */}
          <div>
            <img
              src="\Images\Centers_Image\banglore_img.jpg"
              alt=""
              className="rounded-2xl h-full w-full  "
            />
          </div>
        </div>

        <div className=" lg:mt-20 mt-10 ">
          <h1 className="lg:text-2xl text-xl font-semibold mt-10 lg:mt-20 mb-5 lg:mb-10">
            Why Choose{" "}
            <span className="text-sky-500">
              TRUtest diagnostics in Gurugram?
            </span>
          </h1>
          <WhyChoose />
        </div>

        <div>
          <HealthPackageOnly />
        </div>
      </section>

      <section className="bg-sky-50  mt-20">
        <div className="mx-3 lg:mx-30 py-10 lg:py-20 mb-20">
          <h1 className="lg:text-2xl text-xl font-semibold   mb-5 lg:mb-10">
            Pathology{" "}
            <span className="text-sky-500">Lab & diagnostics Centre</span> in
            Gurugram
          </h1>

          <div className="rounded-2xl p-5 lg:p-5 bg-white w-auto lg:w-100 ">
            <h1 className="mb-3 font-semibold text-lg lg:text-2xl  text-gray-700 bg">
              TRUtest Blood Test Center - Gurugram
            </h1>
            <p>
              1st Floor, No. 10(new number 71), Vinyasa, Cambridge Road, Ulsoor,
              Gurugram - 560008
            </p>

            <div className="flex justify-between">
              <div className="flex items-start gap-1 lg:mt-5 mt-3  text-blue-900 hover:underline ">
                <div className="mt-1">
                  {" "}
                  <BiPhoneCall />{" "}
                </div>
                <a href="tel:9175078005**">+91 7507800507</a>
              </div>
              <a
                href="https://www.google.com/maps/place/Gurugram,+Haryana/@28.4225019,76.8252691,11z/data=!3m1!4b1!4m6!3m5!1s0x390d19d582e38859:0x2cf5fe8e5c64b1e!8m2!3d28.4594965!4d77.0266383!16zL20vMDNmeW1n?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-700 text-center lg:mt-5 mt-3 p-2 hover:underline hover:bg-sky-800 cursor-pointer text-white h-10 w-25  rounded-full "
              >
                View Map
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-5 lg:mx-30 mt-5 lg:mt-20">
        <h1 className="lg:mb-5 mb-3 text:lg lg:text-2xl font-semibold">
          Welcome to TRUtest Diagnostics:{" "}
          <span className="text-sky-500">
            Your Trusted Pathology Lab Center in Gurugram
          </span>
        </h1>
        <p className="mb-7 lg:mb-10 text-sm lg:text-base text-gray-800 ">
          At TRUtest Diagnostics, we offer precision and care in diagnosis. As
          one of the most renowned pathology labs & blood test centers in India,
          we understand that quick, precise, and accurate tests are essential
          for your health journey. Whether you need routine diagnostics tests or
          advanced treatments, we're here to provide results you can rely on.
        </p>

        <h1 className="lg:mb-5 mb-3 text:lg lg:text-2xl font-semibold">
          Your Trusted{" "}
          <span className="text-sky-500">Blood Test Centre in Gurugram</span>
        </h1>
        <p className="mb-7 lg:mb-10 text-sm lg:text-base text-gray-800 ">
          Looking for a reliable blood test center? At TRUtest Diagnostics, we
          offer convenience without compromising on precision. Our modern
          laboratories and professionally trained staff ensure that every test
          meets international standards. We are more than just a testing center,
          we are an integral partner in your overall health.
        </p>

        <h1 className="lg:mb-5 mb-3 text:lg lg:text-2xl font-semibold">
          Blood Test at Home -{" "}
          <span className="text-sky-500">Because Your Comfort Matters</span>
        </h1>
        <p className="mb-7 lg:mb-10 text-sm lg:text-base text-gray-800 ">
          With our blood test home collection service, we make diagnostics easy
          and hassle-free. From simple online bookings to professional blood
          test at home collection, we ensure that every procedure is clean,
          safe, and efficient. Our blood test home collection service brings the
          lab to your doorstep, offering you convenience and comfort.
        </p>

        <BookingForm />
      </section>
    </>
  );
}

export default Gurugram;
