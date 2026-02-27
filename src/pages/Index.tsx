import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BestSellersSection } from "@/components/BestSellersSection";
import { OurStorySection } from "@/components/OurStorySection";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <GuaranteeSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <BestSellersSection />
        <OurStorySection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
