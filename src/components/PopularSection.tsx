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
  },
  {
    name: "Biryani Corner",
    image: restaurantBiryani,
    rating: 4.5,
    deliveryTime: "25 mins",
    priceForTwo: 250,
    discount: "40% OFF",
  },
  {
    name: "Pizza House",
    image: restaurantPizza,
    rating: 4.6,
    deliveryTime: "35 mins",
    priceForTwo: 260,
    discount: "30% OFF",
  },
  {
    name: "Cake Studio",
    image: restaurantCake,
    rating: 4.8,
    deliveryTime: "20 mins",
    priceForTwo: 230,
    discount: "FREE DEL",
  },
];

const PopularSection = () => {
  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">
              Popular Near You
            </h3>
            <p className="text-muted-foreground mt-2 text-base">
              Curated picks from top-rated restaurants
            </p>
          </div>
          <motion.div whileHover={{ x: 4 }}>
            <Button variant="ghost" className="gap-2 text-primary font-semibold">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center lg:hidden"
        >
          <Button variant="outline" size="lg" className="w-full max-w-xs gap-2 rounded-xl">
            Show More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularSection;
