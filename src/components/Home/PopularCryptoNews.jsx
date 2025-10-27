import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";
import { TrendingUp, Eye } from "lucide-react";

const PopularCryptoNews = () => {
  // Sample most viewed news data with view counts
  const popularNews = [
    {
      id: 1,
      title: "Bitcoin ETF Breakthrough: SEC Approves First Spot Bitcoin ETF After 10-Year Wait",
      date: "Oct 22, 2025, 9:30AM EDT",
      category: "Policy",
      image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=500/wp/uploads/2024/08/20240819_Aave_News_2-1200x675.jpg",
      views: 125000,
      isTrending: true
    },
    {
      id: 2,
      title: "Ethereum 2.0 Merge Complete: Proof-of-Stake Transition Successfully Achieved",
      date: "Oct 21, 2025, 3:45PM EDT",
      category: "Company Intelligence",
      image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=300/wp/uploads/2021/09/20210927_Elizabeth_Warren_Generic-1200x675.jpg",
      views: 98000,
      isTrending: true
    },
    {
      id: 3,
      title: "Ripple Legal Victory: Court Rules XRP Not a Security in Landmark Ruling",
      date: "Oct 20, 2025, 1:20PM EDT",
      category: "Governance",
      image: "https://www.tbstat.com/cdn-cgi/image/format=avif,q=50/wp/uploads/2025/10/20251007_Yellow_ResearchThumbnail-1200x675.jpg",
      views: 87500,
      isTrending: false
    },
    {
      id: 4,
      title: "DeFi TVL Reaches $50B Milestone: Uniswap Leads with Record-Breaking Volume",
      date: "Oct 19, 2025, 11:15AM EDT",
      category: "Research",
      image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=500/wp/uploads/2024/08/20240819_Aave_News_2-1200x675.jpg",
      views: 72000,
      isTrending: false
    },
    {
      id: 5,
      title: "NFT Market Resurgence: Blue-Chip Collections Hit New All-Time Highs",
      date: "Oct 18, 2025, 8:00AM EDT",
      category: "Company Intelligence",
      image: "https://www.tbstat.com/cdn-cgi/image/format=avif,q=50/wp/uploads/2025/10/20251007_Yellow_ResearchThumbnail-1200x675.jpg",
      views: 65000,
      isTrending: false
    }
  ];

  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="page-title text-white mb-2">POPULAR CRYPTO NEWS</h2>
            <p className="news-body-lg text-gray-400">Most viewed articles trending right now</p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f0ac10]/10 to-[#ffcc00]/10 rounded-lg border border-[#f0ac10]/20">
            <TrendingUp className="text-[#f0ac10]" size={20} />
            <span className="news-category text-[#f0ac10]">TRENDING</span>
          </div>
        </div>

        {/* Popular News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Popular News */}
          <Link 
            to={`/news/${popularNews[0].id}/${slugify(popularNews[0].title)}`}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#f0ac10]/50 transition-all duration-300"
          >
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <div className="bg-[#f0ac10] px-3 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="text-black" size={14} />
                <span className="news-category text-black">#1</span>
              </div>
              {popularNews[0].isTrending && (
                <div className="bg-red-500 px-3 py-1 rounded-full">
                  <span className="news-date-sm text-white">TRENDING</span>
                </div>
              )}
            </div>
            
            <div className="aspect-video overflow-hidden">
              <img
                src={popularNews[0].image}
                alt={popularNews[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="news-category text-[#f0ac10]">{popularNews[0].category}</span>
                <span className="news-date-sm text-gray-500">•</span>
                <span className="news-date-sm text-gray-400">{popularNews[0].date}</span>
              </div>
              
              <h3 className="news-headline-md text-white mb-4 news-hover">
                {popularNews[0].title}
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="text-gray-400" size={16} />
                  <span className="news-date-sm text-gray-400">{formatViews(popularNews[0].views)} views</span>
                </div>
                <div className="text-[#f0ac10] news-category">Read More →</div>
              </div>
            </div>
          </Link>

          {/* Other Popular News */}
          <div className="space-y-4">
            {popularNews.slice(1).map((news, index) => (
              <Link
                key={news.id}
                to={`/news/${news.id}/${slugify(news.title)}`}
                className="group flex gap-4 p-4 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-[#f0ac10]/30 transition-all duration-300"
              >
                {/* Ranking Badge */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#f0ac10]/10 rounded-lg border border-[#f0ac10]/20 group-hover:bg-[#f0ac10]/20 transition-colors">
                  <span className="section-header text-[#f0ac10]">#{index + 2}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="news-category text-[#f0ac10]">{news.category}</span>
                    <span className="news-date-sm text-gray-500">•</span>
                    <span className="news-date-sm text-gray-400">{news.date}</span>
                  </div>
                  
                  <h4 className="card-title text-white mb-2 news-hover line-clamp-2">
                    {news.title}
                  </h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="text-gray-400" size={14} />
                      <span className="news-date-sm text-gray-400">{formatViews(news.views)} views</span>
                    </div>
                    {news.isTrending && (
                      <div className="flex items-center gap-1">
                        <TrendingUp className="text-red-500" size={12} />
                        <span className="news-date-sm text-red-500">Trending</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/community"
            className="news-link inline-block text-lg font-semibold hover:underline"
          >
            VIEW ALL POPULAR NEWS →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCryptoNews;
