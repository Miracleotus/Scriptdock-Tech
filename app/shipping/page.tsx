export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-16 max-w-4xl grow">
        <h1 className="text-4xl font-extrabold mb-8">Shipping Policy (Digital Goods Delivery)</h1>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Delivery of Digital Services</h2>
            <p>Mayo Digital is a software and web development agency. We do not manufacture or ship physical products. All deliverables—including website access credentials, source code repositories (e.g., via GitHub/GitLab), design files, and applications—are delivered entirely digitally.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Delivery Timelines</h2>
            <p>Delivery timelines for custom projects are established during the Discovery phase and are explicitly outlined in your specific Statement of Work (SOW) or project management dashboard. Delays caused by the client (e.g., delayed feedback, missing API keys) may extend the final delivery date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Immediate Access to Store Products</h2>
            <p>For digital services purchased directly through our store (e.g., technical audits, consultation bookings), next steps, access instructions, or booking calendars will be delivered automatically to the email address provided at checkout within 24 hours of successful payment confirmation.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
