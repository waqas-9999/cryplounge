import React from "react";
import { Link } from "react-router-dom";

function HeroCenter() {
  return (
    <div className="space-y-6">
      {/* Featured News */}
      <div>
        <img
          src="https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=500/wp/uploads/2024/08/20240819_Aave_News_2-1200x675.jpg"
          alt="Aave DAO"
          className="rounded-lg w-full object-cover h-64"
        />
        <Link to="/news/1/aave-dao-proposes-50-million-annual-token-buyback-program">
          <h2 className="news-headline-lg mt-4 news-hover">
            Aave DAO proposes $50 million annual token buyback program funded by
            protocol revenue
          </h2>
        </Link>
        <p className="news-date-sm text-gray-500 mt-2">
          Oct 22, 2025, 9:12AM EDT •{" "}
          <Link to="/category/governance" className="news-category news-link">
            Governance
          </Link>
        </p>
      </div>

      {/* Secondary Story */}
      <div className="flex gap-4 border-t border-gray-800 pt-4">
        <img
          src="https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=300/wp/uploads/2021/09/20210927_Elizabeth_Warren_Generic-1200x675.jpg"
          alt="Warren"
          className="w-28 h-20 object-cover rounded-md"
        />
        <div>
          <Link to="/news/2/sen-warren-slams-stablecoin-law">
            <h3 className="card-title news-hover">
              Sen. Warren slams stablecoin law and urges Treasury to address
              conflict of interest concerns
            </h3>
          </Link>
          <p className="news-date-sm text-gray-500 mt-1">
            Oct 21, 2025, 4:57PM EDT •{" "}
            <Link to="/category/policy" className="news-category news-link">
              Policy
            </Link>
          </p>
        </div>
      </div><div className="flex gap-4 border-t border-gray-800 pt-4">
        <img
          src="https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=300/wp/uploads/2021/09/20210927_Elizabeth_Warren_Generic-1200x675.jpg"
          alt="Warren"
          className="w-28 h-20 object-cover rounded-md"
        />
        <div>
          <Link to="/news/3/sen-warren-slams-stablecoin-law-2">
            <h3 className="card-title news-hover">
              Sen. Warren slams stablecoin law and urges Treasury to address
              conflict of interest concerns
            </h3>
          </Link>
          <p className="news-date-sm text-gray-500 mt-1">
            Oct 21, 2025, 4:57PM EDT •{" "}
            <Link to="/category/policy" className="news-category news-link">
              Policy
            </Link>
          </p>
        </div>
      </div><div className="flex gap-4 border-t border-gray-800 pt-4">
        <img
          src="https://www.tbstat.com/cdn-cgi/image/format=webp,q=50,w=300/wp/uploads/2021/09/20210927_Elizabeth_Warren_Generic-1200x675.jpg"
          alt="Warren"
          className="w-28 h-20 object-cover rounded-md"
        />
        <div>
          <Link to="/news/4/sen-warren-slams-stablecoin-law-3">
            <h3 className="card-title news-hover">
              Sen. Warren slams stablecoin law and urges Treasury to address
              conflict of interest concerns
            </h3>
          </Link>
          <p className="news-date-sm text-gray-500 mt-1">
            Oct 21, 2025, 4:57PM EDT •{" "}
            <Link to="/category/policy" className="news-category news-link">
              Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroCenter;
