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
    <section className="py-6 md:py-8 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-foreground whitespace-nowrap"
          >
            What's on your mind?
          </motion.h3>

          <div className="h-8 w-px bg-border hidden sm:block" />

          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border transition-all duration-200 group ${
                  activeCategory === category.name
                    ? "bg-primary border-primary text-primary-foreground shadow-md"
                    : "border-border bg-background hover:bg-secondary hover:border-primary/30"
                }`}
              >
                <motion.div
                  className="relative"
                  animate={activeCategory === category.name ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                  />
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: activeCategory === category.name ? 1 : 0 }}
                    className="absolute -top-1 -right-1 text-xs"
                  >
                    {category.emoji}
                  </motion.span>
                </motion.div>
                <span
                  className={`text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.name
                      ? "text-primary-foreground"
                      : "text-foreground group-hover:text-primary"
                  }`}
                >
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
