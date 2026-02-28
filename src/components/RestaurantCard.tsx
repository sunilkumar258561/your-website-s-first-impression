import { useState } from "react";
import { Star, Clock, IndianRupee, Heart, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface RestaurantCardProps {
  name: string;
  image: string;
  logo?: string;
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border cursor-pointer gold-glow-hover"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent"
        />

        {/* Discount Badge - Gold style */}
        {discount && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="absolute bottom-3 left-3 bg-accent text-accent-foreground font-bold px-3 py-1.5 rounded-lg shadow-md border-0">
              {discount}
            </Badge>
          </motion.div>
        )}

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-card/90 backdrop-blur-sm shadow-md border border-border"
        >
          <Heart
            className={`w-4 h-4 transition-colors duration-300 ${
              isLiked ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </motion.button>

        {/* Quick Order Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-3 right-3"
        >
          <Button size="sm" className="gap-1.5 shadow-lg rounded-lg bg-primary hover:bg-deep-orange">
            <ExternalLink className="w-3 h-3" />
            Order
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-display font-semibold text-lg text-foreground mb-3 truncate">
          {name}
        </h4>

        {/* Rating & Info */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-1 rounded-lg">
            <Star className="w-3.5 h-3.5 fill-primary" />
            <span className="font-semibold">{rating}</span>
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{deliveryTime}</span>
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-0.5">
            <IndianRupee className="w-3.5 h-3.5" />
            <span>{priceForTwo}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap mt-4">
          <Badge className="bg-accent/20 text-accent-foreground border-accent/30 font-medium text-xs rounded-lg border">
            50% OFF
          </Badge>
          <Badge variant="secondary" className="text-xs rounded-lg">
            Free Delivery
          </Badge>
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
