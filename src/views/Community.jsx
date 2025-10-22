import React, { useState } from "react";
import {
  FiHome,
  FiGrid,
  FiUser,
  FiFileText,
  FiBookOpen,
  FiChevronUp,
} from "react-icons/fi";
import Feeds from "./Feeds";
import Topics from "./Topics";

// Dummy components for each section
const News = () => <div className="p-8 text-xl font-semibold">📰 News Content</div>;
const SponsoredArticles = () => (
  <div className="p-8 text-xl font-semibold">💎 Sponsored Articles Content</div>
);
const Blogs = () => <div className="p-8 text-xl font-semibold">✍️ Blogs Content</div>;

const Community = () => {
  const [activeItem, setActiveItem] = useState("Feeds");

  const mainLinks = [
    { name: "Feeds", icon: <FiHome /> },
    { name: "Topics", icon: <FiGrid /> },
    { name: "News", icon: <FiUser /> },
    { name: "Sponsored Articles", icon: <FiFileText /> },
  ];

  const bottomLinks = [{ name: "Blogs", icon: <FiBookOpen /> }];

  // Function to render selected component
  const renderContent = () => {
    switch (activeItem) {
      case "Feeds":
        return <Feeds />;
      case "Topics":
        return <Topics />;
      case "News":
        return <News />;
      case "Sponsored Articles":
        return <SponsoredArticles />;
      case "Blogs":
        return <Blogs />;
      default:
        return <Feeds />;
    }
  };

  return (
    <div className="flex flex-1 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-black font-extrabold text-xl tracking-wide">
            Cryp<span className="text-[#f0ac10]">Lounge</span>
          </h1>
          </div>

          {/* Search */}
          <div className="px-4 mt-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiHome className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search here"
                className="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div className="px-4 mt-6">
            <hr className="border-gray-200" />
          </div>

          {/* Navigation */}
          <div className="flex flex-col flex-1 px-3 mt-6 space-y-4">
            <nav className="space-y-2">
              {mainLinks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    activeItem === item.name
                      ? "bg-indigo-600 text-white"
                      : "text-gray-900 hover:bg-indigo-600 hover:text-white"
                  }`}
                >
                  <span className="flex-shrink-0 w-5 h-5 mr-4">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </nav>

            <hr className="border-gray-200" />

            <nav className="space-y-2">
              {bottomLinks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    activeItem === item.name
                      ? "bg-indigo-600 text-white"
                      : "text-gray-900 hover:bg-indigo-600 hover:text-white"
                  }`}
                >
                  <span className="flex-shrink-0 w-5 h-5 mr-4">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </nav>

            <hr className="border-gray-200" />

            {/* Profile */}
            <div className="pb-4 mt-20">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100"
              >
                <img
                  className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
                  alt="User"
                />
                Jacob Jones
                <FiChevronUp className="ml-auto w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 bg-white p-8">{renderContent()}</div>
    </div>
  );
};

export default Community;
