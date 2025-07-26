import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiChevronDown, FiX, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";
import { useToast } from "../../context/ToastContext";
import { ShoppingCart, Heart } from "lucide-react";
import DetailsModal from "../CartFeature/DetailsModal";

const ComboPacksShowcase = () => {
  const {
    comboPacks = [],
    categories = [],
    loadingStates: {
      comboPacks: loadingComboPacks,
      categories: loadingCategories,
    },
    errors: { comboPacks: comboPacksError, categories: categoriesError },
    fetchComboPacks,
    fetchCategories,
  } = useStore();

  const addToCart = useStore((state) => state.addToCart);
  const { addToast } = useToast();
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  // Memoize fetch functions
  const memoizedFetchComboPacks = useCallback(
    (params = {}) => {
      fetchComboPacks(params);
    },
    [fetchComboPacks]
  );

  const memoizedFetchCategories = useCallback(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    memoizedFetchComboPacks({
      category_id: activeFilter === "All" ? null : activeFilter,
    });
    memoizedFetchCategories();
  }, [memoizedFetchComboPacks, memoizedFetchCategories, activeFilter]);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Optimize category filtering
  const categoryMap = useMemo(() => {
    return categories.reduce((map, category) => {
      map[category.id] = category;
      return map;
    }, {});
  }, [categories]);

  const filteredComboPacks = useMemo(() => {
    return comboPacks.filter((combo) => {
      const nameMatch = combo.name
        ?.toLowerCase()
        .includes(debouncedSearchQuery.toLowerCase());
      const descMatch = combo.description
        ?.toLowerCase()
        .includes(debouncedSearchQuery.toLowerCase());
      return nameMatch || descMatch;
    });
  }, [comboPacks, debouncedSearchQuery]);

  const clearFilters = useCallback(() => {
    setActiveFilter("All");
    setSearchQuery("");
  }, []);

  const handleAddToCart = useCallback(
    (e, combo) => {
      e.preventDefault();
      try {
        addToCart(combo);
        addToast("Combo pack added to cart", "success");
      } catch (error) {
        addToast("Failed to add combo to cart", "error");
        console.error("Add to cart error:", error);
      }
    },
    [addToCart, addToast]
  );

  const handleWishlist = useCallback(
    (e) => {
      e.preventDefault();
      addToast("Added to wishlist", "success");
    },
    [addToast]
  );

  const getImageUrl = useCallback((imagePath) => {
    if (!imagePath) return null;
    return `https://corpgiftgpt.demovoting.com/uploads/${imagePath}`;
  }, []);

  if (loadingComboPacks || loadingCategories) {
    return (
      <div className="py-16 bg-[#F9F5F0] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1b53a5]"></div>
      </div>
    );
  }

  if (comboPacksError || categoriesError) {
    return (
      <div className="py-16 bg-[#F9F5F0] flex items-center justify-center">
        <div className="text-[#a30d14]">
          {comboPacksError || categoriesError}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#F9F5F0]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5e0808] mb-4">
            Combo Packs
          </h2>
          <p className="text-[#5e0808] max-w-2xl mx-auto text-lg">
            Special bundles with great discounts
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#5e0808]">
              {activeFilter === "All"
                ? "All Combo Packs"
                : categoryMap[activeFilter]?.name || activeFilter}
            </h3>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5e0808]" />
              <input
                type="text"
                placeholder="Search combo packs..."
                className="w-full pl-10 pr-4 py-2 border border-[#d4d3d0] rounded-lg focus:ring-2 focus:ring-[#1b53a5] focus:border-[#1b53a5]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5e0808] hover:text-[#a30d14]"
                >
                  <FiX size={18} />
                </button>
              )}
            </div>

            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="md:hidden flex items-center gap-2 bg-[#d4d3d0] hover:bg-[#fcce01] px-4 py-2 rounded-lg transition-colors"
            >
              <FiFilter className="text-[#5e0808]" />
              <span className="text-[#5e0808]">Filters</span>
              <FiChevronDown
                className={`transition-transform text-[#5e0808] ${
                  showMobileFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {(activeFilter !== "All" || searchQuery) && (
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm text-[#5e0808]">Active filters:</span>
            {activeFilter !== "All" && (
              <div className="flex items-center bg-[#fcce01] text-[#5e0808] px-3 py-1 rounded-full text-sm">
                {categoryMap[activeFilter]?.name || activeFilter}
                <button
                  onClick={() => setActiveFilter("All")}
                  className="ml-2 text-[#a30d14] hover:text-[#5e0808]"
                >
                  <FiX size={16} />
                </button>
              </div>
            )}
            {searchQuery && (
              <div className="flex items-center bg-[#d4d3d0] text-[#5e0808] px-3 py-1 rounded-full text-sm">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 text-[#5e0808] hover:text-[#a30d14]"
                >
                  <FiX size={16} />
                </button>
              </div>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-[#1b53a5] hover:text-[#a30d14] underline"
            >
              Clear all
            </button>
          </div>
        )}

        <AnimatePresence>
          {showMobileFilters && (
            <motion.div
              className="md:hidden mb-6 bg-white p-4 rounded-lg shadow-lg border border-[#d4d3d0]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setActiveFilter("All");
                    setShowMobileFilters(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm text-left ${
                    activeFilter === "All"
                      ? "bg-[#5e0808] text-white"
                      : "bg-[#d4d3d0] text-[#5e0808] hover:bg-[#fcce01]"
                  }`}
                >
                  All Combos
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveFilter(category.id);
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm text-left ${
                      activeFilter === category.id
                        ? "bg-[#5e0808] text-white"
                        : "bg-[#d4d3d0] text-[#5e0808] hover:bg-[#fcce01]"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex gap-3 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeFilter === "All"
                ? "bg-[#5e0808] text-white"
                : "bg-[#d4d3d0] text-[#5e0808] hover:bg-[#fcce01]"
            }`}
          >
            All Combos
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeFilter === category.id
                  ? "bg-[#5e0808] text-white"
                  : "bg-[#d4d3d0] text-[#5e0808] hover:bg-[#fcce01]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {filteredComboPacks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredComboPacks.map((combo, index) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-[#d4d3d0] group"
              >
                {combo.images?.[0] && (
                  <div className="h-48 bg-gray-100 overflow-hidden relative">
                    <img
                      src={getImageUrl(combo.images[0])}
                      alt={combo.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={handleWishlist}
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110"
                    >
                      <Heart className="w-4 h-4 text-[#a30d14]" />
                    </button>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#5e0808]">
                      {combo.name}
                    </h3>
                    {combo.discount_price && (
                      <div className="text-right">
                        <span className="text-sm text-[#5e0808] line-through">
                          ₹{combo.price}
                        </span>
                        <span className="text-lg font-bold text-[#1b53a5] block">
                          ₹{combo.discount_price}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {combo.products?.slice(0, 4).map((product) => (
                      <div
                        key={product.id}
                        className="border border-[#d4d3d0] rounded-lg p-3 flex flex-col items-center"
                      >
                        {product.images?.[0] ? (
                          <img
                            src={getImageUrl(product.images[0])}
                            alt={product.name}
                            className="h-20 w-20 object-contain mb-2"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://via.placeholder.com/80?text=No+Image";
                            }}
                          />
                        ) : (
                          <div className="h-20 w-20 bg-[#d4d3d0] rounded flex items-center justify-center mb-2">
                            <span className="text-[#5e0808]">No image</span>
                          </div>
                        )}
                        <p className="text-sm font-medium text-center text-[#5e0808] line-clamp-1">
                          {product.name}
                        </p>
                        <p className="text-xs text-[#5e0808]">
                          Qty: {product.pivot?.quantity || 1}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <button
                      onClick={(e) => handleAddToCart(e, combo)}
                      className="flex items-center justify-center gap-1 bg-[#1b53a5] hover:bg-[#5e0808] text-white text-center py-2 px-4 rounded-lg transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedCombo(combo);
                      }}
                      className="text-sm text-[#1b53a5] hover:text-[#a30d14] hover:underline py-2 px-4"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-[#5e0808] mb-4">
              <FiSearch size={48} className="mx-auto" />
            </div>
            <p className="text-[#5e0808] text-lg mb-4">
              No combo packs found matching your criteria
            </p>
            <button
              onClick={clearFilters}
              className="text-[#5e0808] font-medium underline hover:text-[#1b53a5]"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {selectedCombo && (
        <DetailsModal
          item={selectedCombo}
          isCombo={true}
          onClose={() => setSelectedCombo(null)}
        />
      )}
    </section>
  );
};

export default ComboPacksShowcase;
