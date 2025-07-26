import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiChevronDown, FiX, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductCard from "../CartFeature/ProductCard";
import { useStore } from "../../store/useStore";
import DetailsModal from "../CartFeature/DetailsModal";

const ProductsShowcase = () => {
  const {
    products = [],
    categories = [],
    loadingStates: { products: loadingProducts, categories: loadingCategories },
    errors: { products: productsError, categories: categoriesError },
    fetchProducts,
    fetchCategories,
  } = useStore();

  const [activeFilter, setActiveFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Memoize fetch functions to prevent unnecessary re-renders
  const memoizedFetchProducts = useCallback(() => {
    fetchProducts();
  }, [fetchProducts]);

  const memoizedFetchCategories = useCallback(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    memoizedFetchProducts();
    memoizedFetchCategories();
  }, [memoizedFetchProducts, memoizedFetchCategories]);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Optimize category filtering with useMemo
  const categoryMap = useMemo(() => {
    return categories.reduce((map, category) => {
      map[category.name] = category;
      return map;
    }, {});
  }, [categories]);

  const filteredProducts = useMemo(() => {
    return activeFilter === "All"
      ? products
      : products.filter((product) => product.category?.name === activeFilter);
  }, [products, activeFilter]);

  const searchedProducts = useMemo(() => {
    return filteredProducts.filter((product) => {
      const nameMatch = product.name
        ?.toLowerCase()
        .includes(debouncedSearchQuery.toLowerCase());
      const descMatch = product.description
        ?.toLowerCase()
        .includes(debouncedSearchQuery.toLowerCase());
      return nameMatch || descMatch;
    });
  }, [filteredProducts, debouncedSearchQuery]);

  const clearFilters = useCallback(() => {
    setActiveFilter("All");
    setSearchQuery("");
  }, []);

  if (loadingProducts || loadingCategories) {
    return (
      <div className="py-16 bg-[#F9F5F0] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1b53a5]"></div>
      </div>
    );
  }

  if (productsError || categoriesError) {
    return (
      <div className="py-16 bg-[#F9F5F0] flex items-center justify-center">
        <div className="text-[#a30d14]">{productsError || categoriesError}</div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#F9F5F0]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#5e0808]">Our Products</h2>
            <p className="text-[#5e0808] mt-2">
              {activeFilter === "All" ? "All products" : activeFilter}
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5e0808]" />
              <input
                type="text"
                placeholder="Search products..."
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
                {activeFilter}
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
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveFilter(category.name);
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm text-left ${
                      activeFilter === category.name
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
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.name)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeFilter === category.name
                  ? "bg-[#5e0808] text-white"
                  : "bg-[#d4d3d0] text-[#5e0808] hover:bg-[#fcce01]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {searchedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {searchedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                animationDelay={index * 0.05}
                onViewDetails={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-[#5e0808] mb-4">
              <FiSearch size={48} className="mx-auto" />
            </div>
            <p className="text-[#5e0808] text-lg mb-4">
              No products found matching your criteria
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

      {selectedProduct && (
        <DetailsModal
          item={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductsShowcase;
