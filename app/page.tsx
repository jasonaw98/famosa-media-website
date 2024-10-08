import CalltoButton from "@/components/CalltoButton";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { HeroParallaxDemo } from "@/components/HeroParallax";
import Navbar from "@/components/Navbar";
import TabsSection from "@/components/TabsSection";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen max-w-full flex flex-col items-center">
      <Navbar />
      <HeroParallaxDemo />
      <TabsSection />
      <CalltoButton/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
