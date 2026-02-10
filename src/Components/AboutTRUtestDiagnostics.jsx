function AboutTRUtestDiagnostics() {
  return (
    <div className="grid sm:grid-cols-2 lg:mt-20 mt-10 gap-10  lg:gap-20">
      <div>
        <div>
          <h1 className="lg:text-3xl text-xl font-semibold  mb-5 lg:mb-10">
            About <span className="text-sky-500">TRUtest Diagnostics</span>
          </h1>
        </div>

        <p className="text-sm">
          True to its name, TRUtest Diagnostics offers cutting-edge technology
          to make quality healthcare more accessible, affordable, and
          transparent for everyone. Our state-of-the-art laboratories across the
          country are equipped with advanced technology & a dedicated team of
          qualified and experienced clinicians & paramedics.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="grid bg-sky-100 border-dotted border-2 border-sky-400 rounded-2xl p-3  gap-2 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none">
            <div>
              <button className=" bg-white rounded-xl p-2">Reports</button>
            </div>
            <h1 className="text-2xl lg:text-4xl  text-blue-900 font-bold">
              in 24hrs
            </h1>
          </div>
          <div className="grid bg-sky-100 border-dotted border-2 border-sky-400 rounded-2xl p-3 gap-2 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl  rounded-br-none">
            <div>
              {" "}
              <button className="bg-white rounded-xl p-2 ">Tests</button>
            </div>
            <h1 className="text-2xl lg:text-4xl text-blue-900 font-bold">
              3500+
            </h1>
          </div>
        </div>

        <div className="grid bg-sky-100 border-dotted border-2 border-sky-400 rounded-2xl p-3  mt-5 gap-2 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none">
          <div>
            {" "}
            <button className="bg-white rounded-xl p-2 ">
              Free Home Collection
            </button>
          </div>
          <h1 className="text-2xl lg:text-4xl text-blue-900 font-bold">
            In 90 minutes*
            <span className="text-xs lg:text-xl">(within a 10km radius)</span>
          </h1>
        </div>
      </div>

      <div className=" bg-gray-100 rounded-2xl flex lg:p-25 p-8">
        <img
          className="rounded-2xl mx-auto"
          src="\Images\about_video_img.jpg"
          alt="about_trudiagnostics_img"
        />
      </div>
    </div>
  );
}

export default AboutTRUtestDiagnostics;
