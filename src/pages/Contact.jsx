import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone1 = "256759542947";
    const phone2 = "256780631385";

    const text = `Hello, my name is ${name}.
Email: ${email}
Message: ${message}`;

    const encodedText = encodeURIComponent(text);

    // Try first number
    const whatsappURL1 = `https://wa.me/${phone1}?text=${encodedText}`;
    const whatsappURL2 = `https://wa.me/${phone2}?text=${encodedText}`;

    window.open(whatsappURL1, "_blank");

    // Fallback after 2 seconds
    setTimeout(() => {
      window.open(whatsappURL2, "_blank");
    }, 2000);

    // Show success
    setSuccess(true);

    // Clear form
    setName("");
    setEmail("");
    setMessage("");

    // Hide success after 4 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">

          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors font-medium"
          >
            <FaWhatsapp size={20} />
            Send Message on WhatsApp
          </button>

        </form>

        {success && (
          <div className="mt-6 bg-green-100 text-green-700 p-3 rounded-md text-center">
            Message ready! Redirecting to WhatsApp...
          </div>
        )}

        <div className="mt-8 border-t border-gray-200 pt-6 text-gray-700">
          <p>Email: Musinguzijohn2023@gmail.com</p>
          <p>Phone: +256 759 542947 / +256 780 631 385</p>
          <p>Address: Mukono, Uganda</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;