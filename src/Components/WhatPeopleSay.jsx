import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

function WhatPeopleSay() {
  const cards = [
    {
      name: "Rohish Sawant",
      text: "Excellent experience. The test is done as comfortably as possible including making sure that our 3 year old daughter was made to feel extremely comfortable when she was crying before the blood collection. The staff left with a smile on her face after the blood collection. We also received our results within 12 hours which was well within the promised timeline. Keep up the great work!!!",
    },
    {
      name: "Anushree Mhaskar",
      text: "The staff here is really cooperative. They indeed keep customers their topmost priority. Very flexible with timings and booking dates too. I had booked an appointment for Saturday but due to some reason had to shift to Sunday and the staff cooperated well. I got all my blood test reports in less than 24 hours. Absolutely satisfied with the service.",
    },
    {
      name: "Abhishek",
      text: "Excellent service, professional staff and certified, well-run and maintained lab. Home collection was done by a well-trained phlebotomist with all precautions. Results was matter of a few hours. Very highly recommend.",
    },
    {
      name: "Jayesh Chawda",
      text: "Nice facility, staff were polite and humble. Well maintained and clean as well as hygienic",
    },
    {
      name: "Saurav Mishra",
      text: "Machines are high tech and the prices as also the most affordable in market. People working here are considerate towards me. The CT Scan report is give in a short period of time, so the treatment is not delayed. Overall the environment is hygienic and crowd is controlled in a effective manner. Very happy with the service",
    },
  ];

  const itemsPerPage = 4;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const visibleCards = cards.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full h-auto p-5 sm:p-5 gap-5 lg:p-20">
      {/* HEADER */}
      <div className="grid lg:grid-cols-2 ">
        <div>
          <h1 className="lg:text-3xl text-xl font-semibold">
            What <span className="text-sky-500">people say</span>
          </h1>
          <h2 className="text-gray-500 mt-2">Customers love us!</h2>
        </div>

        {/* GOOGLE RATING */}
        <div className="relative">
          <div className="absolute right-0 p-4 hover:scale-105 mt-2 transition rounded-xl bg-white shadow-xl">
            <div className="flex gap-1 items-center">
              <FcGoogle className="text-4xl" />
              <span className="font-bold text-sm">Rated 4.9/5 on Google</span>
            </div>
            <div className="flex gap-1 text-xl mt-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-300" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Among the highest rated diagnostic companies in India
            </p>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="mt-20 mb-5 grid lg:grid-cols-4 sm:grid-cols-1 gap-5 ">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="h-80 bg-white rounded-xl border border-gray-300 p-5"
          >
            <h1 className="font-bold text-2xl">{card.name}</h1>
            <p className="text-xs lg:text-sm  mt-5">{card.text}</p>
          </div>
        ))}
      </div>

      {/* PAGINATION BUTTONS */}
      <div className="flex gap-6 mt-6 ">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-sky-300 hover:bg-sky-500 rounded-full disabled:opacity-50"
        >
          ←
        </button>

        <span className="font-medium ">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2   bg-sky-300  hover:bg-sky-500 rounded-full disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default WhatPeopleSay;
