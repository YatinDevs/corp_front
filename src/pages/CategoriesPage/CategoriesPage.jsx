import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Gift,
  Smile,
  Package,
  Sparkles,
  Heart,
  Award,
  Handshake,
  Globe,
  Users,
} from "lucide-react";

//const navigate = useNavigate();

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CategoriesPage = () => {
  const categories = [
    {
      name: "Corporate Gifts",
      description: "Professional gifts to strengthen business relationships",
      icon: <Handshake className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
    },
    {
      name: "Festive Gifts",
      description: "Celebrate special occasions with thoughtful presents",
      icon: <Sparkles className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    },
    {
      name: "Welcome Kits",
      description: "Make newcomers feel valued with curated welcome packages",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f",
    },
    {
      name: "Customized Gift Sets",
      description: "Personalized gifts tailored to your brand and message",
      icon: <Award className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    },
    {
      name: "Exhibition Gifts",
      description: "Memorable giveaways for trade shows and exhibitions",
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    },
    {
      name: "Return Gifts",
      description: "Thoughtful tokens of appreciation for your guests",
      icon: <Heart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
    },
    {
      name: "Wedding Gifts",
      description: "Elegant presents to celebrate special unions",
      icon: <Smile className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    },
    {
      name: "Dry Fruit Hampers",
      description: "Healthy and luxurious fruit arrangements",
      icon: <Package className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
    },
    {
      name: "Spiritual Gifts",
      description: "Meaningful presents for spiritual occasions",
      icon: <Heart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
    },
    {
      name: "Luxurious Gifts",
      description: "Premium gifting options for discerning clients",
      icon: <Award className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
    },
    {
      name: "Room Hampers",
      description: "Complete room packages for special guests",
      icon: <Package className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
    },
    {
      name: "Gold & Silver Gifts",
      description: "Precious metal gifts for milestone achievements",
      icon: <Gift className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a",
    },
  ];

  return (
    <div className="bg-[#F9F5F0] pt-30">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          alt="Gift categories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center px-4"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-[#1b53a5] p-3 rounded-full">
                <Gift className="text-white w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
              Our <span className="text-[#fcce01]">Gift</span> Collections
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our wide range of customized gifting solutions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4 text-[#1b53a5]">
              Customized <span className="text-[#a30d14]">Gifting</span>{" "}
              Solutions
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#fcce01] to-[#1b53a5]"></div>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At CORP GIFT GPT, we offer a diverse range of corporate and
              personal gifting options. Each product is carefully curated to
              deliver smiles and spread happiness. We can prepare gift combo
              packs according to your budget and requirements.
            </p>
          </motion.div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#d4d3d0]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${category.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#1b53a5] p-2 rounded-full">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <button
                    onClick={() => navigate("/")}
                    className="text-[#1b53a5] font-medium hover:text-[#a30d14] transition-colors"
                  >
                    Explore Collection →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Budget Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-r from-[#1b53a5] to-[#a30d14] rounded-xl p-8 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Budget-Friendly Options
                </h2>
                <p className="text-white/90 mb-6">
                  We understand that every business has different gifting needs
                  and budgets. That's why we offer flexible solutions that
                  deliver maximum impact without compromising on quality.
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Gift className="w-5 h-5" />
                  </div>
                  <p className="font-medium">
                    Custom combo packs tailored to your budget
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="absolute w-48 h-48 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-[#fcce01] flex items-center justify-center text-[#1b53a5] font-bold text-xl">
                        ₹999+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-6 text-[#1b53a5]">
              Need Help Choosing?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our team of passionate gift concept designers can help you select
              the perfect gifts for your occasion, event, or corporate needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1b53a5] hover:bg-[#154187] text-white font-medium py-3 px-8 rounded-lg transition-all mr-4"
            >
              Contact Our Experts
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#fcce01] hover:bg-[#e6b900] text-[#1b53a5] font-medium py-3 px-8 rounded-lg transition-all"
            >
              View All Products
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesPage;
