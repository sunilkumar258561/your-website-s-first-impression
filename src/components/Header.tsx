import { useState } from "react";
import { MapPin, Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground cursor-pointer">
            foo<span className="text-primary">dzzy</span>
          </h1>
        </motion.div>

        {/* Location Selector */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-background hover:border-primary/30 cursor-pointer transition-colors duration-300"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Mumbai, India</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>

        {/* Desktop Search Bar */}
        <div className="flex-1 max-w-md hidden lg:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for restaurants, dishes..."
              className="pl-11 pr-4 py-2.5 w-full bg-secondary/50 border border-border rounded-xl focus-visible:ring-primary focus-visible:border-primary/30 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-xl"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Cart */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button variant="ghost" className="gap-2 relative rounded-xl">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </motion.div>

          {/* Login */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button className="gap-2 rounded-xl bg-primary hover:bg-deep-orange transition-colors duration-300">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for restaurants, dishes..."
                  className="pl-11 pr-4 py-2.5 w-full bg-secondary/50 border border-border rounded-xl focus-visible:ring-primary"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border overflow-hidden bg-card"
          >
            <div className="container mx-auto px-4 py-5 space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-background cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Mumbai, India</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
              </motion.div>

              {["Home", "Offers", "Help", "Sign In"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (index + 2) }}
                  className="px-4 py-3 text-foreground font-medium hover:text-primary cursor-pointer transition-colors duration-300 rounded-xl hover:bg-secondary/50"
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
