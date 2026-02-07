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
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Popular Near You
          </h3>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">III</span>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
