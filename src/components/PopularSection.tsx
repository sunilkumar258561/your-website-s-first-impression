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
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-wider mb-2"
            >
              Curated for you
            </motion.p>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Popular Near You
            </h3>
            <p className="text-muted-foreground mt-2 text-base max-w-md">
              Discover the finest restaurants handpicked by our food experts
            </p>
          </div>
          <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }}>
            <Button variant="ghost" className="gap-2 text-primary font-medium group hidden sm:flex">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} index={index} />
          ))}
        </div>

        {/* Load More - Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center lg:hidden"
        >
          <Button variant="outline" size="lg" className="w-full max-w-xs gap-2 rounded-xl border-primary/30 text-primary hover:bg-primary/5">
            Show More Restaurants
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularSection;
