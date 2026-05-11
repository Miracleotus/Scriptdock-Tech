export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-5xl space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Comprehensive Development Capabilities</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          From the initial wireframe to the final deployment, Mayo Digital handles the entire software development lifecycle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Custom Software & SaaS Development</h2>
          <p className="text-gray-600 leading-relaxed">
            Off-the-shelf software rarely fits a growing business perfectly. We engineer bespoke web applications, SaaS platforms, and internal portals tailored exactly to how your team works.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Enterprise Web Development</h2>
          <p className="text-gray-600 leading-relaxed">
            Your website is your hardest-working asset. We build blazing-fast, secure websites using modern headless CMS architectures or optimized WordPress builds. We ensure your site looks stunning on any device and ranks highly on search engines.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">E-Commerce Development</h2>
          <p className="text-gray-600 leading-relaxed">
            We build high-converting online stores that can handle heavy traffic and complex product variations. We handle secure payment gateway integrations, automated tax calculations, and ERP/CRM syncing.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">DevOps & Cloud Infrastructure</h2>
          <p className="text-gray-600 leading-relaxed">
            Don&apos;t let server crashes cost you money. We migrate, manage, and optimize your applications on top-tier cloud providers like AWS, Google Cloud, and DigitalOcean, ensuring 99.9% uptime and bulletproof security.
          </p>
        </div>
      </div>
    </main>
  );
}