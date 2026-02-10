import { Link } from "react-router-dom";
const blogcards = [
  {
    id: "01",
    path: "/blog/blogrelibleblood",
    bg: "bg-sky-100",
    img: "/Images/blood_test.jpg",
    heading: "Reliable Blood Test Centre in Pune with Trusted Services",
    discription:
      "Finding a reliable pathology lab in Pune is crucial for accurate diagnoses diagnosis. Whether you need a basic blood test or a comprehensive health package...",
  },
  {
    id: "02",
    path: "/blog/blogcomprehensivehealth",
    bg: "bg-gray-100",
    img: "/Images/health_checkup_package.jpg",
    heading:
      "Comprehensive Health Checkup Packages & Diagnostic Services in Bhubaneswar",
    discription:
      "Good health begins with timely diagnosis and preventive care. In a fast-paced world, regular checkups and health monitoring play a vital role in...",
  },
  {
    id: "03",
    path: "/blog/blogyourtrusted",
    bg: "bg-green-100",
    img: "/Images/pathalogy_lab_centre.jpg",
    heading: "Your Trusted Pathology Lab and Diagnostic Centre in Goa",
    discription:
      "In today’s fast-paced lifestyle, maintaining good health requires more than just reactive treatment. It calls for proactive health monitoring and early diagnosis. That’s...",
  },
];

function Blogs() {
  return (
    <>
      <section>
        <div className="relative w-full h-full">
          <img
            src="\Images\blog_banner.jpg"
            alt=""
            className="lg:w-full lg:h-full object-cover "
          />

          <div className="absolute bottom-10 left-30   ">
            <h2 className="lg:text-white text-blue-800 lg:text-5xl text-xl font-semibold">
              Our Blogs
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-2 lg:mx-30 grid grid-cols-1 mt-5 lg:mt-20 lg:grid-cols-3 gap-10 ">
          {blogcards.map((item, id) => (
            <Link key={item.id} to={item.path} className="block">
              <div
                key={id}
                className={`${item.bg} cursor-pointer  h-110 rounded-2xl hover:-translate-y-2 duration-500 hover:shadow-2xl`}
              >
                <img
                  src={item.img}
                  alt=""
                  className="rounded-2xl rounded-bl-none rounded-br-none"
                />

                <div className="p-5">
                  <h1 className="text:lg lg:text-2xl mt-2 mb-5 font-semibold">
                    {item.heading}
                  </h1>

                  <p className="mb-2 lg:text-md text-sm text-gray-800 ">
                    {item.discription}{" "}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blogs;
