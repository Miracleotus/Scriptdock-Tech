export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-5xl space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Mayo Digital</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We are a Nigeria-based digital agency specializing in enterprise software, scalable web applications, and high-converting e-commerce systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower businesses across Africa and beyond with world-class digital infrastructure. We believe that every business — regardless of size — deserves software that is reliable, secure, and built to scale.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Mayo Digital is a team of full-stack engineers, UI/UX designers, and technical strategists based in Abuja, Nigeria. From the initial wireframe to the final deployment, we handle the entire software development lifecycle.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Our Location</h2>
          <p className="text-gray-600 leading-relaxed">
            Plot 3978 Nuc Quarters Karu,<br />
            Abuja Municipal Area Council,<br />
            Nigeria
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed">
            Ready to start your project? Reach out to us at{' '}
            <a href="mailto:support@mayodigital.com" className="text-purple-700 hover:underline">support@mayodigital.com</a>{' '}
            or call us on <a href="tel:+234" className="text-purple-700 hover:underline">+234</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
