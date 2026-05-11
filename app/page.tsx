import Hero from "@/src/components/Home/Hero";
import Welcome from "@/src/components/Home/Welcome";
import Experties from "@/src/components/Home/Experties";
import Exclusive from "@/src/components/Home/Exclusively";
import Work from "@/src/components/Home/Work";
import TrailService from "@/src/components/Home/TrailService";
import Portfolio from "@/src/components/Home/Portfolio";
import Feedback from "@/src/components/Home/Feedback";
import FinalCTA from "@/src/components/Home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Experties />
      <Exclusive />
      <Work />
      <TrailService />
      <Portfolio />
      <Feedback />
      <FinalCTA />
    </main>
  );
}