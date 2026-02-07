import { MapPin, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBurger from "@/assets/hero-burger.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10 relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Get Your Favorite Food{" "}
              <span className="text-accent">Delivered Fast!</span>
            </h2>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-foreground/90">
                <Star className="w-5 h-5 fill-star text-star" />
                <span className="font-medium">4.5+ Star Restaurants</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/90">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Avg 30 Min Delivery</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-card rounded-2xl p-2 shadow-xl max-w-lg">
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2 px-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <Input
                    type="text"
                    placeholder="Enter area, street or restaurant"
                    className="border-0 bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button size="lg" className="px-8 font-semibold">
                  Order Now
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={heroBurger}
              alt="Delicious burger with flying ingredients"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
