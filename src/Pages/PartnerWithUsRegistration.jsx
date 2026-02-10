function PartnerWithUsRegistration() {
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
              Partner With Us
            </h2>
          </div>
        </div>
      </section>

      <section>
        <form action="">
          <div className="mx-3 lg:mx-75 mt-10 lg:mt-20  inset-shadow-xs shadow-lg rounded-2xl p-3 lg:p-10">
            <h1 className="text-center text-xl lg:text-2xl font-semibold">
              Submit <span className="text-sky-500">Your Form</span> Now
            </h1>

            <div className="grid-cols-1 lg:grid-cols-2 grid gap-3 lg:gap-5 mt-5 lg:mt-8">
              <input
                type="text"
                placeholder="Name"
                className="border-1  border-gray-300 py-2 px-2 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border-1 border-gray-300 py-2 px-2 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-1 border-gray-300 py-2 px-2 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="City*"
                className="border-1 border-gray-300 py-2 px-2 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none"
              />

              <select className="border-1 border-gray-300 py-2 px-2  text-gray-500 rounded focus:ring-sky-500/50 focus:ring-3 duration-300 focus:outline-none">
                <option value="">Interested in</option>
                <option>Franchisee Collection Center</option>
                <option>RWA Camps</option>
                <option>Annual Health Checks</option>
                <option>RWA Camps</option>
                <option>Pre Employment Health Checks</option>
              </select>
            </div>

            <div className="grid mt-5  lg:mt-8 mx-auto place-items-center  ">
              <button className="bg-sky-700 hover:bg-sky-800  cursor-pointer text-white h-10 w-25  rounded-full ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default PartnerWithUsRegistration;
