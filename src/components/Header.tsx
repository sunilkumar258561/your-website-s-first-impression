import { useState } from "react";
import { MapPin, Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/90 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <motion.div className="flex-shrink-0" whileHover={{ scale: 1.03 }}>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-primary cursor-pointer tracking-tight">
            foodzzy
          </h1>
        </motion.div>

        {/* Location Selector */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary cursor-pointer transition-colors hover:bg-secondary/80"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Mumbai, India</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>

        {/* Desktop Search */}
        <div className="flex-1 max-w-md hidden lg:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for restaurants, dishes..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-secondary border-0 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" className="gap-2 relative text-foreground">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">Cart</span>
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="gap-2 rounded-xl font-semibold">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </motion.div>

          <motion.div whileTap={{ scale: 0.9 }} className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden bg-card"
          >
            <div className="container mx-auto px-6 py-5 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for restaurants..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary cursor-pointer">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Mumbai, India</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
              </div>

              {["Home", "Offers", "Help"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * (i + 1) }}
                  className="px-4 py-2.5 text-foreground font-medium hover:text-primary cursor-pointer transition-colors rounded-lg"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
