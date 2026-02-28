import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/30 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              Premium Food Delivery
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Savor Every{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-primary"
              >
                Bite,
              </motion.span>
              <br />
              <span className="text-foreground/80">Delivered Fresh.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted-foreground text-lg max-w-md leading-relaxed"
            >
              Experience culinary excellence from the finest restaurants, brought to your doorstep with care.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-card rounded-2xl p-2 shadow-lg max-w-lg border border-border gold-glow"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex-1 flex items-center gap-2 px-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <Input
                    type="text"
                    placeholder="Enter your delivery address"
                    className="border-0 bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground text-base"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="w-full sm:w-auto px-8 font-semibold rounded-xl gap-2 bg-primary hover:bg-deep-orange transition-colors duration-300">
                    Order Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "500+", label: "Restaurants" },
                { value: "30min", label: "Avg Delivery" },
                { value: "4.8", label: "App Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Warm glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-accent/20 rounded-full blur-3xl" />
            </div>

            <motion.img
              src={heroBurger}
              alt="Delicious burger with flying ingredients"
              className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl relative z-10"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            
            {/* Floating elements */}
            <motion.div
              className="absolute top-10 left-4 sm:left-10 bg-card rounded-2xl px-4 py-3 shadow-lg border border-border z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-sm font-medium text-foreground">🍟 Fresh & Hot</span>
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-4 sm:right-10 bg-card rounded-2xl px-4 py-3 shadow-lg border border-border z-20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              <span className="text-sm font-medium text-foreground">⭐ Top Rated</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
