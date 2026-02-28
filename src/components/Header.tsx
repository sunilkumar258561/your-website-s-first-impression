import { useState } from "react";
import { MapPin, Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="text-xl sm:text-2xl font-display font-bold text-primary cursor-pointer">
            foodzzy
          </h1>
        </motion.div>

        {/* Location Selector */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-secondary/50 cursor-pointer transition-colors"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Mumbai, India</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>

        {/* Desktop Search Bar */}
        <div className="flex-1 max-w-md hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for restaurants, dishes..."
              className="pl-10 pr-4 py-2 w-full bg-secondary/50 border-0 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          {/* Mobile Search Toggle */}
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Cart */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" className="gap-1 sm:gap-2 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                2
              </motion.span>
            </Button>
          </motion.div>

          {/* Login */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="gap-1 sm:gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
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
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for restaurants, dishes..."
                  className="pl-10 pr-4 py-2 w-full bg-secondary/50 border-0 focus-visible:ring-primary"
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
            <div className="container mx-auto px-4 py-4 space-y-4">
              {/* Location */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 px-3 py-3 rounded-lg border border-border bg-background cursor-pointer"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Mumbai, India</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
              </motion.div>

              {/* Menu Items */}
              {["Home", "Offers", "Help", "Sign In"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (index + 2) }}
                  className="px-3 py-2 text-foreground font-medium hover:text-primary cursor-pointer transition-colors"
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
