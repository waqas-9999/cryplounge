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
      The Aave DAO has proposed a comprehensive $50 million annual token buyback program 
      that will be funded entirely by protocol revenue. This initiative aims to create 
      value for AAVE token holders while maintaining the protocol's financial sustainability.
      
      The proposal includes detailed mechanisms for revenue allocation, buyback timing, 
      and token distribution strategies. Community feedback has been overwhelmingly positive, 
      with many seeing this as a significant step toward token value appreciation.
    `,
  },
  {
    id: 2,
    title:
      "Sen. Warren slams stablecoin law and urges Treasury to address conflict of interest concerns",
    date: "Oct 21, 2025, 4:57PM EDT",
    category: "Policy",
    content: `
      Senator Elizabeth Warren has raised serious concerns about the proposed stablecoin 
      legislation, calling for the Treasury Department to address potential conflicts of 
      interest in the regulatory framework. Her statements highlight the ongoing tension 
      between innovation and regulation in the crypto space.
      
      The senator's concerns focus on ensuring that regulatory oversight doesn't favor 
      certain market participants while maintaining consumer protection standards.
    `,
  },
  {
    id: 3,
    title:
      "Sen. Warren slams stablecoin law and urges Treasury to address conflict of interest concerns",
    date: "Oct 21, 2025, 4:57PM EDT",
    category: "Policy",
    content: `
      Senator Elizabeth Warren has raised serious concerns about the proposed stablecoin 
      legislation, calling for the Treasury Department to address potential conflicts of 
      interest in the regulatory framework. Her statements highlight the ongoing tension 
      between innovation and regulation in the crypto space.
      
      The senator's concerns focus on ensuring that regulatory oversight doesn't favor 
      certain market participants while maintaining consumer protection standards.
    `,
  },
  {
    id: 4,
    title:
      "Sen. Warren slams stablecoin law and urges Treasury to address conflict of interest concerns",
    date: "Oct 21, 2025, 4:57PM EDT",
    category: "Policy",
    content: `
      Senator Elizabeth Warren has raised serious concerns about the proposed stablecoin 
      legislation, calling for the Treasury Department to address potential conflicts of 
      interest in the regulatory framework. Her statements highlight the ongoing tension 
      between innovation and regulation in the crypto space.
      
      The senator's concerns focus on ensuring that regulatory oversight doesn't favor 
      certain market participants while maintaining consumer protection standards.
    `,
  },
  {
    id: 5,
    title:
      "Asia's Finternet 2025 Summit to highlight compliant digital asset growth in core agenda",
    date: "Oct 22, 2025, 9:01AM EDT",
    category: "Sponsored",
    content: `
      The upcoming Finternet 2025 Summit in Asia will focus on compliant digital asset 
      growth as a core agenda item. This major conference brings together industry leaders, 
      regulators, and innovators to discuss the future of digital finance in the region.
      
      Key topics include regulatory frameworks, institutional adoption, and the development 
      of sustainable digital asset ecosystems that comply with evolving regulatory standards.
    `,
  },
  {
    id: 6,
    title:
      "Yellow: A Clearing Network Unifying Fragmented Blockchains",
    date: "Oct 22, 2025",
    category: "Research",
    content: `
      Yellow represents a groundbreaking clearing network designed to unify fragmented 
      blockchain ecosystems. This innovative solution addresses the interoperability 
      challenges that have long plagued the crypto space, enabling seamless cross-chain 
      transactions and data sharing.
      
      The research demonstrates how Yellow's architecture can reduce transaction costs, 
      improve efficiency, and create a more connected blockchain ecosystem that benefits 
      users and developers alike.
    `,
  },
  {
    id: 7,
    title:
      "Yellow: A Clearing Network Unifying Fragmented Blockchains",
    date: "Oct 22, 2025",
    category: "Research",
    content: `
      Yellow represents a groundbreaking clearing network designed to unify fragmented 
      blockchain ecosystems. This innovative solution addresses the interoperability 
      challenges that have long plagued the crypto space, enabling seamless cross-chain 
      transactions and data sharing.
      
      The research demonstrates how Yellow's architecture can reduce transaction costs, 
      improve efficiency, and create a more connected blockchain ecosystem that benefits 
      users and developers alike.
    `,
  },
];

function NewsDetail() {
  const { id } = useParams();
  const newsItem = allNews.find((n) => n.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="text-center text-gray-400">
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

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen px-6">
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
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
