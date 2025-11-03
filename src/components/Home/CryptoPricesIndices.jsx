import React from "react";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";

const CryptoPricesIndices = () => {
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

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="page-title text-white text-start mb-8">PRICES</h2>

        {/* 🔹 Swiper with 2 visible rows */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          grid={{
            rows: 2,
            fill: "row",
          }}
          modules={[Grid]}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
          className="mySwiper"
        >
          {cryptoPrices.map((crypto, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-between border border-[#2f2f2f] rounded-lg p-4 bg-[#141414] h-[8rem]">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                    {crypto.icon}
                  </div>
                </div>
                <div className="text-end">
                  <h3 className="text-white text-sm font-medium mb-1">{crypto.name}</h3>
                  <p className="text-white text-lg font-bold mb-1">{crypto.price}</p>
                  <div
                    className={`flex items-center justify-end ${
                      crypto.isPositive ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {crypto.isPositive ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="text-sm font-medium">{crypto.change}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-right mt-6">
          <a
            href="#"
            className="news-link flex items-center justify-end gap-2 text-white"
          >
            SEE MORE PRICES
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CryptoPricesIndices;
