import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";

const NewsByCategory = () => {
  // Sample news data organized by categories (matching hero.jsx categories)
  const categoryNews = {
    "Company Intelligence": [
      {
        id: 1,
        title: "Bitwise CIO sees gold's move as a roadmap for Bitcoin's next leg",
        date: "Oct 22, 2025, 7:49AM EDT",
        image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=500/wp/uploads/2024/08/20240819_Aave_News_2-1200x675.jpg",
        excerpt: "Major corporations continue to add Bitcoin to their treasury reserves..."
      },
      {
        id: 2,
        title: "MicroStrategy adds another $1B in Bitcoin to corporate treasury",
        date: "Oct 22, 2025, 7:15AM EDT",
        image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=300/wp/uploads/2021/09/20210927_Elizabeth_Warren_Generic-1200x675.jpg",
        excerpt: "Institutional investors show strong confidence in Bitcoin's long-term value..."
      }
    ],
    "Governance": [
      {
        id: 3,
        title: "Aave DAO proposes $50 million annual token buyback program",
        date: "Oct 22, 2025, 9:12AM EDT",
        image: "https://www.tbstat.com/cdn-cgi/image/format=avif,q=50/wp/uploads/2025/10/20251007_Yellow_ResearchThumbnail-1200x675.jpg",
        excerpt: "Community governance drives protocol revenue distribution..."
      },
      {
        id: 4,
        title: "Uniswap governance votes on new fee structure proposal",
        date: "Oct 21, 2025, 5:20PM EDT",
        image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=300/wp/uploads/2021/09/20210927_Elizabeth_Warren_Generic-1200x675.jpg",
        excerpt: "DeFi protocol governance continues to evolve with community input..."
      }
    ],
    "Research": [
      {
        id: 5,
        title: "Yellow: A Clearing Network Unifying Fragmented Blockchains",
        date: "Oct 22, 2025, 9:01AM EDT",
        image: "https://www.tbstat.com/cdn-cgi/image/format=avif,q=50/wp/uploads/2025/10/20251007_Yellow_ResearchThumbnail-1200x675.jpg",
        excerpt: "New research explores cross-chain interoperability solutions..."
      },
      {
        id: 6,
        title: "Blockchain scalability research shows promising Layer 2 results",
        date: "Oct 21, 2025, 3:30PM EDT",
        image: "https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=500/wp/uploads/2024/08/20240819_Aave_News_2-1200x675.jpg",
        excerpt: "Academic research demonstrates improved transaction throughput..."
      }
    ]
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="page-title text-white mb-4">NEWS BY CATEGORY</h2>
          <p className="news-body-lg text-gray-400">Stay updated with the latest crypto news across different categories</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Intelligence Category */}
          <div className="space-y-6 border-r border-gray-800 pr-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="section-header text-gray-200">
                COMPANY INTELLIGENCE
              </h3>
            </div>

            {/* Featured Company Intelligence News */}
            <div className="mb-6">
              <img
                src={categoryNews["Company Intelligence"][0].image}
                alt={categoryNews["Company Intelligence"][0].title}
                className="rounded-lg w-full object-cover h-48"
              />
              <Link to={`/news/${categoryNews["Company Intelligence"][0].id}/${slugify(categoryNews["Company Intelligence"][0].title)}`}>
                <h4 className="news-headline-md mt-3 news-hover">
                  {categoryNews["Company Intelligence"][0].title}
                </h4>
              </Link>
              <p className="news-date-sm text-gray-500 mt-2">
                {categoryNews["Company Intelligence"][0].date}
              </p>
            </div>

            {/* Additional Company Intelligence News */}
            {categoryNews["Company Intelligence"].slice(1).map((item) => (
              <div key={item.id} className="border-b border-gray-800 pb-4">
                <Link to={`/news/${item.id}/${slugify(item.title)}`}>
                  <h5 className="card-title news-hover">
                    {item.title}
                  </h5>
                </Link>
                <p className="news-date-sm text-gray-500 mt-1">
                  {item.date}
                </p>
              </div>
            ))}
          </div>

          {/* Governance Category */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="section-header text-gray-200">
                GOVERNANCE
              </h3>
            </div>

            {/* Featured Governance News */}
            <div className="mb-6">
              <img
                src={categoryNews.Governance[0].image}
                alt={categoryNews.Governance[0].title}
                className="rounded-lg w-full object-cover h-48"
              />
              <Link to={`/news/${categoryNews.Governance[0].id}/${slugify(categoryNews.Governance[0].title)}`}>
                <h4 className="news-headline-md mt-3 news-hover">
                  {categoryNews.Governance[0].title}
                </h4>
              </Link>
              <p className="news-date-sm text-gray-500 mt-2">
                {categoryNews.Governance[0].date}
              </p>
            </div>

            {/* Additional Governance News */}
            {categoryNews.Governance.slice(1).map((item) => (
              <div key={item.id} className="border-b border-gray-800 pb-4">
                <Link to={`/news/${item.id}/${slugify(item.title)}`}>
                  <h5 className="card-title news-hover">
                    {item.title}
                  </h5>
                </Link>
                <p className="news-date-sm text-gray-500 mt-1">
                  {item.date}
                </p>
              </div>
            ))}
          </div>

          {/* Research Category */}
          <div className="space-y-6 border-l border-gray-800 pl-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="section-header text-gray-200">
                RESEARCH
              </h3>
            </div>

            {/* Featured Research News */}
            <div className="mb-6">
              <img
                src={categoryNews.Research[0].image}
                alt={categoryNews.Research[0].title}
                className="rounded-lg w-full object-cover h-48"
              />
              <Link to={`/news/${categoryNews.Research[0].id}/${slugify(categoryNews.Research[0].title)}`}>
                <h4 className="news-headline-md mt-3 news-hover">
                  {categoryNews.Research[0].title}
                </h4>
              </Link>
              <p className="news-date-sm text-gray-500 mt-2">
                {categoryNews.Research[0].date}
              </p>
            </div>

            {/* Additional Research News */}
            {categoryNews.Research.slice(1).map((item) => (
              <div key={item.id} className="border-b border-gray-800 pb-4">
                <Link to={`/news/${item.id}/${slugify(item.title)}`}>
                  <h5 className="card-title news-hover">
                    {item.title}
                  </h5>
                </Link>
                <p className="news-date-sm text-gray-500 mt-1">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* View All Categories Link */}
        <div className="text-end mt-6">
          <Link
            to="/community"
            className="news-link inline-block text-base font-semibold hover:underline"
          >
            EXPLORE ALL NEWS CATEGORIES →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsByCategory;
