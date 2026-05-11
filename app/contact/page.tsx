import Hero from "@/src/components/Contact/Hero";
import ContactForm from "@/src/components/Contact/ContactForm";
import FAQ from "@/src/components/Contact/FAQ";
import Map from "@/src/components/Contact/Map";

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ContactForm />
      <FAQ />
      <Map />
    </main>
  );
}