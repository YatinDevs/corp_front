import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Smile,
  Heart,
  Handshake,
  Award,
  Users,
  Sparkles,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

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

const OccasionsPage = () => {
  const occasions = [
    {
      name: "Corporate Events",
      description:
        "Professional gifts for conferences, meetings, and corporate milestones",
      icon: <Handshake className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      giftIdeas: [
        "Branded executive gifts",
        "Custom trophy sets",
        "Premium corporate hampers",
        "Luxury desk accessories",
      ],
    },
    {
      name: "Festivals",
      description:
        "Celebrate Diwali, Christmas, Eid and other festivals with special gifts",
      icon: <Sparkles className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1605000797499-95e51f0dc0e3",
      giftIdeas: [
        "Dry fruit hampers",
        "Traditional sweet boxes",
        "Festive decor items",
        "Customized diyas/candles",
      ],
    },
    {
      name: "Weddings",
      description: "Elegant gifts for weddings, engagements and anniversaries",
      icon: <Heart className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      giftIdeas: [
        "Personalized wedding favors",
        "Luxury couple hampers",
        "Gold/silver plated gifts",
        "Custom photo frames",
      ],
    },
    {
      name: "Employee Recognition",
      description: "Reward your team for their hard work and dedication",
      icon: <Award className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      giftIdeas: [
        "Appreciation trophy sets",
        "Personalized gift boxes",
        "Experience vouchers",
        "Wellness hampers",
      ],
    },
    {
      name: "Client Appreciation",
      description: "Strengthen business relationships with thoughtful gifts",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      giftIdeas: [
        "Luxury corporate hampers",
        "Custom branded gifts",
        "Premium stationery sets",
        "Gourmet food baskets",
      ],
    },
    {
      name: "Trade Shows",
      description: "Memorable giveaways that make your brand stand out",
      icon: <Gift className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      giftIdeas: [
        "Innovative promotional products",
        "Branded tech accessories",
        "Eco-friendly gift items",
        "Custom packaging solutions",
      ],
    },
  ];

  return (
    <div className="bg-[#F9F5F0] pt-30">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf"
          alt="Gifts for all occasions"
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
              Perfect Gifts for{" "}
              <span className="text-[#fcce01]">Every Occasion</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Thoughtful gifting solutions for all your special moments
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
              Gifting <span className="text-[#a30d14]">Solutions</span>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#fcce01] to-[#1b53a5]"></div>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At CORP GIFT GPT, we specialize in creating memorable gifting
              experiences for every occasion. Whether corporate or personal,
              we'll help you find the perfect gift to make your moment special.
            </p>
          </motion.div>
        </motion.div>

        {/* Occasions Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#d4d3d0]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${occasion.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
                    alt={occasion.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#1b53a5] p-2 rounded-full">
                        {occasion.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {occasion.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{occasion.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-[#1b53a5] mb-2">
                      Gift Ideas:
                    </h4>
                    <ul className="space-y-1 text-gray-700">
                      {occasion.giftIdeas.map((idea, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#fcce01]">•</span> {idea}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="text-[#1b53a5] font-medium hover:text-[#a30d14] transition-colors">
                    View Options →
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
                  Gifts For Every Budget
                </h2>
                <p className="text-white/90 mb-6">
                  We believe meaningful gifting shouldn't break the bank. Our
                  range includes options for every budget, from thoughtful
                  tokens to luxurious presentations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Smile className="w-5 h-5" />
                    </div>
                    <p className="font-medium">
                      Budget-friendly options starting from ₹499
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Heart className="w-5 h-5" />
                    </div>
                    <p className="font-medium">
                      Mid-range gifts with maximum impact
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Award className="w-5 h-5" />
                    </div>
                    <p className="font-medium">
                      Luxury presentations for special moments
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    Budget Range
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#fcce01]"></div>
                      <span>₹499 - ₹1,499</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#1b53a5]"></div>
                      <span>₹1,500 - ₹3,499</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#a30d14]"></div>
                      <span>₹3,500+</span>
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
              Our gifting experts can help you select the perfect presents for
              your specific occasion and budget requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1b53a5] hover:bg-[#154187] text-white font-medium py-3 px-8 rounded-lg transition-all"
              >
                Contact Our Team
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

export default OccasionsPage;
