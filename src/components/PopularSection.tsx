import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RestaurantCard from "./RestaurantCard";
import restaurantPizza from "@/assets/restaurant-pizza.jpg";
import restaurantBurger from "@/assets/restaurant-burger.jpg";
import restaurantBiryani from "@/assets/restaurant-biryani.jpg";
import restaurantCake from "@/assets/restaurant-cake.jpg";

const restaurants = [
  {
    name: "Burger King",
    image: restaurantBurger,
    rating: 4.2,
    deliveryTime: "30 mins",
    priceForTwo: 260,
    discount: "50% OFF",
    isPremium: false,
  },
  {
    name: "Biryani Corner",
    image: restaurantBiryani,
    rating: 4.5,
    deliveryTime: "30 mins",
    priceForTwo: 250,
    discount: "50% OFF",
    isPremium: true,
  },
  {
    name: "Pizza House",
    image: restaurantPizza,
    rating: 4.5,
    deliveryTime: "30 mins",
    priceForTwo: 260,
    discount: "50% OFF",
    isPremium: true,
  },
  {
    name: "Cake Shop",
    image: restaurantCake,
    rating: 4.5,
    deliveryTime: "30 mins",
    priceForTwo: 230,
    discount: "50% OFF",
    isPremium: false,
  },
];

const PopularSection = () => {
  return (
    <section className="py-10 lg:py-14 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Popular Near You
            </h3>
            <p className="text-muted-foreground mt-1 text-sm md:text-base">
              Discover the best food spots in your area
            </p>
          </div>
          <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" className="gap-2 text-primary group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} index={index} />
          ))}
        </div>

        {/* Load More - Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center lg:hidden"
        >
          <Button variant="outline" size="lg" className="w-full max-w-xs gap-2">
            Show More Restaurants
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularSection;
