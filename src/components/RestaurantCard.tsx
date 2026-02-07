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
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        />

        {/* Discount Badge */}
        {discount && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="absolute bottom-3 left-3 bg-discount text-discount-foreground font-bold px-3 py-1">
              {discount}
            </Badge>
          </motion.div>
        )}

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-md"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? "fill-accent text-accent" : "text-muted-foreground"
            }`}
          />
        </motion.button>

        {/* Quick Order Button - Shows on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute bottom-3 right-3"
        >
          <Button size="sm" className="gap-1 shadow-lg">
            <ExternalLink className="w-3 h-3" />
            Order
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4">
        <motion.h4
          className="font-display font-semibold text-lg text-foreground mb-2 truncate"
          animate={{ x: isHovered ? 4 : 0 }}
        >
          {name}
        </motion.h4>

        {/* Rating & Info */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1 bg-badge-green/10 text-badge-green px-2 py-0.5 rounded-full"
          >
            <Star className="w-3.5 h-3.5 fill-badge-green" />
            <span className="font-semibold">{rating}</span>
          </motion.div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{deliveryTime}</span>
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-0.5">
            <IndianRupee className="w-3 h-3" />
            <span>{priceForTwo}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          <Badge
            variant="outline"
            className="bg-discount/10 text-discount border-discount/30 font-bold text-xs"
          >
            50% OFF
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Free Delivery
          </Badge>
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
