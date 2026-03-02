import React from 'react'

const Agriculture = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Agriculture Ventures
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Rwempango is involved in goat farming, coffee growing and selling, and other agricultural ventures to support local farmers and communities.
        </p>
      </header>

      {/* Ventures Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Goat Farming */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <img
            src="https://source.unsplash.com/800x480/?goat,farm"
            alt="Goat Farming"
            className="w-full h-56 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Goat Farming</h2>
            <p className="text-gray-700">
              Sustainable goat farming practices to provide high-quality livestock for sale and breeding programs.
            </p>
          </div>
        </div>

        {/* Coffee Growing & Selling */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <img
            src="https://source.unsplash.com/800x480/?coffee,farm"
            alt="Coffee Farming"
            className="w-full h-56 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Coffee Growing & Selling</h2>
            <p className="text-gray-700">
              High-quality coffee cultivation and sales, supporting local farmers and providing premium coffee products.
            </p>
          </div>
        </div>

        {/* Other Agricultural Ventures */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <img
            src="https://source.unsplash.com/800x480/?agriculture,farm"
            alt="Other Agriculture Ventures"
            className="w-full h-56 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Other Ventures</h2>
            <p className="text-gray-700">
              Diverse agricultural activities including crop production, farming innovation, and sustainable practices for community growth.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Join Our Agricultural Projects
        </h3>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Connect with us to learn more about our goat farming, coffee ventures, and other agricultural opportunities.
        </p>
        <button className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
  )
}

export default Agriculture