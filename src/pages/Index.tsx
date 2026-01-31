import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <BookingSection />
      <Footer />
    </main>
  );
};

export default Index;
