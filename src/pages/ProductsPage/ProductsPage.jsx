import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiFilter, FiChevronDown, FiX, FiSearch } from "react-icons/fi";
import { ShoppingCart, Heart } from "lucide-react";
import { useStore } from "../../store/useStore";
import ProductsShowcase from "../Home/ProductShowcase";
import ComboPacksShowcase from "../Home/ComboPacksShowcase";

const ProductsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const {
    categories,
    loadingStates: { categories: loadingCategories },
    errors: { categories: categoriesError },
    fetchCategories,
  } = useStore();

  const [activeTab, setActiveTab] = useState("products");
  const [activeCategory, setActiveCategory] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (slug && categories.length > 0) {
      const category = categories.find((c) => c.slug === slug);
      setActiveCategory(category || null);
    } else {
      setActiveCategory(null);
    }
  }, [slug, categories]);

  if (loadingCategories || (slug && !activeCategory)) {
    return (
      <div className="py-16 bg-[#F9F5F0] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1b53a5]"></div>
      </div>
    );
  }

  if (categoriesError) {
    return (
      <div className="py-16 bg-[#F9F5F0] flex items-center justify-center">
        <div className="text-[#a30d14]">{categoriesError}</div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-[#F9F5F0]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#5e0808]">
              {activeCategory ? activeCategory.name : "All Products"}
            </h2>
            <p className="text-[#5e0808] mt-2">
              {activeCategory
                ? activeCategory.description
                : "Browse our complete collection"}
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
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

        {activeCategory && (
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center bg-[#fcce01] text-[#5e0808] px-3 py-1 rounded-full text-sm">
              {activeCategory.name}
              <button
                onClick={() => navigate("/products")}
                className="ml-2 text-[#a30d14] hover:text-[#5e0808]"
              >
                <FiX size={16} />
              </button>
            </div>
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
                    navigate("/products");
                    setShowMobileFilters(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm text-left ${
                    !activeCategory
                      ? "bg-[#5e0808] text-white"
                      : "bg-[#d4d3d0] text-[#5e0808] hover:bg-[#fcce01]"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      navigate(`/category/${category.slug}`);
                      setShowMobileFilters(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm text-left ${
                      activeCategory?.id === category.id
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
            onClick={() => navigate("/products")}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              !activeCategory
                ? "bg-[#5e0808] text-white"
                : "bg-[#d4d3d0] text-[#5e0808] hover:bg-[#fcce01]"
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => navigate(`/category/${category.slug}`)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory?.id === category.id
                  ? "bg-[#5e0808] text-white"
                  : "bg-[#d4d3d0] text-[#5e0808] hover:bg-[#fcce01]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#d4d3d0] mb-8">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 font-medium ${
              activeTab === "products"
                ? "text-[#5e0808] border-b-2 border-[#5e0808]"
                : "text-[#5e0808]/60 hover:text-[#5e0808]"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("combos")}
            className={`px-4 py-2 font-medium ${
              activeTab === "combos"
                ? "text-[#5e0808] border-b-2 border-[#5e0808]"
                : "text-[#5e0808]/60 hover:text-[#5e0808]"
            }`}
          >
            Combo Packs
          </button>
        </div>

        {activeTab === "products" ? (
          <ProductsShowcase categoryId={activeCategory?.id} />
        ) : (
          <ComboPacksShowcase categoryId={activeCategory?.id} />
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
