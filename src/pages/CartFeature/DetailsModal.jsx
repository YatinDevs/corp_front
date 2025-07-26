import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { ShoppingCart, Heart } from "lucide-react";
import { useStore } from "../../store/useStore";
import { useToast } from "../../context/ToastContext";

const DetailsModal = ({ item, onClose, isCombo = false }) => {
  const addToCart = useStore((state) => state.addToCart);
  const { addToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    try {
      addToCart(item);
      addToast(
        `${isCombo ? "Combo pack" : "Product"} added to cart`,
        "success"
      );
    } catch (error) {
      addToast(
        `Failed to add ${isCombo ? "combo" : "product"} to cart`,
        "error"
      );
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#d4d3d0] hover:bg-[#a30d14] hover:text-white p-1 rounded-full transition-colors"
          >
            <FiX size={24} />
          </button>

          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {item.images?.[0] ? (
                    <img
                      src={getImageUrl(item.images[0])}
                      alt={item.name}
                      className="w-full h-64 object-contain"
                    />
                  ) : (
                    <div className="w-full h-64 bg-[#d4d3d0] flex items-center justify-center">
                      <span className="text-[#5e0808]">No image available</span>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {item.images?.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded overflow-hidden aspect-square"
                    >
                      <img
                        src={getImageUrl(img)}
                        alt={`${item.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-[#5e0808] mb-2">
                  {item.name}
                </h2>

                {!isCombo && item.specifications && (
                  <div className="mb-4">
                    <h3 className="font-medium text-[#5e0808] mb-2">
                      Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(item.specifications).map(
                        ([key, value]) => (
                          <div key={key} className="flex gap-1">
                            <span className="font-medium text-[#5e0808]">
                              {key}:
                            </span>
                            <span className="text-[#5e0808]">{value}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {isCombo && (
                  <div className="mb-4">
                    <h3 className="font-medium text-[#5e0808] mb-2">
                      Includes {item.products?.length || 0} products:
                    </h3>
                    <div className="space-y-3">
                      {item.products?.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-start gap-3 border-b border-[#d4d3d0] pb-3"
                        >
                          {product.images?.[0] ? (
                            <img
                              src={getImageUrl(product.images[0])}
                              alt={product.name}
                              className="w-16 h-16 object-contain"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-[#d4d3d0] flex items-center justify-center">
                              <span className="text-xs text-[#5e0808]">
                                No image
                              </span>
                            </div>
                          )}
                          <div>
                            <p className="font-medium text-[#5e0808]">
                              {product.name}
                            </p>
                            <p className="text-sm text-[#5e0808]">
                              Qty: {product.pivot?.quantity || 1}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="font-medium text-[#5e0808] mb-2">
                    Description
                  </h3>
                  <p className="text-[#5e0808]">
                    {item.description || "No description available"}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center gap-2 bg-[#1b53a5] hover:bg-[#5e0808] text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={handleWishlist}
                    className="flex items-center gap-2 border border-[#d4d3d0] hover:border-[#a30d14] text-[#5e0808] px-6 py-2 rounded-lg transition-colors"
                  >
                    <Heart size={18} />
                    <span>Add to Wishlist</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DetailsModal;
