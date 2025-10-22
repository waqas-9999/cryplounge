import React from "react";
import { useParams, Link } from "react-router-dom";

const allNews = [
  {
    id: 1,
    title: "Aave DAO proposes $50 million annual token buyback program funded by protocol revenue",
    date: "Oct 22, 2025, 9:12AM EDT",
    category: "Governance",
    content: "The Aave DAO has proposed a comprehensive $50 million annual token buyback program that will be funded entirely by protocol revenue.",
    image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=500/wp/uploads/2024/08/20240819_Aave_News_2-1200x675.jpg"
  },
  {
    id: 2,
    title: "Sen. Warren slams stablecoin law and urges Treasury to address conflict of interest concerns",
    date: "Oct 21, 2025, 4:57PM EDT",
    category: "Policy",
    content: "Senator Elizabeth Warren has raised serious concerns about the proposed stablecoin legislation, calling for the Treasury Department to address potential conflicts of interest.",
    image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=300/wp/uploads/2021/09/20210927_Elizabeth_Warren_Generic-1200x675.jpg"
  },
  {
    id: 3,
    title: "Bitcoin Breaks $70,000 Mark",
    date: "2 hours ago",
    category: "Policy",
    content: "Bitcoin crosses $70,000 as institutional investors increase ETF inflows. Experts expect sustained momentum through Q4.",
    image: "https://images.unsplash.com/photo-1620228457732-4b8c7a68e8e0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Ethereum Gears Up for Major Upgrade",
    date: "6 hours ago",
    category: "Policy",
    content: "Ethereum developers reveal the next network upgrade, promising faster transactions and up to 30% lower gas fees.",
    image: "https://images.unsplash.com/photo-1629403914045-38e7dce4b30c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Asia's Finternet 2025 Summit to highlight compliant digital asset growth in core agenda",
    date: "Oct 22, 2025, 9:01AM EDT",
    category: "Sponsored",
    content: "The upcoming Finternet 2025 Summit in Asia will focus on compliant digital asset growth as a core agenda item.",
    image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50/wp/uploads/2025/10/3f4023cf75a00509407be9343c3a7251-1200x675.jpg"
  },
  {
    id: 6,
    title: "Yellow: A Clearing Network Unifying Fragmented Blockchains",
    date: "Oct 22, 2025",
    category: "Research",
    content: "Yellow represents a groundbreaking clearing network designed to unify fragmented blockchain ecosystems.",
    image: "https://www.tbstat.com/cdn-cgi/image/format=avif,q=50/wp/uploads/2025/10/20251007_Yellow_ResearchThumbnail-1200x675.jpg"
  },
  {
    id: 7,
    title: "Solana Ecosystem Growth Continues",
    date: "1 day ago",
    category: "Research",
    content: "The Solana ecosystem expands with new DeFi and NFT partnerships, solidifying its position among top blockchains.",
    image: "https://images.unsplash.com/photo-1620301857561-04b4b7a0ebf9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    title: "'Look at it with anticipation': Bitwise CIO sees gold's move as a roadmap for Bitcoin's next leg",
    date: "Oct 22, 2025, 7:49AM EDT",
    category: "Company Intelligence",
    content: "Bitwise CIO Matt Hougan suggests that gold's recent performance may offer insights into Bitcoin's next major move.",
    image: "https://images.unsplash.com/photo-1620228457732-4b8c7a68e8e0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 9,
    title: "NHL reaches multi-year licensing agreement with prediction markets Kalshi and Polymarket: WSJ",
    date: "Oct 22, 2025, 7:28AM EDT",
    category: "Deals",
    content: "The National Hockey League (NHL) has entered into a landmark partnership with Kalshi and Polymarket.",
    image: "https://images.unsplash.com/photo-1629403914045-38e7dce4b30c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 10,
    title: "Prime broker FalconX to buy 21Shares amid crypto M&A spree: report",
    date: "Oct 22, 2025, 6:20AM EDT",
    category: "Companies",
    content: "FalconX has announced its intent to acquire 21Shares in one of the biggest crypto mergers of the year.",
    image: "https://images.unsplash.com/photo-1620301857561-04b4b7a0ebf9?auto=format&fit=crop&w=1200&q=80"
  }
];

const Category = () => {
  const { category } = useParams();
  
  // Filter articles by category
  const categoryArticles = allNews.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );

  const getCategoryDisplayName = (category) => {
    const categoryMap = {
      'governance': 'Governance',
      'policy': 'Policy',
      'sponsored': 'Sponsored',
      'research': 'Research',
      'company-intelligence': 'Company Intelligence',
      'deals': 'Deals',
      'companies': 'Companies'
    };
    return categoryMap[category.toLowerCase()] || category;
  };

  // Get all unique categories
  const allCategories = [...new Set(allNews.map(article => article.category))];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-10 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Category Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="text-[#f0ac10] hover:underline text-sm font-semibold mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-[#f0ac10] mb-2">
            {getCategoryDisplayName(category)} Articles
          </h1>
          <p className="text-gray-400">
            {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">Browse by Category:</h2>
          <div className="flex flex-wrap gap-3">
            {allCategories.map((cat) => {
              const categorySlug = cat.toLowerCase().replace(/\s+/g, '-');
              const isActive = categorySlug === category.toLowerCase();
              
              return (
                <Link
                  key={cat}
                  to={`/category/${categorySlug}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#f0ac10] text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-[#f0ac10] hover:text-black'
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-900 border border-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:border-[#f0ac10] transition-all duration-300"
              >
                {/* Image */}
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#f0ac10] text-black rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/news/${article.id}/${article.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`}
                    className="block"
                  >
                    <h2 className="text-xl font-semibold text-white mb-3 hover:text-[#f0ac10] transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-400 text-sm mb-3">{article.date}</p>
                  <p className="text-gray-300 leading-relaxed line-clamp-3">
                    {article.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-400 mb-4">
              No articles found in this category
            </h2>
            <p className="text-gray-500 mb-6">
              There are currently no articles in the "{getCategoryDisplayName(category)}" category.
            </p>
            <Link 
              to="/" 
              className="inline-block px-6 py-3 bg-[#f0ac10] text-black font-semibold rounded-lg hover:bg-[#d4940a] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
