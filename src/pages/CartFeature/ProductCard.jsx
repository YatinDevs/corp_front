import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useStore } from "../../store/useStore";
import { useToast } from "../../context/ToastContext";

const ProductCard = ({ product, index, animationDelay = 0, onViewDetails }) => {
  const addToCart = useStore((state) => state.addToCart);
  const { addToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    try {
      addToCart(product);
      addToast(`${product.name} added to cart`, "success");
    } catch (error) {
      addToast("Failed to add to cart", "error");
      console.error("Add to cart error:", error);
    }
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    addToast("Added to wishlist", "success");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#d4d3d0]">
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative ">
            <img
              src={
                product.images?.[0]
                  ? `https://corpgiftgpt.demovoting.com/uploads/${product.images[0]}`
                  : "/placeholder-product.jpg"
              }
              alt={product.name}
              className="w-full h-full object-contain   transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {product.stock_quantity <= 0 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-bold bg-[#a30d14] px-2 py-1 rounded">
                  Out of Stock
                </span>
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

        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <Link to={`/product/${product.id}`}>
              <h3 className="font-medium text-[#5e0808] line-clamp-1 hover:text-[#1b53a5] transition-colors">
                {product.name}
              </h3>
            </Link>
          </div>

          {product.specifications?.size && (
            <p className="text-xs text-[#5e0808] mb-2">
              Size: {product.specifications.size}
            </p>
          )}

          <div className="flex justify-between items-center mt-3">
            <button
              onClick={handleAddToCart}
              disabled={product.stock_quantity <= 0}
              className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg transition-colors ${
                product.stock_quantity <= 0
                  ? "bg-[#d4d3d0] text-[#5e0808] cursor-not-allowed"
                  : "bg-[#1b53a5] hover:bg-[#5e0808] text-white"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{product.stock_quantity <= 0 ? "Out of Stock" : ""}</span>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                onViewDetails();
              }}
              className="text-sm text-[#1b53a5] hover:text-[#a30d14] hover:underline"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
