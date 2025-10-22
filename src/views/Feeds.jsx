import React from "react";
import { Link } from "react-router-dom";

const Feeds = () => {
  const feeds = [
    {
      id: 1,
      title: "Bitcoin Breaks $70,000 Mark",
      time: "2 hours ago",
      category: "Policy",
      content:
        "Bitcoin crosses $70,000 as institutional investors increase ETF inflows. Experts expect sustained momentum through Q4.",
      image:
        "https://images.unsplash.com/photo-1620228457732-4b8c7a68e8e0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Ethereum Gears Up for Major Upgrade",
      time: "6 hours ago",
      category: "Research",
      content:
        "Ethereum developers reveal the next network upgrade, promising faster transactions and up to 30% lower gas fees.",
      image:
        "https://images.unsplash.com/photo-1629403914045-38e7dce4b30c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Solana Ecosystem Growth Continues",
      time: "1 day ago",
      category: "Research",
      content:
        "The Solana ecosystem expands with new DeFi and NFT partnerships, solidifying its position among top blockchains.",
      image:
        "https://images.unsplash.com/photo-1620301857561-04b4b7a0ebf9?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen text-white py-10 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold mb-10 text-[#f0ac10] border-b border-gray-700 pb-3">
          Latest Crypto News
        </h1>

        {/* Feed List */}
        <div className="space-y-10">
          {feeds.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 border rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:border-[#f0ac10] transition-all duration-300"
            >
              {/* Image */}
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-72 object-cover"
                />
              )}

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Link to={`/category/${post.category.toLowerCase()}`} className="inline-block px-3 py-1 text-xs font-semibold bg-[#f0ac10] text-black rounded-full hover:bg-[#d4940a] transition-colors">
                    {post.category}
                  </Link>
                  <p className="text-gray-500 text-sm">{post.time}</p>
                </div>
                <Link to={`/news/${post.id}/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`}>
                  <h2 className="text-xl font-semibold text-[#f0ac10] mb-2 hover:text-[#d4940a] transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-black leading-relaxed">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feeds;
