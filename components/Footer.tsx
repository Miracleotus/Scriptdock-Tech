import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 mt-auto">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-sm text-gray-600">
          <div>
            <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-widest text-xs">Mayo Digital</h3>
            <p className="leading-relaxed">Enterprise-grade software solutions, scalable web applications, and corporate websites designed to push your business forward.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-widest text-xs">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@mayodigital.com" className="hover:text-purple-700 transition">support@mayodigital.com</a>
              </li>
              <li>
                <a href="tel:+234" className="hover:text-purple-700 transition">+234</a>
              </li>
              <li className="leading-relaxed">Plot 3978 Nuc Quarters Karu,<br />Abuja Municipal Area Council</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-widest text-xs">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-purple-700 transition">Privacy Policy</Link></li>
              <li><Link href="/refund" className="hover:text-purple-700 transition">Refund Policy</Link></li>
              <li><Link href="/terms" className="hover:text-purple-700 transition">Terms and Conditions</Link></li>
              <li><Link href="/shipping" className="hover:text-purple-700 transition">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mayo Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
