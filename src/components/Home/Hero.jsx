import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";


function Hero() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
        {/* Left Column */}
        <HeroLeft />

        {/* Center Column */}
        <HeroCenter />

        {/* Right Column */}
        <HeroRight />
      </div>
    </section>
  );
}

export default Hero;
