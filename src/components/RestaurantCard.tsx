import { useState } from "react";
import { Star, Clock, IndianRupee, Heart, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: number;
  discount?: string;
  isPremium?: boolean;
  index?: number;
}

const RestaurantCard = ({
  name,
  image,
  rating,
  deliveryTime,
  priceForTwo,
  discount,
  index = 0,
}: RestaurantCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Discount badge */}
        {discount && (
          <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground font-extrabold px-3 py-1.5 rounded-lg text-xs shadow-lg">
            <Zap className="w-3 h-3 mr-1" />
            {discount}
          </Badge>
        )}

        {/* Like */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.85 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-card/90 backdrop-blur-sm shadow-md"
        >
          <Heart
            className={`w-4 h-4 transition-all ${
              isLiked ? "fill-primary text-primary scale-110" : "text-muted-foreground"
            }`}
          />
        </motion.button>

        {/* Quick Order on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <button className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            Quick Order
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-display font-bold text-lg text-foreground mb-3 truncate">
          {name}
        </h4>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1 bg-primary text-primary-foreground px-2.5 py-1 rounded-lg shadow-sm">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-extrabold text-xs">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{deliveryTime}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <IndianRupee className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{priceForTwo} for two</span>
          </div>
        </div>

        {/* Gold offer tag */}
        <div className="mt-3 pt-3 border-t border-border/50">
          <span className="text-xs font-bold text-foreground bg-accent/40 px-3 py-1.5 rounded-full border border-accent/30">
            🎉 Free Delivery
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
