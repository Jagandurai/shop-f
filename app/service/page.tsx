import Hero from "@/src/components/Service/Hero";
import Customized from "@/src/components/Service/Customized";
import Switching from "@/src/components/Service/Switching";
import Content from "@/src/components/Service/ContentSection";
import ExpandingGallery from "@/src/components/Service/ExpandingGallery";
import Booknow from "@/src/components/Service/booknow";

export default function ServicePage() {
  return (
    <main>
      <Hero />
      <Customized />
      <Switching />
      <ExpandingGallery /> 
      <Booknow />
      <Content />
    </main>
  );
}