import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";
import {
  Gift,
  Briefcase,
  Cake,
  Home,
  Leaf,
  Diamond,
  Coffee,
  Box,
  Gem,
  Star,
  Heart,
  Award,
} from "lucide-react";

const CategoriesSection = () => {
  const {
    categories,
    loadingStates: { categories: loadingCategories },
    errors: { categories: categoriesError },
    fetchCategories,
  } = useStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  // Mock categories data since we're not using the store in this example
  const mockCategories = [
    {
      id: 1,
      name: "Corporate Gifts",
      slug: "corporate-gifts",
      products_count: 42,
    },
    { id: 2, name: "Festive Gifts", slug: "festive-gifts", products_count: 36 },
    { id: 3, name: "Welcome Kits", slug: "welcome-kits", products_count: 28 },
    {
      id: 4,
      name: "Customized Gift Sets",
      slug: "customized-gift-sets",
      products_count: 51,
    },
    {
      id: 5,
      name: "Exhibition Gifts",
      slug: "exhibition-gifts",
      products_count: 23,
    },
    { id: 6, name: "Return Gifts", slug: "return-gifts", products_count: 39 },
    // Only showing 6 categories for 2 rows
  ];
  const getCategoryIcon = (slug) => {
    const iconMap = {
      "corporate-gifts": (
        <Briefcase className="h-4 w-4 md:h-6 md:w-6 text-[#1b53a5]" />
      ),
      "festive-gifts": (
        <Cake className="h-4 w-4 md:h-6 md:w-6 text-[#fcce01]" />
      ),
      "welcome-kits": <Home className="h-4 w-4 md:h-6 md:w-6 text-[#a30d14]" />,
      "customized-gift-sets": (
        <Box className="h-4 w-4 md:h-6 md:w-6 text-[#1b53a5]" />
      ),
      "exhibition-gifts": (
        <Award className="h-4 w-4 md:h-6 md:w-6 text-[#fcce01]" />
      ),
      "return-gifts": (
        <Heart className="h-4 w-4 md:h-6 md:w-6 text-[#a30d14]" />
      ),
      "wedding-gifts": <Gem className="h-4 w-4 md:h-6 md:w-6 text-[#1b53a5]" />,
      "dry-fruit-hampers": (
        <Leaf className="h-4 w-4 md:h-6 md:w-6 text-[#fcce01]" />
      ),
      "spiritual-gifts": (
        <Coffee className="h-4 w-4 md:h-6 md:w-6 text-[#a30d14]" />
      ),
      "luxurious-gifts": (
        <Diamond className="h-4 w-4 md:h-6 md:w-6 text-[#1b53a5]" />
      ),
      "room-hampers": <Star className="h-4 w-4 md:h-6 md:w-6 text-[#fcce01]" />,
      "gold-silver-gifts": (
        <Gem className="h-4 w-4 md:h-6 md:w-6 text-[#a30d14]" />
      ),
    };
    return (
      iconMap[slug] || <Gift className="h-4 w-4 md:h-6 md:w-6 text-[#1b53a5]" />
    );
  };

  const getCategoryImage = (slug) => {
    const imageMap = {
      "corporate-gifts":
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "festive-gifts":
        "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "welcome-kits":
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "customized-gift-sets":
        "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "exhibition-gifts":
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "return-gifts":
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "wedding-gifts":
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "dry-fruit-hampers":
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "spiritual-gifts":
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "luxurious-gifts":
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "room-hampers":
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "gold-silver-gifts":
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    };
    return (
      imageMap[slug] ||
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf"
    );
  };
  const getColorClass = (index) => {
    const colors = [
      "bg-[#fcce01]/20",
      "bg-[#a30d14]/20",
      "bg-[#1b53a5]/20",
      "bg-[#d4d3d0]/20",
    ];
    return colors[index % colors.length];
  };

  if (loadingCategories) {
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a30d14] mb-4">
            Our Gifting Categories
          </h2>
          <p className="text-[#1b53a5] max-w-2xl mx-auto text-lg">
            Discover unique and customized corporate gifting solutions
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={`/category/${category.slug}`} className="block">
                <div className="relative overflow-hidden rounded-xl aspect-square bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-[#d4d3d0]">
                  <img
                    src={getCategoryImage(category.slug)}
                    alt={category.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col items-center justify-center md:justify-end md:p-6">
                    <div
                      className={`${getColorClass(
                        index
                      )} p-3  rounded-full md:mb-3 group-hover:scale-110 transition-transform`}
                    >
                      {getCategoryIcon(category.slug)}
                    </div>
                    <h3 className="text-white font-bold text-xs sm:text-xs md:text-lg text-center">
                      {category.name}
                    </h3>
                    <span className="hidden md:flex text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {category.products_count} options →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
