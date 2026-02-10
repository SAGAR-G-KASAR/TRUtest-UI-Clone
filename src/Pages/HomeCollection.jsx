import { useState, useEffect } from "react";

function HomeCollection() {
  const [open, setOpen] = useState(false);

  // this useEffect use for when form-card is open site-body can bot be scrolling
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      <section>
        <div className="relative w-full h-full">
          <img
            src="\Images\home_collection_banner.jpg"
            alt=""
            className="lg:w-full lg:h-full object-cover "
          />

          <div className="absolute bottom-10 left-30   ">
            <h2 className="lg:text-white text-blue-800 lg:text-5xl text-xl font-semibold">
              Home Collection
            </h2>
          </div>
        </div>
      </section>

      <section className="mx-5 lg:mx-25">
        <div>
          <h1 className="lg:text-3xl text-xl font-semibold mt-5 lg:mt-20  mb-10">
            Blood Test <span className="text-sky-500">Home Collection</span>
          </h1>
        </div>

        <div className="grid-cols-1 w-auto text-sm  lg:text-l">
          <h4 className="my-5">
            Easily book a home sample collection by simply filling in a few
            details—leave the rest to us.
          </h4>
          <h4 className="my-5">
            Once your booking is confirmed, our trained phlebotomist will visit
            your preferred location to collect the sample, following strict
            hygiene and quality protocols.
          </h4>
          <h4 className="my-5">
            Your test report will be shared with you on WhatsApp, and you can
            also download it by clicking “View Report” on our website.
          </h4>

          <button
            onClick={() => setOpen(true)}
            className="bg-sky-700 p-3 font-semibold cursor-pointer text-l px-5 mx-auto mt-5 lg:mt-15 flex  text-white hover:bg-sky-800 rounded-full"
          >
            Book Now
          </button>

          {/* Open form  */}
          {open && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center  px-5 lg:px-90">
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
                      onClick={() => setOpen(false)}
                      className="cursor-pointer  text-2xl font-bold text-gray-500 hover:text-black"
                    >
                      ×
                    </button>
                  </div>

                  <h2 className="font-semibold text-lg mt-5 mb-3">
                    Selected: Home Collection
                  </h2>

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

        <div>
          <h1 className="lg:text-3xl text-xl font-semibold mt-20  mb-10">
            Its an <span className="text-sky-500">easy-peasy</span> process
          </h1>

          <img
            src="\Images\home_collection_page.png"
            alt="home_collection_page"
            className=" "
          />
        </div>
      </section>
    </>
  );
}

export default HomeCollection;
