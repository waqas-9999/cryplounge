import Hero from "../components/Home/Hero";
import CryptoPricesIndices from "../components/Home/CryptoPricesIndices";
import NewsByCategory from "../components/Home/NewsByCategory";
import PopularCryptoNews from "../components/Home/PopularCryptoNews";
import Cards from "../components/Home/Cards";

export default function Home() {
  return (
    <div className="min-h-[100vh] container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Cards/>
      <Hero />
      <CryptoPricesIndices />
      <PopularCryptoNews />
      <NewsByCategory />
    </div>
  );
}
