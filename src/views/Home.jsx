import Hero from "../components/Home/Hero";
import CryptoPricesIndices from "../components/Home/CryptoPricesIndices";
import NewsByCategory from "../components/Home/NewsByCategory";
import PopularCryptoNews from "../components/Home/PopularCryptoNews";

export default function Home() {
  return (
    <div className="min-h-[100vh]">
      <Hero />
      <CryptoPricesIndices />
      <PopularCryptoNews />
      <NewsByCategory />
    </div>
  );
}
