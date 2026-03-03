import React from "react";
import { Link } from "react-router-dom";

const Finance = () => {
  const services = [
    {
      title: "Loans & Credit",
      description:
        "Flexible loans for individuals, groups, and small institutions to achieve personal and business goals.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pIFtYIpOUt7-qieYkj-2JNb2vlIOd0bYLw&s",
    },
    {
      title: "Wealth Management & Portfolio Advisory",
      description:
        "Personalized strategies to grow your wealth and manage investment portfolios efficiently.",
      img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Property & Casualty Insurance",
      description:
        "Protect your property and assets with tailored insurance solutions that fit your needs.",
      img: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1ed?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Investment Planning & Advisory",
      description:
        "Comprehensive investment planning to help you grow capital, diversify your portfolio, and achieve financial goals.",
      img: "https://images.unsplash.com/photo-1581091215360-150fc994a427?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Finance Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Rwempango provides loans, credit, wealth management, investment advisory, 
          and insurance solutions for individuals, groups, and small institutions.
        </p>
      </header>

      {/* Services Grid 2x2 */}
      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Get Started Today
        </h3>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Apply for loans or speak to our financial advisors to grow and protect your wealth.
        </p>
        <Link
          to="/contact"
          className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Finance;