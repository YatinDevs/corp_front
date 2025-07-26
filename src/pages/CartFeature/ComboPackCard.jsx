import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useToast } from "../../context/ToastContext";
import { useStore } from "../../store/useStore";

const ComboPackCard = ({ combo, index, animationDelay }) => {
  const addToCart = useStore((state) => state.addToCart);
  const { addToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    try {
      addToCart(combo);
      addToast(`${combo.name} added to cart`, "success");
    } catch (error) {
      addToast(`Failed to add ${combo.name} to cart`, "error");
      console.error("Add to cart error:", error);
    }
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    addToast("Added to wishlist", "success");
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    return `https://corpgiftgpt.demovoting.com/uploads/${imagePath}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-[#d4d3d0]">
        <Link to={`/combo-packs/${combo.slug || combo.id}`} className="block">
          <div className="relative aspect-square overflow-hidden">
            {combo.images?.[0] ? (
              <img
                src={getImageUrl(combo.images[0])}
                alt={combo.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-[#d4d3d0] flex items-center justify-center">
                <span className="text-[#5e0808]">No image available</span>
              </div>
            )}
            <button
              onClick={handleWishlist}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110"
            >
              <Heart className="w-4 h-4 text-[#a30d14]" />
            </button>
          </div>
        </Link>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-[#5e0808] line-clamp-1">
              {combo.name}
            </h3>
            {combo.discount_price ? (
              <div className="text-right">
                <span className="text-[#5e0808] line-through text-sm">
                  ₹{combo.price}
                </span>
                <span className="text-lg font-bold text-[#1b53a5] block">
                  ₹{combo.discount_price}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-[#1b53a5]">
                ₹{combo.price}
              </span>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-1 bg-[#1b53a5] hover:bg-[#5e0808] text-white text-sm px-3 py-2 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
            <Link
              to={`/combo-packs/${combo.slug || combo.id}`}
              className="text-sm text-[#1b53a5] hover:text-[#a30d14] hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ComboPackCard;
