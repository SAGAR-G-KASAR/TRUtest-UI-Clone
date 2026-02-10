function WhatWeDo() {
  return (
    <div className="select-none">
      {/* WHAT WE DO STARTS */}
      <div>
        <h1 className="lg:text-3xl text-xl font-semibold select-none lg:mt-20 mt-10 mb-10">
          What <span className=" text-sky-500">we do</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="h-auto w-full rounded-2xl bg-sky-50 transition-transform duration-700  hover:shadow-2xl shadow-md hover:-translate-y-2 ease-in-out">
          <div className="p-5 lg:p-10">
            <div className="p-2">
              <img
                src="\Images\sugar-blood-level.png"
                className="h-15 w-15  "
                alt=""
              />
            </div>
            <h2 className="font-bold text-xl mt-5">Routine Blood Test</h2>
            <p className="mt-2">
              A Routine Blood Test screens for common medical conditions and
              helps in overall health assessment by analyzing key parameters
              like blood count, hemoglobin, sugar, cholesterol, liver enzymes,
              creatinine, and thyroid hormones. These are frequently performed
              and have quick turnaround time. It plays an important role in
              early detection and preventive health care.
            </p>
          </div>
        </div>

        <div className="h-auto w-full rounded-2xl bg-indigo-50 transition-transform duration-700  hover:shadow-2xl shadow-md hover:-translate-y-1 ease-in-out">
          <div className="p-5 lg:p-10">
            <div className="p-2">
              <img src="\Images\blood-test.png" className="h-15 w-15 " alt="" />
            </div>
            <h2 className="font-bold text-xl mt-5">Specialized Blood Test</h2>
            <p className="mt-2">
              A Specialized Blood Test helps in diagnosing complex or specific
              health conditions like hormonal imbalance, cancer, allergy,
              genetic, and autoimmune disorders. These are performed as needed
              and involve a complex testing process with specialised equipment
              and expertise. It provides deeper insights for accurate diagnosis
              and personalized treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
