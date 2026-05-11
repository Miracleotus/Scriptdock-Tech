export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-16 max-w-4xl grow">
        <h1 className="text-4xl font-extrabold mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Introduction</h2>
            <p>Welcome to Mayo Digital. We respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our website or use our software development services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Data We Collect</h2>
            <p>We may collect, use, store, and transfer different kinds of personal data about you, including Identity Data (name), Contact Data (email, phone number), Technical Data (IP address, browser type), and Usage Data (how you interact with our site).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. How We Use Your Data</h2>
            <p>We only use your personal data to fulfill the services you have requested, manage our client relationship, process payments, and improve our digital offerings. We do not sell your data to third-party data brokers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Cookies</h2>
            <p>Our website uses cookies to distinguish you from other users. This helps us provide you with an optimized experience when you browse our website and allows us to improve our site&apos;s functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">5. Contact</h2>
            <p>For any privacy-related queries, contact us at <a href="mailto:support@mayodigital.com" className="text-purple-700 hover:underline">support@mayodigital.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
