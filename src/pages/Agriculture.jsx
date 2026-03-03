import React from "react";
import { Link } from "react-router-dom";

const Agriculture = () => {
  const ventures = [
    {
      title: "Goat Farming",
      description:
        "Sustainable goat farming providing high-quality livestock for sale and breeding programs.",
      img: "https://images.unsplash.com/photo-1598136499492-61684f136f6e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Coffee Growing & Selling",
      description:
        "Premium coffee cultivation and sales, supporting local farmers and delivering quality coffee products.",
      img: "https://images.unsplash.com/photo-1593533570475-fd31f53b82db?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Irrigation & Modern Farming",
      description:
        "Innovative irrigation and farming techniques to maximize productivity and ensure sustainable agriculture.",
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Agriculture Ventures
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Rwempango empowers communities through goat farming, coffee cultivation,
          and innovative irrigation projects.
        </p>
      </header>

      {/* Ventures Grid 2x2 */}
      <div className="grid md:grid-cols-2 gap-10">
        {ventures.map((venture, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={venture.img}
              alt={venture.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {venture.title}
              </h2>
              <p className="text-gray-700">{venture.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Join Our Agricultural Projects
        </h3>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Connect with us to learn more about our goat farming, coffee cultivation,
          and other innovative agricultural opportunities.
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

export default Agriculture;