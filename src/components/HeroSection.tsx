import { MapPin, Star, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-5 md:space-y-6 z-10 relative order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight"
            >
              Get Your Favorite Food{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-accent inline-flex items-center gap-2"
              >
                Delivered Fast!
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                >
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-star" />
                </motion.span>
              </motion.span>
            </motion.h2>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-foreground/90 bg-card/30 backdrop-blur-sm rounded-full px-3 py-1.5 cursor-default"
              >
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-star text-star" />
                <span className="font-medium text-sm md:text-base">4.5+ Star Restaurants</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-foreground/90 bg-card/30 backdrop-blur-sm rounded-full px-3 py-1.5 cursor-default"
              >
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium text-sm md:text-base">Avg 30 Min Delivery</span>
              </motion.div>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-card rounded-2xl p-2 shadow-xl max-w-lg"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex-1 flex items-center gap-2 px-3 sm:px-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <Input
                    type="text"
                    placeholder="Enter area, street or restaurant"
                    className="border-0 bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 font-semibold animate-pulse-glow">
                    Order Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.img
              src={heroBurger}
              alt="Delicious burger with flying ingredients"
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            
            {/* Floating elements */}
            <motion.div
              className="absolute top-10 left-4 sm:left-10 bg-card rounded-full p-2 shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-2xl">🍟</span>
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-4 sm:right-10 bg-card rounded-full p-2 shadow-lg"
              animate={{
                y: [0, -8, 0],
                rotate: [0, -10, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              <span className="text-2xl">🥤</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-72 md:w-96 h-72 md:h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-20 -left-20 w-64 md:w-80 h-64 md:h-80 bg-white/5 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
