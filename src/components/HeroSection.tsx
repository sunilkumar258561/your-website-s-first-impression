import { Search, ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.png";

const FloatingSparkle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/30"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.3, 1],
    }}
    transition={{ duration: 3 + delay, repeat: Infinity, delay }}
  />
);

const FloatingOrb = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-accent/40 blur-sm"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -15, 0],
      x: [0, 10, 0],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{ duration: 4 + delay, repeat: Infinity, delay }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Warm gradient background: cream → light orange */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(30_80%_94%)] to-[hsl(25_90%_88%)]" />
      
      {/* Subtle pattern overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      {/* Floating decorative elements */}
      <FloatingSparkle delay={0} x="10%" y="20%" size={8} />
      <FloatingSparkle delay={0.5} x="85%" y="15%" size={6} />
      <FloatingSparkle delay={1} x="75%" y="70%" size={10} />
      <FloatingSparkle delay={1.5} x="15%" y="75%" size={7} />
      <FloatingSparkle delay={2} x="50%" y="10%" size={5} />
      <FloatingOrb delay={0} x="5%" y="60%" size={16} />
      <FloatingOrb delay={1} x="90%" y="40%" size={12} />
      <FloatingOrb delay={0.5} x="40%" y="85%" size={14} />

      {/* Curved decorative shape */}
      <div className="absolute -bottom-1 left-0 right-0 h-20 bg-background" style={{
        borderRadius: '100% 100% 0 0'
      }} />

      <div className="container mx-auto px-6 py-16 md:py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm font-bold tracking-wide border border-primary/20">
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
                <span className="text-primary text-[1.1em]">food</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-1.5 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full origin-left"
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
              className="bg-card rounded-2xl p-2 shadow-lg max-w-lg border border-border/80"
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
                  <Button size="lg" className="rounded-xl px-6 md:px-8 font-bold gap-2 shadow-lg hover:shadow-xl transition-shadow text-base">
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
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center border border-primary/10">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image with Radial Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Large radial orange glow behind burger */}
              <div className="absolute inset-0 -m-16 md:-m-24">
                <div className="w-full h-full rounded-full bg-primary/20 blur-[80px]" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                <div className="w-full h-full rounded-full bg-accent/25 blur-[60px]" />
              </div>

              <motion.img
                src={heroBurger}
                alt="Delicious burger with flying ingredients"
                className="w-full max-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl relative z-10"
                style={{ filter: 'drop-shadow(0 20px 40px hsl(25 95% 53% / 0.3))' }}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              />

              {/* Floating badge top-left */}
              <motion.div
                className="absolute top-6 -left-4 bg-card rounded-2xl px-4 py-3 shadow-lg border border-border/80 z-20"
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
                className="absolute bottom-12 -right-4 bg-card rounded-2xl px-4 py-3 shadow-lg border border-border/80 z-20"
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

              {/* Extra floating sparkle near burger */}
              <motion.div
                className="absolute top-1/4 right-0 z-20"
                animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
