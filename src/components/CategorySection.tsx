import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import dessertsImg from "@/assets/desserts.jpg";
import drinksImg from "@/assets/drinks.jpg";

const categories = [
  { name: "Pizza", image: pizzaImg },
  { name: "Burger", image: burgerImg },
  { name: "Biryani", image: biryaniImg },
  { name: "Desserts", image: dessertsImg },
  { name: "Drinks", image: drinksImg },
];

const CategorySection = () => {
  return (
    <section className="py-8 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 lg:gap-6 overflow-x-auto pb-2 scrollbar-hide">
          <h3 className="text-lg font-semibold text-foreground whitespace-nowrap">
            What's on your mind?
          </h3>
          
          <div className="h-8 w-px bg-border hidden sm:block" />
          
          <div className="flex gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background hover:bg-secondary hover:border-primary/30 transition-all duration-200 group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-foreground whitespace-nowrap group-hover:text-primary transition-colors">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
