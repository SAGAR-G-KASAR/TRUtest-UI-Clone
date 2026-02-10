import { useState } from "react";
import { Link } from "react-router-dom";

function PartnerWithUs() {
  const partners = [
    { partner: "Franchisee collection center" },
    { partner: "RWA Camps" },
    { partner: "Annual Health Checks" },
    { partner: "Corporate Camps for Bulk Testing" },
    { partner: "Pre Employment Health Checks" },
  ];

  const growths = [
    {
      id: "01",
      bg: "bg-gray-50",
      img: "Images/Logo_Image/nabl-nabh-cap.svg",
      text: "Quality First - all over laboratories, follow national - NABL /NABH & international - CAP guidlines",
    },
    {
      id: "02",
      bg: "bg-blue-50",
      img: "Images/Logo_Image/strong-leadership.svg",
      text: "Strong leadership team with sound experience of building diagnostics business",
    },
    {
      id: "03",
      bg: "bg-green-50",
      img: "Images/Logo_Image/customer-first.svg",
      text: "Customer First approach at the core of everything we do",
    },
    {
      id: "04",
      bg: "bg-rose-50",
      img: "Images/Logo_Image/cutomised-test.svg",
      text: "Customized Test menu focused as per local market need",
    },
    {
      id: "05",
      bg: "bg-blue-50",
      img: "Images/Logo_Image/qualified-trained.svg",
      text: "Qualified and well-trained technical team",
    },
    {
      id: "06",
      bg: "bg-gray-50",
      img: "Images/Logo_Image/earning-learning.svg",
      text: "Great Earning and learning opportunity for the right partners",
    },
  ];

  const ITEMS_PER_PAGE = 4;
  const [startIndex, setStartIndex] = useState(0);

  const nextHandler = () => {
    if (startIndex + ITEMS_PER_PAGE < growths.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const prevHandler = () => {
    if (startIndex - ITEMS_PER_PAGE >= 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  return (
    <>
      <section>
        <div className="relative w-full h-full">
          <img
            src="\Images\partner_with_us_banner.jpg"
            alt=""
            className="lg:w-full lg:h-full object-cover "
          />

          <div className="absolute bottom-10 left-30   ">
            <h2 className="lg:text-white text-blue-800 lg:text-5xl text-xl font-semibold">
              Partner With Us
            </h2>
          </div>
        </div>

        <div className="bg-sky-100 lg:p-20 p-5">
          <h1 className="lg:text-3xl text-l font-semibold  text-center mb-10">
            Who can become a{" "}
            <span className="text-sky-500">
              {" "}
              Partner with TRUtest Diagnostics
            </span>
          </h1>

          <div className="grid-cols-1 grid lg:grid-cols-5 gap-5 px-10  lg:px-40 ">
            {partners.map((item, id) => (
              <div
                key={id}
                className="lg:h-45 lg:w-45 h-35 w-35  rounded-full text-center justify-center items-center text-white  p-5 flex mx-auto  bg-sky-700"
              >
                {item.partner}
              </div>
            ))}
          </div>

          <h1 className=" text-center text-gray-800 lg:text-3xl text-xl font-semibold mt-5 lg:mt-10 mb-5">
            Are you amongst these?
          </h1>
          <Link to="/blog/partnerwithusregistration">
            <button className="bg-sky-700 p-3 font-semibold cursor-pointer text-l px-5 mx-auto mt-5 lg:mt-10 flex  text-white hover:bg-sky-800 rounded-full">
              Apply Now
            </button>
          </Link>
        </div>
      </section>

      <section className="mx-5 lg:mx-30 ">
        {/* Preferred Partner In Growth Starts  */}
        <div className="">
          <h1 className="lg:text-3xl text-l font-semibold  mt-5 lg:mt-15 mb-10">
            Why TRUtest Diagnostics As Your{" "}
            <span className="text-sky-500"> Preferred Partner In Growth</span>
          </h1>

          {/* growth  */}
          <div className="">
            <div className=" grid  lg:grid-cols-4 grid-cols-1 gap-5  ">
              {growths
                .slice(startIndex, startIndex + ITEMS_PER_PAGE)
                .map((item, index) => (
                  <div
                    key={index}
                    className={` ${item.bg}   rounded-2xl p-5  lg:p-5`}
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-full mb-10 h-25 w-25"
                    />

                    <h1 className="font-semibold text-sm lg:text-xl">
                      {item.text}
                    </h1>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={prevHandler}
            disabled={startIndex === 0}
            className="px-6 py-2 rounded-full bg-gray-200 hover:bg-sky-400 disabled:opacity-40"
          >
            ◀ Back
          </button>

          <button
            onClick={nextHandler}
            disabled={startIndex + ITEMS_PER_PAGE >= growths.length}
            className="px-6 py-2 rounded-full bg-gray-200 hover:bg-sky-400 disabled:opacity-40"
          >
            Next ▶
          </button>
        </div>
        {/* Preferred Partner In Growth Ends  */}

        {/* Key Advantage of TRUtest Diagnostics Starts  */}

        <h1 className="lg:text-3xl text-l font-semibold text-center mt-5 lg:mt-15 mb-10">
          Key Advantage of{" "}
          <span className="text-sky-500">TRUtest Diagnostics</span>
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          {/* first  */}
          <div className="bg-sky-100 p-10 lg:p-12 font-semibold rounded-2xl lg:text-lg text-sm   ">
            <ul className="list-disc list-outside">
              <li>Branded collection centers</li>
              <li>Lucrative Incentive scheme</li>
              <li>Strong prescriber network</li>
              <li>Sales and Marketing activities to support business growth</li>
            </ul>
          </div>

          {/* second */}
          <div className="bg-sky-100 p-10 lg:p-12 font-semibold rounded-2xl lg:text-lg text-sm  ">
            <ul className="list-disc list-outside ">
              <li>
                Logistics - Temperature control and real time temperature
                monitoring system
              </li>
              <li>
                Smart Reports available for better understanding of a customer's
                health status
              </li>
              <li>
                Laboratory information management system direct access - IT
                software (fully automated)
              </li>
              <li>
                Communication support to consumers by SMS / WhatsApp platforms
              </li>
              <li>Training Support</li>
            </ul>
          </div>
        </div>
        <img
          src="Images\awards_recognization_banner.jpg"
          alt=""
          className="mt-5 lg:mt-10  lg:px-40"
        />
        {/* Key Advantage of TRUtest Diagnostics Ends  */}
      </section>

      <section className="w-full bg-sky-50 mt-5 lg:mt-10">
        <div className="p-5 lg:p-10 mx-5 lg:mx-30 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <div className="">
            <h1 className="lg:text-3xl text-lg font-semibold  mt-5 lg:mt-15 mb-5 lg:mb-10">
              For Franchisee,{" "}
              <span className="text-sky-500">Setup Requirement</span>
            </h1>
            <ul className="list-disc list-outside text-sm lg:text-lg">
              <li>Area Required - 160 to 250 sq feet</li>
              <li>
                Infrastructure support through a unique layout design template
              </li>
              <li>Training provided to staff</li>
              <li>
                Complimentary support services including logistics, consumables,
                software licences and marketing
              </li>
              <li>
                Franchisee customer care - complaint and grievance handling
              </li>
              <li>
                Marketing support by way of leaflets, camps, health checks, RWA
                initiatives and advertisements, presence on website and other
                digital platforms
              </li>
              <li>IT support - official email id for communication</li>
              <li>
                Mobile app for real-time tracking and Home collection booking
              </li>
            </ul>
          </div>

          <div className="">
            <h1 className="lg:text-3xl text-lg font-semibold  mt-5 lg:mt-15 mb-5 lg:mb-10">
              For Franchisee,{" "}
              <span className="text-sky-500">Support Includes</span>
            </h1>
            <ul className="list-disc list-outside text-sm lg:text-lg">
              <li>Branding Support upto Rs.25,000 against bill</li>
              <li>
                Temperature Control Box / bag for home collection - Initially
                Once
              </li>
              <li>Free Starter Kit</li>
              <li>2 Lab Coats - Yearly</li>
              <li>1 - Home Collection Bag</li>
              <li> Home Collection Dress - Yearly</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h1 className="lg:text-3xl text-lg font-semibold text-center mt-5 lg:mt-15 mb-5 lg:mb-10">
          Become a, <span className="text-sky-500">partner today</span>
        </h1>

        <Link to="/blog/partnerwithusregistration">
          <button className="bg-sky-700 p-3 font-semibold cursor-pointer text-l px-5 mx-auto mt-5 lg:mt-10 flex  text-white hover:bg-sky-800 rounded-full">
            Apply Now
          </button>
        </Link>
      </section>
    </>
  );
}

export default PartnerWithUs;
