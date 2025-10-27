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
      <h2 className="section-header text-gray-200">
        LATEST CRYPTO NEWS
      </h2>

      {news.map((item) => (
        <div key={item.id} className="border-b border-gray-800 pb-4">
          <Link to={`/news/${item.id}/${slugify(item.title)}`}>
            <h3 className="news-headline-md news-hover">
              {item.title}
            </h3>
          </Link>
          <p className="news-date-sm text-gray-500 mt-2">
            {item.date} •{" "}
            <Link to={`/category/${item.category.toLowerCase().replace(/\s+/g, '-')}`} className="news-category news-link">
              {item.category}
            </Link>
          </p>
        </div>
      ))}

      <Link
        to="/community"
        className="news-link inline-block mt-4 text-sm font-semibold hover:underline"
      >
        SEE MORE LATEST CRYPTO NEWS →
      </Link>
    </div>
  );
}

export default HeroLeft;
