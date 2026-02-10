// I import this component in every Cities page
function WhyChoose() {
  const Card = [
    {
      id: "01",
      logo: "/Images/Logo_Image/affordable.png",
      text: "Affordable pricing for all services",
      bg: "bg-sky-100",
    },
    {
      id: "02",
      logo: "/Images/Logo_Image/online-booking.png",
      text: "Hassle-free online appointment booking",
      bg: "bg-gray-100",
    },
    {
      id: "03",
      logo: "/Images/Logo_Image/integrity.png",
      text: "Cutting-edge technology for accurate results",
      bg: "bg-orange-100",
    },
    {
      id: "04",
      logo: "/Images/Logo_Image/certified.png",
      text: "Experienced and certified healthcare professionals",
      bg: "bg-purple-100",
    },
  ];
  return (
    <>
      <section>
        <div className="gap-5 lg:gap-10 grid grid-cols-2 lg:grid-cols-4">
          {Card.map((item, id) => (
            <div key={id} className={`rounded-2xl p-5  ${item.bg} `}>
              <div className="mb-5 mt-2 ">
                {" "}
                <img
                  src={item.logo}
                  className="rounded-full border-1 p-0.5 h-12"
                  alt=""
                />
              </div>
              
              <h1 className="font-bold text-gray-700 text-xs lg:text-lg">
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WhyChoose;
