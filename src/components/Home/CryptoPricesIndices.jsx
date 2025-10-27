import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import TradingViewWidget from "./MiniChart";

const CryptoPricesIndices = () => {
  // Sample crypto data
  const cryptoPrices = [
    { name: "Spectral", price: "$0.32", change: "+76.71%", isPositive: true, icon: "💎" },
    { name: "Vega Protocol", price: "$0.0023", change: "+55.72%", isPositive: true, icon: "U" },
    { name: "DIA", price: "$0.68", change: "+52.56%", isPositive: true, icon: "D" },
    { name: "Jeo Boden", price: "$0.0026", change: "+43.79%", isPositive: true, icon: "J" },
    { name: "Omni Network", price: "$2.73", change: "+42.09%", isPositive: true, icon: "O" },
    { name: "Myro", price: "$0.020", change: "+36%", isPositive: true, icon: "M" },
    { name: "AVINOC", price: "$0.0038", change: "-42.86%", isPositive: false, icon: "A" },
    { name: "Slerf", price: "$0.014", change: "-41.45%", isPositive: false, icon: "S" },
    { name: "Saros", price: "$0.090", change: "-23.97%", isPositive: false, icon: "S" },
    { name: "inSure DeFi", price: "$0.00083", change: "-23.03%", isPositive: false, icon: "I" },
    { name: "ChainOpera AI", price: "$5.33", change: "-18.14%", isPositive: false, icon: "C" },
    { name: "Bficoin", price: "$1.10", change: "-14.18%", isPositive: false, icon: "B" },
  ];

  const topAssets = [
    { name: "Hyperliquid", ticker: "HYPE", weight: "25.9%", icon: "H" },
    { name: "Chainlink", ticker: "LINK", weight: "24.6%", icon: "🔗" },
    { name: "Uniswap", ticker: "UNI", weight: "8.2%", icon: "🦄" },
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* PRICES Section */}
        <div className="mb-16">
          <h2 className="page-title text-white text-center mb-8">PRICES</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {cryptoPrices.map((crypto, index) => (
              <div
                key={index}
                className="border border-[#2f2f2f] rounded-lg p-4 transition-colors"
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {crypto.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-white text-sm font-medium mb-1">{crypto.name}</h3>
                  <p className="text-white text-lg font-bold mb-1">{crypto.price}</p>
                  <div className={`flex items-center justify-center ${
                    crypto.isPositive ? "text-green-500" : "text-red-500"
                  }`}>
                    {crypto.isPositive ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="text-sm font-medium">{crypto.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-right">
            <a
              href="#"
              className="news-link flex items-center justify-end gap-2"
            >
              SEE MORE PRICES
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CRYPTO INDICES Section */}
        <h2 className="page-title text-white text-start pb-6">CRYPTO INDICES</h2>
        <div className="bg-[#1f1f1f] rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* GMDEFI Index Panel */}
            <div className="bg-[#1f1f1f] rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  GMDEFI
                </span>
                <span className="text-gray-300 text-sm">Top DeFi tokens</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">76.44</div>
              <div className="text-red-500 text-lg font-medium mb-6">
                -1.25 (-1.61%)
              </div>
              {/* TradingView Chart */}
              <div className="h-66 overflow-hidden mb-4">
                <TradingViewWidget/>
              </div>
              <div className="flex gap-1 justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Top Assets Panel */}
            <div className="p-6">
              <h3 className="text-white text-lg font-bold mb-6">TOP ASSETS BY WEIGHT</h3>
              <div className="space-y-4">
                {topAssets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {asset.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium">{asset.name}</div>
                        <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
                          {asset.ticker}
                        </span>
                      </div>
                    </div>
                    <div className="text-white font-bold">{asset.weight}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advertisement Panel */}
            <div className="p-6 relative border-l border-[#2f2f2f] overflow-hidden">
              <div className="absolute inset-0"></div>
              <div className="relative z-10">
                <div className="text-white font-bold text-lg mb-2">MEXC</div>
                <div className="text-white text-2xl font-bold mb-4">
                  First Trade with<br />
                  <span className="text-blue-300">Loss Coverage</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Sign Up Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right py-4">
            <a
              href="#"
              className="news-link flex items-center justify-end gap-2"
            >
              SEE CRYPTO INDICES
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
      </div>
    </section>
  );
};

export default CryptoPricesIndices;
