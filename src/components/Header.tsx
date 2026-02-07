import { MapPin, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-display font-bold text-primary">
            foodzzy
          </h1>
        </div>

        {/* Location Selector */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-secondary/50 cursor-pointer transition-colors">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Mumbai, India</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>

        {/* Search Bar */}
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
        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile Search */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="w-5 h-5" />
          </Button>

          {/* Cart */}
          <Button variant="ghost" className="gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            <span className="bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Button>

          {/* Login */}
          <Button variant="outline" className="gap-2">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Login</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
