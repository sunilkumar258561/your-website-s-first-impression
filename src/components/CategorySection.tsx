import { useState } from "react";
import { motion } from "framer-motion";
import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import dessertsImg from "@/assets/desserts.jpg";
import drinksImg from "@/assets/drinks.jpg";

const categories = [
  { name: "Pizza", image: pizzaImg, emoji: "🍕" },
  { name: "Burger", image: burgerImg, emoji: "🍔" },
  { name: "Biryani", image: biryaniImg, emoji: "🍛" },
  { name: "Desserts", image: dessertsImg, emoji: "🍰" },
  { name: "Drinks", image: drinksImg, emoji: "🥤" },
];

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="py-10 md:py-14 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8"
        >
          What's on your mind?
        </motion.h3>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
              className="flex flex-col items-center gap-3 min-w-[100px] group"
            >
              <div
                className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                  activeCategory === category.name
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background shadow-md"
                    : "group-hover:shadow-md"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCategory === category.name ? 1 : 0 }}
                  className="absolute inset-0 bg-primary/20"
                />
              </div>
              <span
                className={`text-sm font-semibold transition-colors ${
                  activeCategory === category.name ? "text-primary" : "text-foreground"
                }`}
              >
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
