import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { BestSellersSection } from "@/components/BestSellersSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { NavLink as ShopFavourites } from "@/components/NavLink";
import { OurStorySection } from "@/components/OurStorySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { ConsultationSection } from "@/components/ConsultationSection";
import { CatalogueSection } from "@/components/CatalogueSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Shree Ji Hardwares | Best Hardware Shop in Alwar, Rajasthan",
    description: "Alwar's top-rated hardware store since 2019. Shop premium cabinet handles, door handles, knobs, hinges, hooks, kitchen accessories & more. Call +91 820 981 5805 or visit us in Alwar, Rajasthan.",
    canonical: "https://shreejihardwares.com/",
  });
  return (
    <div className="min-h-screen bg-background">
      {/* Scrolling announcement ticker */}
      <AnnouncementBar />

      {/* Dark teal navbar */}
      <Navbar />

      <main>
        {/* 1. Full-width hero banner */}
        <HeroSection />

        {/* 2. Handles | Knobs | Hooks – 3-col collections grid */}
        <CategoriesSection />


        {/* 3. Horizontal scrolling carousel  */}
        <ShowcaseSection />

        {/* 4. Featured Collection – product grid on dark bg */}
        <BestSellersSection />

        {/* 5. Top Sellers – carousel with arrows */}
        <GuaranteeSection />

        {/* 6. Shop Our Favourites – split layout */}
        <ShopFavourites />

        {/* 7. Inspiration / Mood boards */}
        <OurStorySection />


        {/* 11. Full Catalogue Section */}
        <CatalogueSection />

        {/* 8. Google Testimonials – rotating reviews */}
        <TestimonialsSection />

        {/* 9. Notable Clients – scrolling logo bar */}
        <InstagramSection />

        {/* 10. Stats + Google Maps Location */}
        <LocationSection />



        {/* 12. Book Consultation + Catalogue CTAs */}
        <ConsultationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
