import React from "react";
import { Link } from "react-router-dom";
import RealestateImg from '../assets/bgrealestate.avif';
import Landsurvey from '../assets/landsurvey.webp';
import Title from '../assets/title.jpg';

const Realestate = () => {
  const services = [
    {
      title: "Land Buying & Selling",
      description:
        "We facilitate fast and secure buying and selling of land with verified documentation and transparent processes.",
      img: "https://www.lexauganda.com/wp-content/uploads/2023/08/land.jpg",
    },
    {
      title: "Land Title Processing",
      description:
        "Professional support in land title transfers, verification, and documentation to secure your ownership legally.",
      img: Title,
    },
    {
      title: "Land Survey Services",
      description:
        "Accurate land surveying including boundary opening, subdivision, and mapping by qualified professionals.",
      img: Landsurvey,
    },
    {
      title: "Property Management",
      description:
        "We manage residential and commercial properties ensuring maintenance, tenant satisfaction, and maximum ROI.",
      img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${RealestateImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Trusted Land & Property Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Rwempango specializes in land buying & selling, title processing,
              surveying services, and professional property management.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Our Real Estate Services
        </h2>

        {/* 2 Columns Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Buy, Sell or Process Land?
        </h3>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          Contact Rwempango today for professional, fast and secure real estate services.
        </p>
        <Link
          to="/contact"
          className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-200 transition font-semibold text-lg shadow-lg"
        >
          Contact Us Today
        </Link>
      </section>

    </div>
  );
};

export default Realestate;