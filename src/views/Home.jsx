import Hero from "../components/Home/Hero";
import CryptoPricesIndices from "../components/Home/CryptoPricesIndices";
import NewsByCategory from "../components/Home/NewsByCategory";

export default function Home() {
  return (
    <div className="min-h-[100vh]">
      <Hero />
      <CryptoPricesIndices />
      <NewsByCategory />
    </div>
  );
}
