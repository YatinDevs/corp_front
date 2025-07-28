import React from "react";
import { motion } from "framer-motion";
import { Gift, Package, Award, Heart, Phone, Mail, MapPin } from "lucide-react";

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

const GiftSetsPage = () => {
  const giftSets = [
    {
      name: "Executive Gift Hamper",
      price: "₹2,499+",
      description: "Premium collection for corporate leaders and VIP clients",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
      includes: [
        "Leather portfolio",
        "Premium pen set",
        "Custom notebook",
        "Luxury chocolates",
      ],
    },
    {
      name: "Festive Special Combo",
      price: "₹1,299+",
      description: "Traditional sweets and dry fruits for festive celebrations",
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
      includes: [
        "Assorted dry fruits",
        "Festive sweets",
        "Decorative box",
        "Personalized message card",
      ],
    },
    {
      name: "Wellness Hamper",
      price: "₹1,799+",
      description: "Healthy cookies, teas and organic products for wellbeing",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      includes: [
        "Organic teas",
        "Healthy snacks",
        "Aromatherapy candles",
        "Wellness journal",
      ],
    },
    {
      name: "Maharashtrian Special",
      price: "₹999+",
      description:
        "Paithani products and traditional Maharashtrian specialties",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
      includes: [
        "Paithani stole",
        "Traditional snacks",
        "Handcrafted decor",
        "Cultural booklet",
      ],
    },
    {
      name: "Luxury Gold Plated Set",
      price: "₹3,999+",
      description: "Elegant gold and silver gifts for milestone achievements",
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a",
      includes: [
        "Gold-plated items",
        "Velvet packaging",
        "Certificate of authenticity",
        "Personal engraving",
      ],
    },
    {
      name: "Welcome Kit",
      price: "₹1,599+",
      description:
        "Essential items and local specialties for new employees/guests",
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f",
      includes: [
        "Branded merchandise",
        "Local delicacies",
        "City guide",
        "Essential stationery",
      ],
    },
  ];

  return (
    <div className="bg-[#F9F5F0] pt-30">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          alt="Gift sets collection"
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
              Curated <span className="text-[#fcce01]">Gift Sets</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Premium gift combinations for every need and budget
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
              Premium <span className="text-[#a30d14]">Gift Collections</span>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#fcce01] to-[#1b53a5]"></div>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At CORP GIFT GPT, we've carefully curated these gift sets to save
              you time while ensuring maximum impact. Each set can be customized
              with your branding and personalized touches.
            </p>
          </motion.div>
        </motion.div>

        {/* Gift Sets Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftSets.map((set, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#d4d3d0]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${set.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                    alt={set.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#1b53a5] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {set.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1b53a5] mb-2">
                    {set.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{set.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-[#1b53a5] mb-2">
                      Includes:
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      {set.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#fcce01]">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-[#1b53a5] font-medium hover:text-[#a30d14] transition-colors">
                      Customize →
                    </button>
                    <button className="bg-[#fcce01] hover:bg-[#e6b900] text-[#1b53a5] font-medium py-2 px-4 rounded-lg transition-all">
                      Enquire Now
                    </button>
                  </div>
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
                  Custom Sets For Every Budget
                </h2>
                <p className="text-white/90 mb-6">
                  We understand that every gifting need is unique. Our team can
                  create custom gift sets tailored to your specific budget and
                  requirements, ensuring you get maximum value.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Package className="w-5 h-5" />
                    </div>
                    <p className="font-medium">
                      Budget-friendly options starting from ₹999
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Award className="w-5 h-5" />
                    </div>
                    <p className="font-medium">
                      Premium luxury sets for special occasions
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Heart className="w-5 h-5" />
                    </div>
                    <p className="font-medium">
                      Completely customizable components
                    </p>
                  </div>
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
              Need a Custom Gift Set?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Our team can create a completely personalized gift set tailored to
              your occasion, brand, and budget requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1b53a5] hover:bg-[#154187] text-white font-medium py-3 px-8 rounded-lg transition-all"
              >
                Contact Our Gifting Experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#fcce01] hover:bg-[#e6b900] text-[#1b53a5] font-medium py-3 px-8 rounded-lg transition-all"
              >
                Call: 70308 75102
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GiftSetsPage;
