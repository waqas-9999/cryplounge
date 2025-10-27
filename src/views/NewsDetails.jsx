import { useParams, Link } from "react-router-dom";
import React from "react";

const allNews = [
  {
    id: 1,
    title:
      "Aave DAO proposes $50 million annual token buyback program funded by protocol revenue",
    date: "Oct 22, 2025, 9:12AM EDT",
    category: "Governance",
    content: `
      The Aave DAO has proposed a $50 million annual token buyback program,
      fully funded by protocol revenue. The plan aims to strengthen the
      AAVE token ecosystem and reward long-term holders.
      
      The proposal outlines how revenue will be allocated, buyback timing,
      and strategies to sustain the treasury over time. Many community
      members have praised the initiative as a progressive move toward
      decentralization and value alignment.
    `,
    author: {
      name: "Emma Thompson",
      role: "DeFi Analyst",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:emma@cryptonews.com",
    },
  },
  {
    id: 2,
    title:
      "Sen. Warren slams stablecoin law and urges Treasury to address conflict of interest concerns",
    date: "Oct 21, 2025, 4:57PM EDT",
    category: "Policy",
    content: `
      Senator Elizabeth Warren criticized the proposed stablecoin bill,
      calling for the Treasury Department to examine potential conflicts
      of interest among key industry stakeholders.
      
      Warren emphasized consumer protection and transparency, highlighting
      the risks of excessive influence from large crypto players in shaping
      regulation. The debate underscores the challenge of balancing
      innovation and oversight.
    `,
    author: {
      name: "Michael Chen",
      role: "Policy Correspondent",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:michael@cryptonews.com",
    },
  },
  {
    id: 3,
    title:
      "Sen. Warren slams stablecoin law and urges Treasury to address conflict of interest concerns (Part 2)",
    date: "Oct 21, 2025, 5:10PM EDT",
    category: "Policy",
    content: `
      This follow-up explores additional reactions to Senator Warren’s
      critique of the stablecoin framework. Industry analysts argue
      the comments could delay key legislative progress on crypto regulation.
    `,
    author: {
      name: "Michael Chen",
      role: "Policy Correspondent",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:michael@cryptonews.com",
    },
  },
  {
    id: 4,
    title:
      "Sen. Warren slams stablecoin law and urges Treasury to address conflict of interest concerns (Part 3)",
    date: "Oct 21, 2025, 5:20PM EDT",
    category: "Policy",
    content: `
      Further commentary continues to emerge regarding the stablecoin debate.
      Some policymakers back Warren’s stance, while others warn against
      overregulation that could stifle innovation.
    `,
    author: {
      name: "Michael Chen",
      role: "Policy Correspondent",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:michael@cryptonews.com",
    },
  },
  {
    id: 5,
    title:
      "Asia's Finternet 2025 Summit to highlight compliant digital asset growth in core agenda",
    date: "Oct 22, 2025, 9:01AM EDT",
    category: "Sponsored",
    content: `
      The Finternet 2025 Summit in Asia is set to focus on compliant digital
      asset growth. Industry experts, regulators, and fintech leaders will
      discuss frameworks for sustainable innovation and responsible adoption.
    `,
    author: {
      name: "Sophia Allen",
      role: "Asia Correspondent",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:sophia@cryptonews.com",
    },
  },
  {
    id: 6,
    title: "Yellow: A Clearing Network Unifying Fragmented Blockchains",
    date: "Oct 22, 2025",
    category: "Research",
    content: `
      Yellow introduces an innovative clearing network unifying fragmented
      blockchain ecosystems. The platform enables seamless interoperability,
      boosting efficiency and reducing transaction friction across chains.
    `,
    author: {
      name: "David Green",
      role: "Blockchain Researcher",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:david@cryptonews.com",
    },
  },
  {
    id: 7,
    title: "Yellow: A Clearing Network Unifying Fragmented Blockchains (Part 2)",
    date: "Oct 22, 2025",
    category: "Research",
    content: `
      This extended analysis delves deeper into Yellow’s architecture and
      its implications for cross-chain liquidity and decentralized clearing
      infrastructure worldwide.
    `,
    author: {
      name: "David Green",
      role: "Blockchain Researcher",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/",
      email: "mailto:david@cryptonews.com",
    },
  },
];

function NewsDetail() {
  const { id } = useParams();
  const newsItem = allNews.find((n) => n.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="text-center text-gray-400 py-10">
        <h2 className="text-2xl font-semibold">Article Not Found</h2>
        <Link
          to="/"
          className="text-[#f0ac10] hover:underline inline-block mt-4"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  const { author } = newsItem;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="text-[#f0ac10] hover:underline text-sm font-semibold"
        >
          ← Back to Latest News
        </Link>

        <div className="mt-6">
          <p className="text-sm text-gray-400 uppercase">{newsItem.category}</p>
          <h1 className="text-3xl font-bold mt-2">{newsItem.title}</h1>
          <p className="text-xs text-gray-500 mt-2">{newsItem.date}</p>

          <div className="border-t border-gray-800 my-6"></div>

          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {newsItem.content}
          </p>

          {/* Author Info */}
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-20 h-20 rounded-full border-2 border-[#f0ac10] object-cover"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold">{author.name}</h3>
              <p className="text-gray-400 text-sm">{author.role}</p>
              <div className="flex justify-center sm:justify-start gap-4 mt-3">
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#f0ac10] transition"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#f0ac10] transition"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href={author.email}
                  className="text-gray-400 hover:text-[#f0ac10] transition"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
