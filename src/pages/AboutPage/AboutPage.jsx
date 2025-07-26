import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Smile,
  Heart,
  Handshake,
  Trophy,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Sparkles,
  Package,
  Ribbon,
  Shield,
} from "lucide-react";
import { smitaaher } from "../../assets";

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

const AboutPage = () => {
  return (
    <div className="bg-[#F9F5F0] pt-30">
      {/* Hero Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          alt="Corporate gifts"
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
              Delivering <span className="text-[#fcce01]">Smiles</span> &
              Spreading Happiness
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Adding a tinge of emotion to every gift since 2021
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Founder Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeIn} className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-[#1b53a5]">
              Meet <span className="text-[#a30d14]">Smita Aher</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A hardworking, honest & energetic woman entrepreneur with 20+
              years of experience in business development, sales & marketing.
              Founder of CORP GIFT GPT and passionate social worker.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#1b53a5] p-2 rounded-full">
                  <Award className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1b53a5]">
                    Certifications
                  </h3>
                  <p className="text-gray-700">
                    ZED certified facilitator by Quality Council of India | MBA
                    Marketing | SAP Sales & Distribution
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#1b53a5] p-2 rounded-full">
                  <Users className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1b53a5]">Strengths</h3>
                  <p className="text-gray-700">
                    Hardworking, passionate, positive, kind & honest with a
                    creative eye for design
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn} className="order-1 md:order-2">
            <div className="relative group overflow-hidden rounded-xl shadow-xl">
              <img
                src={smitaaher}
                alt="Smita Aher"
                className="w-full h-[600px] object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Smita Aher</h3>
                  <p className="text-[#fcce01]">Founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Story */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1b53a5]">
              Our <span className="text-[#a30d14]">Story</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#fcce01] to-[#1b53a5]"></div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2021 in Nashik, Maharashtra, CORP GIFT GPT began with
                a simple mission: to add a tinge of emotion to every gift. What
                started as a passion project has now blossomed into a company
                that delivers smiles and spreads happiness through thoughtful
                corporate gifting solutions.
              </p>
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Gift packaging"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div>
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Corporate gifts"
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                We believe in fostering healthy relationships with our clients
                by delivering high-quality products with complete safety and
                consistency. Our budget-friendly solutions ensure that every
                business, regardless of size, can make meaningful connections
                through gifts.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1b53a5]">
              Our <span className="text-[#a30d14]">Values</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#fcce01] to-[#1b53a5]"></div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smile className="w-8 h-8" />,
                title: "Deliver Smiles",
                description:
                  "We measure our success by the smiles we create through thoughtful gifting solutions.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Emotional Connection",
                description:
                  "Every gift is designed to create meaningful emotional connections between businesses and their stakeholders.",
              },
              {
                icon: <Handshake className="w-8 h-8" />,
                title: "Relationship Focus",
                description:
                  "We help strengthen business relationships through customized gifting experiences.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assurance",
                description:
                  "We ensure high-quality products with complete safety and consistency in every delivery.",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Creative Solutions",
                description:
                  "Our team of passionate designers creates unique, personalized gifting concepts.",
              },
              {
                icon: <Ribbon className="w-8 h-8" />,
                title: "Budget Friendly",
                description:
                  "We provide exceptional value with products and combos tailored to your budget.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#d4d3d0]"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-[#1b53a5] text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1b53a5]">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1b53a5]">
              What We <span className="text-[#a30d14]">Offer</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#fcce01] to-[#1b53a5]"></div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1b53a5] to-[#a30d14] p-0.5 rounded-xl h-full">
              <div className="bg-white p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold text-[#1b53a5] mb-6">
                  Our Gift Collections
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Corporate Gifts",
                    "Festive Gifts",
                    "Welcome Kits",
                    "Customized Gift Sets",
                    "Exhibition Gifts",
                    "Return Gifts",
                    "Wedding Gifts",
                    "Dry Fruit Hampers",
                    "Spiritual Gifts",
                    "Luxurious Gifts",
                    "Room Hampers",
                    "Gold & Silver Gifts",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#fcce01]"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Corporate gifts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Festive gifts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Luxury hampers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Custom gifts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-[#1b53a5]">
              We can prepare gift combo packs according to your budget!
            </p>
          </div>
        </motion.div>

        {/* Our Clients */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1b53a5]">
              Our <span className="text-[#a30d14]">Clients</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#fcce01] to-[#1b53a5]"></div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#d4d3d0]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {[
                  "Sun Pharma",
                  "CG Power",
                  "Excide",
                  "Schneider",
                  "Pharma Companies",
                  "Manufacturing",
                  "Event Organizers",
                  "Caterers",
                ].map((client, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#fcce01] flex items-center justify-center mb-2">
                      <span className="text-xl font-bold text-[#1b53a5]">
                        {client.split(" ")[0][0]}
                      </span>
                    </div>
                    <span className="text-sm text-center text-[#1b53a5] font-medium">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1b53a5]">
              Our <span className="text-[#a30d14]">Process</span>
            </h2>
            <div className="flex justify-center">
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#fcce01] to-[#1b53a5]"></div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#d4d3d0] -z-10"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Phone className="w-8 h-8" />,
                  title: "Consultation",
                  description: "Understand your gifting needs and budget",
                },
                {
                  icon: <Package className="w-8 h-8" />,
                  title: "Customization",
                  description:
                    "Design unique gift concepts tailored to your brand",
                },
                {
                  icon: <Gift className="w-8 h-8" />,
                  title: "Production",
                  description:
                    "Create high-quality gifts with attention to detail",
                },
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: "Delivery",
                  description: "Timely delivery with complete safety measures",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-[#d4d3d0] text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#1b53a5] flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1b53a5]">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-r from-[#1b53a5] to-[#a30d14] rounded-xl p-8 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Spread Happiness?
                </h2>
                <p className="text-white/90 mb-6">
                  Let's discuss how we can help you strengthen your business
                  relationships through thoughtful gifting solutions.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#fcce01] hover:bg-[#e6b900] text-[#1b53a5] font-medium py-3 px-6 rounded-lg transition-all"
                >
                  Contact Us Today
                </motion.button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>70308 75102</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>smitaaaher@corpgiftgpt.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>
                      Ashwin Nagar, Cidco, Nashik - 422009, Maharashtra, Bharat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
