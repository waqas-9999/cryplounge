import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";

const news = [
  {
    id: 1,
    title:
      "'Look at it with anticipation': Bitwise CIO sees gold’s move as a roadmap for Bitcoin’s next leg",
    date: "Oct 22, 2025, 7:49AM EDT",
    category: "Company Intelligence",
  },
  {
    id: 2,
    title:
      "NHL reaches multi-year licensing agreement with prediction markets Kalshi and Polymarket: WSJ",
    date: "Oct 22, 2025, 7:28AM EDT",
    category: "Deals",
  },
  {
    id: 3,
    title:
      "Prime broker FalconX to buy 21Shares amid crypto M&A spree: report",
    date: "Oct 22, 2025, 6:20AM EDT",
    category: "Companies",
  },
];

function HeroLeft() {
  return (
    <div className="space-y-6 border-r border-gray-800 pr-6">
      <h2 className="text-xl font-bold tracking-wider text-gray-200">
        LATEST CRYPTO NEWS
      </h2>

      {news.map((item) => (
        <div key={item.id} className="border-b border-gray-800 pb-4">
          <Link to={`/news/${item.id}/${slugify(item.title)}`}>
            <h3 className="text-lg font-semibold hover:text-[#f0ac10] cursor-pointer">
              {item.title}
            </h3>
          </Link>
          <p className="text-xs text-gray-500 mt-2">
            {item.date} •{" "}
            <Link to={`/category/${item.category.toLowerCase().replace(/\s+/g, '-')}`} className="uppercase text-[#f0ac10] hover:text-[#d4940a] transition-colors">
              {item.category}
            </Link>
          </p>
        </div>
      ))}

      <Link
        to="/community"
        className="inline-block mt-4 text-sm font-semibold text-[#f0ac10] hover:underline"
      >
        SEE MORE LATEST CRYPTO NEWS →
      </Link>
    </div>
  );
}

export default HeroLeft;
