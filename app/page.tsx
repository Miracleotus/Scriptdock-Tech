import Link from "next/link";
import { ArrowRight, Code, Layout, ShoppingCart, Repeat, ShieldCheck, Activity } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Architecting Your Digital Future.
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed">
            Scriptdock Tech delivers enterprise-grade software solutions, scalable web applications, and stunning corporate websites designed to push your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-purple-900 font-bold px-8 py-4 rounded-md hover:bg-purple-50 transition shadow-lg text-lg">
              Discuss Your Project
            </Link>
            <Link href="/services" className="bg-purple-800 text-white border border-purple-700 font-bold px-8 py-4 rounded-md hover:bg-purple-700 transition shadow-lg text-lg">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Harbor for Your Tech Ideas.</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Scriptdock Tech, we don`t write code; we build digital ecosystems. We bridge the gap between complex engineering and intuitive user experiences. Whether you are a startup looking to launch your first MVP or an established enterprise needing to modernize legacy systems, our team of dedicated engineers provides the technical foundation you need to scale securely.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Solutions Built for Scale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 flex items-center justify-center rounded-lg mb-6">
                <Layout size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Web Development</h3>
              <p className="text-gray-600 leading-relaxed">Fast, responsive, and SEO-optimized websites that serve as the ultimate digital storefront for your brand.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 flex items-center justify-center rounded-lg mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Custom Software</h3>
              <p className="text-gray-600 leading-relaxed">Bespoke web and mobile applications tailored precisely to your unique operational workflows.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 flex items-center justify-center rounded-lg mb-6">
                <ShoppingCart size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">E-Commerce Systems</h3>
              <p className="text-gray-600 leading-relaxed">Powerful, high-converting online stores built with robust inventory and payment architectures.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-700 flex items-center justify-center rounded-lg mb-6">
                <Repeat size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">API & Integrations</h3>
              <p className="text-gray-600 leading-relaxed">Seamlessly connecting your favorite software tools to automate your business processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">The Scriptdock Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-700 flex items-center justify-center rounded-full mx-auto mb-6">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Clean, Scalable Code</h3>
              <p className="text-gray-600">We adhere to the highest industry standards, ensuring your software is maintainable and ready for future growth.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-700 flex items-center justify-center rounded-full mx-auto mb-6">
                <Repeat size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Agile Methodology</h3>
              <p className="text-gray-600">We build in sprints, providing you with regular updates, transparent communication, and the flexibility to pivot when needed.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-700 flex items-center justify-center rounded-full mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Security First</h3>
              <p className="text-gray-600">Data protection is not an afterthought. We build secure infrastructures designed to protect you and your users from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">How We Ship Great Software</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative text-center">
              <div className="w-12 h-12 bg-purple-900 text-white font-bold flex items-center justify-center rounded-full mx-auto mb-4 relative z-10 text-xl">1</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Discovery & Scoping</h3>
              <p className="text-gray-600 text-sm">We analyze your business requirements and define a strict technical roadmap.</p>
            </div>
            <div className="relative text-center">
              <div className="w-12 h-12 bg-purple-900 text-white font-bold flex items-center justify-center rounded-full mx-auto mb-4 relative z-10 text-xl">2</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Design & Architecture</h3>
              <p className="text-gray-600 text-sm">We create intuitive UI/UX wireframes and map out your database architecture.</p>
            </div>
            <div className="relative text-center">
              <div className="w-12 h-12 bg-purple-900 text-white font-bold flex items-center justify-center rounded-full mx-auto mb-4 relative z-10 text-xl">3</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Development</h3>
              <p className="text-gray-600 text-sm">Our full-stack engineers bring the designs to life using modern technology stacks.</p>
            </div>
            <div className="relative text-center">
              <div className="w-12 h-12 bg-purple-900 text-white font-bold flex items-center justify-center rounded-full mx-auto mb-4 relative z-10 text-xl">4</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">QA & Deployment</h3>
              <p className="text-gray-600 text-sm">Rigorous testing ensures a bug-free, seamless launch to your live server environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-purple-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Deploy Your Vision?</h2>
          <p className="text-xl text-purple-100 mb-10 leading-relaxed">
            Let’s discuss how custom software and expert web development can streamline your operations and accelerate your revenue.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-purple-900 font-bold px-8 py-4 rounded-md hover:bg-purple-50 transition shadow-lg text-lg">
            Book a Free Technical Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}