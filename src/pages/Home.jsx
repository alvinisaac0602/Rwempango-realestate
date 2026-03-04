import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RealestateImg from "../assets/bgrealestate.avif";
import GoatFarmingImg from "../assets/goat2.webp";
import CoffeeGrowingImg from "../assets/coffee3.jpg";
import LoanImg from "../assets/loan.jpg";
import WealthImg from "../assets/wealth.jpg";

const Home = () => {
  const services = [
    {
      title: "Real Estate & Property Management",
      description:
        "Buy, sell, and manage land and properties with professional support and verified documentation.",
      img: RealestateImg,
      link: "/realestate",
    },
    {
      title: "Agriculture Ventures",
      description:
        "Goat farming, coffee cultivation, and innovative agricultural projects empowering local communities.",
      img: GoatFarmingImg,
      link: "/agriculture",
    },
    {
      title: "Finance & Investment",
      description:
        "Flexible loans, wealth management, and investment solutions tailored for individuals and groups.",
      img: LoanImg,
      link: "/finance",
    },
  ];

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${RealestateImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Rwempango: Excellence in Real Estate, Agriculture & Finance
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-8 drop-shadow-md">
            We provide innovative solutions in property management, financial services,
            and agricultural ventures to help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg transition-all inline-block"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 overflow-x-hidden">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12 tracking-tight">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-green-600 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlight Agriculture */}
      <section className="relative py-24 bg-green-50 overflow-x-hidden">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={CoffeeGrowingImg}
            alt="Coffee Farming"
            className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Agriculture Ventures
            </h2>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Empowering communities through sustainable goat farming, coffee growing,
              and modern agricultural practices to boost productivity and livelihoods.
            </p>
            <Link
              to="/agriculture"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg transition-all inline-block"
            >
              Explore Agriculture
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Highlight Finance */}
      <section className="relative py-24 bg-gray-50 overflow-x-hidden">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center px-4 sm:px-6 md:flex-row-reverse"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={WealthImg}
            alt="Finance Services"
            className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Finance & Investment
            </h2>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Tailored financial services including loans, wealth management,
              and investment planning for individuals, groups, and institutions.
            </p>
            <Link
              to="/finance"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg transition-all inline-block"
            >
              Explore Finance
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 text-center overflow-x-hidden">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm sm:text-lg">
          Contact Rwempango today to explore our services in real estate, finance, or agriculture. Let’s build a better future together.
        </p>
        <Link
          to="/contact"
          className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition font-semibold text-base sm:text-lg shadow-lg inline-block"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;