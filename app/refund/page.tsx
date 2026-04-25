export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-16 max-w-4xl grow">
        <h1 className="text-4xl font-extrabold mb-8">Refund Policy</h1>
        
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-3">1. Custom Development & Services</h2>
            <p>Due to the highly custom and labor-intensive nature of software development, web design, and digital consulting, refunds are evaluated strictly on a milestone basis. Once a project phase (e.g., Discovery, Wireframing, Initial Code Delivery) has been completed and formally approved by the client, the fees associated with that specific phase are non-refundable.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">2. Retainers and Maintenance</h2>
            <p>Monthly maintenance plans, cloud hosting, and ongoing support retainers can be canceled at any time with a 30-day written notice. We do not offer prorated refunds for mid-month cancellations; services will continue until the end of the current billing cycle.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-3">3. Pre-Packaged Digital Products/Audits</h2>
            <p>If you purchase a digital product (e.g., SEO audit, architecture consultation) through our store, we offer a refund only if the audit has not yet been initiated or the consultation has not yet taken place.</p>
          </section>
        </div>
      </main>
    </div>
  );
}