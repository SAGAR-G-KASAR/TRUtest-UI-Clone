import { useState, useEffect } from "react";

function HealthPackageOnly() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  // this useEffect use for when form-card is open site-body can bot be scrolling
  useEffect(() => {
    if (selectedPackage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedPackage]);

  const packages = [
    {
      bg: "bg-rose-50",
      sideBg: "bg-rose-200",
      title: ["TRU", "Care", "Package"],
      selected: "TRU Care Health Package ",
      params: "80 Parameter Tested",
      oldPrice: "₹4880/-",
      price: "₹799",
      img: "/Images/female_tru_gold.png",
      imgMargin: "mt-15",
    },
    {
      bg: "bg-gray-50",
      sideBg: "bg-gray-200",
      title: ["Good", "Health", "Package"],
      selected: "Good Health Package ",
      params: "80 Parameter Tested",
      oldPrice: "₹4935/-",
      price: "₹999",
      img: "/Images/portrait-cheerful-family.png",
      imgMargin: "mt-30",
    },
    {
      bg: "bg-green-50",
      sideBg: "bg-green-200",
      title: ["TRU", "Vital Health", "Package", "Basics"],
      selected: "TRU Vital Health Package Basics",
      params: "88 Parameter Tested",
      oldPrice: "₹8110/-",
      price: "₹1,499/-",
      img: "/Images/happy-indian-family.png",
      imgMargin: "mt-30",
    },
    {
      bg: "bg-purple-50",
      sideBg: "bg-purple-200",
      title: ["TRU", "Vital Health", "Package", "Advance"],
      selected: "TRU Vital Health Package Advance",
      params: "89 Parameter Tested",
      oldPrice: "₹9010/-",
      price: "₹1,799/-",
      img: "/Images/doctor-preparing-routine-medical-check.png",
      imgMargin: "mt-20",
    },
    {
      bg: "bg-rose-50",
      sideBg: "bg-rose-200",
      title: ["TRU Gold", "Package", "(Male)"],
      selected: "TRU Gold Package (Male)",
      params: "91 Parameter Tested",
      oldPrice: "₹10235/-",
      price: "₹2,999/-",
      img: "/Images/men_tru_gold.png",
      imgMargin: "mt-20",
    },
    {
      bg: "bg-green-50",
      sideBg: "bg-green-200",
      title: ["TRU Gold", "Package", "(Female)"],
      selected: "TRU Gold Package (Female)",
      params: "91 Parameter Tested",
      oldPrice: "₹10505/-",
      price: "₹2,999/-",
      img: "/Images/female_tru_gold2.png",
      imgMargin: "mt-20",
    },
    {
      bg: "bg-stone-50",
      sideBg: "bg-stone-200",
      title: ["TRU Gold", "Package", "(Combo)"],
      selected: "TRU Gold Package (Combo)",
      params: "91 Parameter Tested",
      oldPrice: "₹10,395/-",
      price: "₹4,999/-",
      img: "/Images/couple_Package.png",
      imgMargin: "mt-20",
    },
    {
      bg: "bg-teal-50",
      sideBg: "bg-teal-200",
      title: ["Men", "Wellness", "Package"],
      selected: "Men Wellness Package ",
      params: "82 Parameter Tested",
      oldPrice: "₹5,910/-",
      price: "₹1,600/-",
      img: "/Images/Men_welness.png",
      imgMargin: "mt-20",
    },
    {
      bg: "bg-violet-50",
      sideBg: "bg-violet-200",
      title: ["Women", "Wellness", "Package"],
      selected: "Women Wellness Package ",
      params: "88 Parameter Tested",
      oldPrice: "₹7,460/-",
      price: "₹1,800/-",
      img: "/Images/Women_welness.png",
      imgMargin: "mt-20",
    },
    {
      bg: "bg-pink-50",
      sideBg: "bg-pink-200",
      title: ["Senior Citizen", "Health", "Package For", "Women"],
      selected: "Senior Citizen Health Package For Women",
      params: "91 Parameter Tested",
      oldPrice: "₹9,310/-",
      price: "₹2,799/-",
      img: "/Images/Senior_women.png",
      imgMargin: "mt-20",
    },
    {
      bg: "bg-yellow-50",
      sideBg: "bg-yellow-200",
      title: ["Senior Citizen", "Health", "Package For", "Men"],
      selected: "Senior Citizen Health Package For Men",
      params: "91 Parameter Tested",
      oldPrice: "₹8,940/-",
      price: "₹2,799/-",
      img: "/Images/senior_men.png",
      imgMargin: "mt-20",
    },
  ];

  return (
    <>
      {/* section of cards  */}
      <section className="select-none">
        <h1 className="lg:text-3xl text-xl font-semibold mt-10 lg:mt-20  mb-10">
          Popular <span className="text-sky-500">Health Check Up Packages</span>
        </h1>
        {/* CARDS  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`h-90 w-auto rounded-xl overflow-hidden ${item.bg}`}
            >
              <div className="h-[calc(100%-25%)] flex">
                {/* Left Content */}
                <div className="w-[40%] mx-6">
                  <div className="h-3 w-3 rounded-full bg-blue-500 shadow shadow-blue-500 mt-4"></div>
                  <p className="font-semibold">{item.id} </p>
                  {item.title.map((text, i) => (
                    <h1
                      key={i}
                      className={`font-bold text-xl ${
                        i !== 0 ? "text-blue-500" : "mt-2"
                      }`}
                    >
                      {text}
                    </h1>
                  ))}

                  <p className="bg-sky-400 text-white text-xs rounded-full p-1 mt-4 inline-block">
                    {item.params}
                  </p>

                  <p className="text-gray-400 mt-3 font-bold line-through ">
                    {item.oldPrice}
                  </p>

                  <p className="font-bold text-2xl">{item.price}</p>
                </div>

                {/* Right Image */}
                <div
                  className={`w-[45%] ${item.sideBg} rounded-bl-[500%_400px] rounded-br-[100%_50px] relative`}
                >
                  <div className={item.imgMargin}>
                    <img
                      src={item.img}
                      alt="package"
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedPackage(item)}
                className="rounded-full bg-blue-300 hover:bg-sky-500 p-2 mt-5 mx-5 w-25 cursor-pointer"
              >
                Book Now
              </button>

              {/* Open form  */}
              {selectedPackage && (
                <div className="fixed inset-0 z-50 bg-black/10  flex items-center justify-center px-5 lg:px-90">
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
                          onClick={() => setSelectedPackage(null)}
                          className="cursor-pointer  text-2xl font-bold text-gray-500 hover:text-black"
                        >
                          ×
                        </button>
                      </div>

                      <h4 className="font-semibold text-lg mt-5 mb-3">
                        Selected: {selectedPackage.selected}
                      </h4>
                      <p>Price: {selectedPackage.price}</p>

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
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HealthPackageOnly;
