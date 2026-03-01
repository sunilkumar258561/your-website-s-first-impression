import { Search, ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05]" />

      <div className="container mx-auto px-6 py-16 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4" />
                #1 Food Delivery Platform
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-foreground leading-[1.08] tracking-tight"
            >
              Discover the best{" "}
              <span className="relative inline-block">
                <span className="text-primary">food</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full origin-left"
                />
              </span>{" "}
              & drinks near you
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Order from top-rated restaurants with lightning-fast delivery. Fresh meals, crafted with care, at your doorstep.
            </motion.p>

            {/* Premium Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="bg-card rounded-2xl p-2 shadow-lg max-w-lg border border-border"
            >
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Search restaurants, cuisines, dishes..."
                    className="w-full py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="rounded-xl px-6 md:px-8 font-semibold gap-2 shadow-md">
                    Search
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-8 pt-2"
            >
              {[
                { icon: Users, label: "Happy Customers", value: "2M+" },
                { icon: TrendingUp, label: "Restaurant Partners", value: "15K+" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <motion.img
                src={heroBurger}
                alt="Delicious burger with flying ingredients"
                className="w-full max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              />

              {/* Floating badge top-left */}
              <motion.div
                className="absolute top-6 -left-4 bg-card rounded-2xl px-4 py-3 shadow-lg border border-border"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="text-sm font-bold text-foreground">4.8 Rating</p>
                    <p className="text-xs text-muted-foreground">12K+ Reviews</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge bottom-right */}
              <motion.div
                className="absolute bottom-12 -right-4 bg-card rounded-2xl px-4 py-3 shadow-lg border border-border"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-sm font-bold text-foreground">30 min</p>
                    <p className="text-xs text-muted-foreground">Avg Delivery</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
