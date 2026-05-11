export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-16 max-w-4xl grow">
        <h1 className="text-4xl font-extrabold mb-8">Terms and Conditions</h1>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Acceptance of Terms</h2>
            <p>By accessing the Mayo Digital website or engaging our services, you accept and agree to be bound by the terms and provisions of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Intellectual Property Rights</h2>
            <p>Unless otherwise stated in a specific Master Services Agreement (MSA), all underlying code, frameworks, and architectures developed by Mayo Digital remain our intellectual property until full and final payment has been received. Upon final payment, the agreed-upon intellectual property rights (such as the final source code) will be transferred to the client.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Limitation of Liability</h2>
            <p>Mayo Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from server downtimes, third-party API failures, or cyber-attacks outside of our direct control.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">4. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
