import { useState } from "react";

function BookingForm() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-sky-700 p-3 font-semibold  cursor-pointer text-l px-7  mt-5 lg:mt-15 flex  text-white hover:bg-sky-800 rounded-full"
      >
        Book Your Test
      </button>
      {/* Open form  */}
      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center  bg-black/50 px-5 lg:px-90">
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
                    className="border-1 border-gray-300 py-1 px-2   text-gray-500 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
                  >
                    <option value="">Select City</option>
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
    </>
  );
}

export default BookingForm;
