import React from 'react'

const Finance = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Finance Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Rwempango provides loans, credit, wealth management, and insurance solutions for individuals, groups, and small institutions.
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Loans & Credit */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <img
            src="https://source.unsplash.com/800x480/?finance,loan"
            alt="Loans & Credit"
            className="w-full h-56 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Loans & Credit</h2>
            <p className="text-gray-700">
              Flexible loans for individuals, groups, and small institutions to achieve personal and business goals.
            </p>
          </div>
        </div>

        {/* Wealth Management & Portfolio Advisory */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <img
            src="https://source.unsplash.com/800x480/?investment,portfolio"
            alt="Wealth Management"
            className="w-full h-56 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Wealth Management & Portfolio Advisory</h2>
            <p className="text-gray-700">
              Personalized strategies to grow your wealth and manage investment portfolios efficiently.
            </p>
          </div>
        </div>

        {/* Property & Casualty Insurance */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <img
            src="https://source.unsplash.com/800x480/?insurance,property"
            alt="Insurance"
            className="w-full h-56 object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Property & Casualty Insurance</h2>
            <p className="text-gray-700">
              Protect your property and assets with tailored insurance solutions that fit your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Get Started Today
        </h3>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Apply for loans or speak to our financial advisors to grow and protect your wealth.
        </p>
        <button className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
  )
}

export default Finance