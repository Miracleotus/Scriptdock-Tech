export default function ContactUs() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Let&apos;s Talk.</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Whether you have a fully drafted Request for Proposal (RFP) or just a sketch on a napkin, our technical strategists are ready to help you map out your next steps. Reach out below, and we will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1 space-y-8">
          <div className="bg-purple-50 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Details</h3>
            <div className="space-y-5 text-gray-600">
              <div>
                <strong className="block text-gray-900 mb-1">Email</strong>
                <a href="mailto:support@mayodigital.com" className="text-purple-700 hover:underline">support@mayodigital.com</a>
              </div>
              <div>
                <strong className="block text-gray-900 mb-1">Phone</strong>
                <a href="tel:+234" className="text-purple-700 hover:underline">+234</a>
              </div>
              <div>
                <strong className="block text-gray-900 mb-1">Address</strong>
                <address className="not-italic leading-relaxed">
                  Plot 3978 Nuc Quarters Karu,<br />
                  Abuja Municipal Area Council,<br />
                  Nigeria
                </address>
              </div>
              <div>
                <strong className="block text-gray-900 mb-1">Business Hours</strong>
                <p>Monday – Friday<br />9:00 AM – 6:00 PM WAT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="john@company.com" required />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
              <input type="text" id="company" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="Your Company Name" required />
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-2">Project Details & Budget</label>
              <textarea id="details" rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="Tell us about your project, goals, and estimated budget..." required></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-700 text-white font-bold py-4 px-6 rounded-lg hover:bg-purple-800 transition duration-300 shadow-md">
              Submit Project Inquiry
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
