import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    {
      title: "Real Estate & Property Management",
      description: "We sell land, plots, and provide professional property management for individuals and institutions.",
      img: "https://source.unsplash.com/800x480/?land,property",
      link: "/realestate"
    },
    {
      title: "Finance & Loans",
      description: "Flexible loans, wealth management, and insurance solutions for individuals, groups, and small institutions.",
      img: "https://source.unsplash.com/800x480/?finance,loan",
      link: "/finance"
    },
    {
      title: "Agriculture Ventures",
      description: "Goat farming, coffee growing, and other agricultural projects to support local communities.",
      img: "https://source.unsplash.com/800x480/?agriculture,farm",
      link: "/agriculture"
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Rwempango: Excellence in Real Estate, Finance & Agriculture
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            We provide innovative solutions in property management, financial services, and agricultural ventures, helping individuals, groups, and institutions achieve their goals.
          </p>
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 tracking-tight">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-gray-900 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            At Rwempango, we aim to provide sustainable and professional services that empower our clients and communities. Whether it’s acquiring property, managing investments, or engaging in agriculture, we ensure excellence every step of the way.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Ready to Work With Us?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
          Contact Rwempango today to explore our services in real estate, finance, or agriculture. Let’s build a better future together.
        </p>
        <Link
          to="/contact"
          className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}

export default Home