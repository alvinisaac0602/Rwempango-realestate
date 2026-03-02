import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Optional Contact Info */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-gray-700">
          <p>Email: info@rwempango.com</p>
          <p>Phone: +256 759 542947</p>
          <p>Address: Mukono, Uganda</p>
        </div>
      </div>
    </div>
  )
}

export default Contact