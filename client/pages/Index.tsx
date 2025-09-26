import IntroOverlay from "@/components/home/IntroOverlay";
import Hero from "@/components/home/Hero";
import TopCharts from "@/components/home/TopCharts";
import Steps from "@/components/home/Steps";
import FeaturedArtists from "@/components/home/FeaturedArtists";
import Benefits from "@/components/home/Benefits";

export default function Index() {
  return (
    <div>
      <IntroOverlay />
      <Hero />
      <TopCharts />
      <Benefits />
      <FeaturedArtists />
      <Steps />
    </div>
  );
}
