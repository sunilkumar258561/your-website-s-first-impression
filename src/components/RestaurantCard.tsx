import { useState } from "react";
import { Star, Clock, IndianRupee, Heart } from "lucide-react";
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
      whileHover={{ y: -6 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Discount */}
        {discount && (
          <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground font-bold px-3 py-1 rounded-lg text-xs shadow-md">
            {discount}
          </Badge>
        )}

        {/* Like */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-card/90 backdrop-blur-sm shadow-sm"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isLiked ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-display font-semibold text-lg text-foreground mb-3 truncate">
          {name}
        </h4>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 fill-primary" />
            <span className="font-bold text-xs">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs">{deliveryTime}</span>
          </div>
          <div className="flex items-center gap-0.5">
            <IndianRupee className="w-3.5 h-3.5" />
            <span className="text-xs">{priceForTwo} for two</span>
          </div>
        </div>

        {/* Offer tag */}
        <div className="mt-3 pt-3 border-t border-border/50">
          <span className="text-xs font-semibold text-accent-foreground bg-accent/30 px-3 py-1 rounded-full">
            🎉 Free Delivery
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
