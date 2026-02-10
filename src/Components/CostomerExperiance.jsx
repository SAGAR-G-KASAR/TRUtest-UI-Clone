function CostomerExperiance() {
  return (
    <>
      <div className="mt-5 lg:mt-15">
        <h1 className="lg:text-3xl text-xl font-semibold  mb-5 lg:mb-5">
          Customer Experience{" "}
          <span className="text-sky-500">Like Never Before</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:p-10 gap-5 lg:gap-10 w-full ">
          {/* card 1  */}
          <div className="bg-sky-100 p-5 relative rounded-xl">
            <div className="flex">
              <img
                src="\Images\Logo_Image\quality.png"
                alt=""
                className="bg-white p-2 rounded-full "
              />
              <h4 className="font-bold mx-3 my-auto">Quality</h4>
            </div>

            <div>
              <ul className="list-disc list-outside p-3 text-xs lg:text-sm space-y-0.5  mt-5">
                <li>Precise Sample Accessioning</li>
                <li>Following NABL Standards</li>
                <li>Comprehensive Reporting</li>
                <li>
                  The prompt and accurate timely reporting by licensed/qualified
                  medical professionals/doctors
                </li>
                <li>
                  Ensure the utmost level of patient safety and timely
                  communications
                </li>
              </ul>
            </div>
          </div>

          {/* card 2  */}
          <div className="bg-sky-100 p-5 rounded-xl">
            <div className="flex">
              <img
                src="\Images\Logo_Image\infrastr.png"
                alt=""
                className=" bg-white p-2 rounded-full "
              />
              <h4 className="font-bold mx-3 my-auto">
                Infrastructure & Technology
              </h4>
            </div>

            <div>
              <ul className="list-disc list-outside p-3 text-xs lg:text-sm space-y-0.5  mt-5">
                <li>
                  Technology strength - Backed by Siemens, GE, Phillips, Beckman
                  Coulter (Laboratory Information Management System) & PACs
                  (Picture archiving and communication system)
                </li>
                <li>Presence in 100+ Locations</li>
                <li>Highly experienced and professionally managed team</li>
                <li>Latest technology and data integrity</li>
              </ul>
            </div>
          </div>

          {/* card 3  */}
          <div className="bg-sky-100 p-5 rounded-xl">
            <div className="flex">
              <img
                src="\Images\Logo_Image\sample_coll.png"
                alt=""
                className="bg-white p-2 rounded-full "
              />
              <h4 className="font-bold mx-3 my-auto">
                Sample Collection, Logistics & Reporting
              </h4>
            </div>

            <div>
              <ul className="list-disc list-outside p-3 text-xs lg:text-sm space-y-0.5 mt-5">
                <li>
                  Container and preservatives - Checks for preservatives used
                  and quality of sample container received
                </li>
                <li>
                  Transportation temperature - Sample transportation containers
                  are insulated and contain coolants to maintain a temperature
                  of 2-8 °C
                </li>
                <li>
                  Patient Information - Every Sample tube had a unique ID that
                  captures Patient details effectively, mitigating the scope for
                  human error
                </li>
                <li>
                  Sample Quantity - Quantity is measured by the accessioning
                  team to clear sample for processing
                </li>
                <li>
                  Integrity Screening - Detailed assessment of all parameters to
                  check for haemolysis, lipemia, and clots.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CostomerExperiance;
