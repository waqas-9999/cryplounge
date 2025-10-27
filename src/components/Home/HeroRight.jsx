import React from "react";
import { Link } from "react-router-dom";

function HeroRight() {
  return (
    <div className="space-y-6 border-l border-gray-800 pl-6">
      <div>
        <img
          src="https://www.tbstat.com/cdn-cgi/image/format=webp,q=50/wp/uploads/2025/10/3f4023cf75a00509407be9343c3a7251-1200x675.jpg"
          alt="Finternet 2025"
          className="w-full rounded-lg h-40 object-cover"
        />
        <Link to="/news/5/asias-finternet-2025-summit">
          <h3 className="card-title mt-2 news-hover">
            Asia's Finternet 2025 Summit to highlight compliant digital asset
            growth in core agenda
          </h3>
        </Link>
        <p className="news-date-sm text-gray-500 mt-1">
          Oct 22, 2025, 9:01AM EDT •{" "}
          <Link to="/category/sponsored" className="news-category news-link">
            Sponsored
          </Link>
        </p>
      </div>

      <div>
        <h2 className="section-header text-blue-400 mb-3">
          ARTICLES
        </h2>
        <img
          src="https://www.tbstat.com/cdn-cgi/image/format=avif,q=50/wp/uploads/2025/10/20251007_Yellow_ResearchThumbnail-1200x675.jpg"
          alt="Research"
          className="w-full rounded-lg h-40 object-cover"
        />
        <Link to="/news/6/yellow-clearing-network">
          <h3 className="card-title mt-2 news-hover">
            Yellow: A Clearing Network Unifying Fragmented Blockchains
          </h3>
        </Link>
        <p className="news-date-sm text-gray-500 mt-1">
          Oct 22, 2025 • <Link to="/category/research" className="news-category news-link">
            Research
          </Link>
        </p>
      </div>
      <div>
        <img
          src="https://www.tbstat.com/cdn-cgi/image/format=avif,q=50/wp/uploads/2025/10/20251007_Yellow_ResearchThumbnail-1200x675.jpg"
          alt="Research"
          className="w-full rounded-lg h-40 object-cover"
        />
        <Link to="/news/7/yellow-clearing-network-2">
          <h3 className="card-title mt-2 news-hover">
            Yellow: A Clearing Network Unifying Fragmented Blockchains
          </h3>
        </Link>
        <p className="news-date-sm text-gray-500 mt-1">
          Oct 22, 2025 • <Link to="/category/research" className="news-category news-link">
            Research
          </Link>
        </p>
      </div>
    </div>
  );
}

export default HeroRight;
