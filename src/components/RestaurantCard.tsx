import { Star, Clock, IndianRupee, MoreHorizontal, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RestaurantCardProps {
  name: string;
  image: string;
  logo?: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: number;
  discount?: string;
  isPremium?: boolean;
}

const RestaurantCard = ({
  name,
  image,
  rating,
  deliveryTime,
  priceForTwo,
  discount,
  isPremium,
}: RestaurantCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <Badge className="absolute bottom-3 left-3 bg-discount text-discount-foreground font-bold px-3 py-1">
            {discount}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-display font-semibold text-lg text-foreground mb-2 truncate">
          {name}
        </h4>

        {/* Rating & Info */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-star text-star" />
            <span className="font-medium text-foreground">{rating}</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{deliveryTime}</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-0.5">
            <IndianRupee className="w-3 h-3" />
            <span>{priceForTwo}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="bg-discount/10 text-discount border-discount/30 font-bold"
          >
            50% OFF
          </Badge>
          <Button variant="ghost" size="sm" className="text-muted-foreground gap-1">
            {isPremium ? (
              <>
                <Lock className="w-3 h-3" />
                <span className="text-xs">Persn</span>
              </>
            ) : (
              <>
                <MoreHorizontal className="w-4 h-4" />
                <span className="text-xs">More</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
