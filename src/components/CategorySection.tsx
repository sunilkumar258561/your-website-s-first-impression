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
    <section className="py-10 md:py-14 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-display font-semibold text-foreground whitespace-nowrap"
          >
            What's on your mind?
          </motion.h3>

          <div className="h-8 w-px bg-border hidden sm:block" />

          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl border transition-all duration-300 group ${
                  activeCategory === category.name
                    ? "bg-primary border-primary text-primary-foreground shadow-md"
                    : "border-border bg-background hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-cover"
                  />
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: activeCategory === category.name ? 1 : 0 }}
                    className="absolute -top-1 -right-1 text-xs"
                  >
                    {category.emoji}
                  </motion.span>
                </div>
                <span
                  className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
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
