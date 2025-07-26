import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Gift } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUsPage = () => {
  return (
    <div className="bg-gradient-to-b pt-30 from-[#F9F5F0] to-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-[#1b53a5] p-3 rounded-full">
              <Gift className="text-[#fcce01] w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#1b53a5] mb-4">
            Contact <span className="text-[#a30d14]">CORP GIFT GPT</span>
          </h1>
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#fcce01] to-[#1b53a5] mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Get in touch for corporate gifting inquiries, customized gift
            solutions, or partnership opportunities
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md border border-[#d4d3d0]"
          >
            <h2 className="text-2xl font-bold text-[#1b53a5] mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#1b53a5] mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#d4d3d0] rounded-md focus:ring-[#fcce01] focus:border-[#fcce01] bg-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1b53a5] mb-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#d4d3d0] rounded-md focus:ring-[#fcce01] focus:border-[#fcce01] bg-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#1b53a5] mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-[#d4d3d0] rounded-md focus:ring-[#fcce01] focus:border-[#fcce01] bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-[#1b53a5] mb-1"
                >
                  Product Interest *
                </label>
                <select
                  id="product"
                  className="w-full px-4 py-2 border border-[#d4d3d0] rounded-md focus:ring-[#fcce01] focus:border-[#fcce01] bg-white"
                  required
                >
                  <option value="">Select a gift category</option>
                  <option value="corporate">Corporate Gifts</option>
                  <option value="festive">Festive Gifts</option>
                  <option value="luxury">Luxurious Gifts</option>
                  <option value="dry-fruits">Dry Fruit Hampers</option>
                  <option value="custom">Customized Gift Sets</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#1b53a5] mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-[#d4d3d0] rounded-md focus:ring-[#fcce01] focus:border-[#fcce01] bg-white"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#1b53a5] to-[#a30d14] hover:from-[#15417a] hover:to-[#8a0b11] text-white font-medium py-3 px-4 rounded-md transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8 border border-[#d4d3d0]">
              <h2 className="text-2xl font-bold text-[#1b53a5] mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#fcce01] p-3 rounded-full">
                    <Phone className="text-[#1b53a5] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b53a5]">Phone</h3>
                    <p className="text-gray-700">70308 75102</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#fcce01] p-3 rounded-full">
                    <Mail className="text-[#1b53a5] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b53a5]">Email</h3>
                    <p className="text-gray-700">smitaaaher@corpgiftgpt.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#fcce01] p-3 rounded-full">
                    <MessageSquare className="text-[#1b53a5] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b53a5]">WhatsApp</h3>
                    <p className="text-gray-700">70308 75102</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#fcce01] p-3 rounded-full">
                    <Clock className="text-[#1b53a5] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1b53a5]">
                      Working Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 9AM to 7PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#d4d3d0]">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#fcce01] p-3 rounded-full">
                  <MapPin className="text-[#1b53a5] w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-[#1b53a5]">
                  Our Office
                </h3>
              </div>
              <address className="text-gray-700 not-italic pl-14">
                Ashwin Nagar, Cidco
                <br />
                Nashik - 422009
                <br />
                Maharashtra, Bharat
              </address>
            </div>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl overflow-hidden border border-[#d4d3d0]"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-[#1b53a5] mb-2">
              Our Location
            </h2>
            <p className="text-gray-700 mb-6">
              Visit our office to discuss your corporate gifting needs
            </p>
          </div>
          <div className="h-96 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.074012873225!2d73.7738893153848!3d19.99755018656789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebaf1e0e6a2b%3A0x1a1a9a1a1a1a1a1a!2sAshwin%20Nagar%2C%20Cidco%2C%20Nashik%2C%20Maharashtra%2042209!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="CORP GIFT GPT Location"
            ></iframe>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactUsPage;
