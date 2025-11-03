import React from "react";

function Cards() {
  const newsData = [
    {
      title: "AI Revolutionizing the Finance Sector",
      date: "Nov 2, 2025",
      description:
        "Banks and fintech companies are rapidly integrating AI models to enhance fraud detection and risk management.",
    },
    {
      title: "Tech Giants Invest in Green Energy",
      date: "Nov 1, 2025",
      description:
        "Major tech firms pledge billions toward renewable energy projects to reduce global carbon emissions.",
    },
    {
      title: "Stock Market Sees Volatility Amid Elections",
      date: "Oct 31, 2025",
      description:
        "Investors brace for uncertainty as global markets react to upcoming elections and policy shifts.",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] flex justify-between gap-2 p-8 mb-16 w-full">
      {newsData.map((news, index) => (
        <div
          key={index}
          className={`${
            index === 0
              ? "flex-[0_0_50%]"
              : "flex-[0_0_24%]"
          } min-h-[24rem] py-5 bg-gradient-to-br from-[#161616] to-[#1f1f1f] rounded-2xl shadow-lg overflow-hidden border border-[#222] hover:border-[#FFD700] hover:shadow-[0_0_20px_#FFD70055] transition-all duration-300 hover:scale-105`}
        >
          <div className="p-5 text-left">
            <h2 className="text-lg font-semibold text-white mb-1">
              {news.title}
            </h2>
            <p className="text-xs text-gray-500 mb-2">{news.date}</p>
            <p className="text-gray-400 text-sm line-clamp-3 leading-snug">
              {news.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
