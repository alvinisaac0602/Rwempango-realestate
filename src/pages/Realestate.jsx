import React from 'react'

const Realestate = () => {
  const properties = [
    {
      title: "Luxury Plot in Kampala",
      description: "Prime land located in the heart of Kampala, perfect for residential or commercial development.",
      img: "https://source.unsplash.com/800x480/?land,plot"
    },
    {
      title: "Modern Apartment Property",
      description: "We manage modern apartments, ensuring smooth operations and tenant satisfaction.",
      img: "https://source.unsplash.com/800x480/?apartment,building"
    },
    {
      title: "Commercial Land Investment",
      description: "Ideal for investors looking for commercial land opportunities with great ROI potential.",
      img: "https://source.unsplash.com/800x480/?commercial,land"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Real Estate & Property Management
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Rwempango specializes in selling land and plots, and providing professional property management services for individuals and institutions.
        </p>
      </header>

      {/* Properties Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {properties.map((property, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
            <img
              src={property.img}
              alt={property.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{property.title}</h2>
              <p className="text-gray-700">{property.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Property Management Section */}
      <section className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Property Management Services
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
          Rwempango ensures your properties are well-maintained, tenants are satisfied, and investments are maximized with professional management.
        </p>
        <button className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
  )
}

export default Realestate