export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
      
      <p className="text-lg mb-6">
        Have questions or need assistance? We&apos;re here to help! Please use the form below or reach out via any of the following methods.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Reach Us</h2>
        <p className="text-lg">You can contact us through the following channels:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>Email: <span className="text-blue-600">info@hospital.com</span></li>
          <li>Phone: <span className="text-blue-600">(123) 456-7890</span></li>
          <li>Address: <span className="text-blue-600">123 Hospital St., City, Country</span></li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Form</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter your message"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
