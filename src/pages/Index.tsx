import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import PopularSection from "@/components/PopularSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <PopularSection />
      </main>
    </div>
  );
};

export default Index;
