import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 mt-auto">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-600 font-medium">
          <Link href="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
          <Link href="/refund" className="hover:text-black transition-colors">
            Refund Policy
          </Link>
          <Link href="/terms" className="hover:text-black transition-colors">
            Terms and Conditions
          </Link>
          <Link href="/shipping" className="hover:text-black transition-colors">
            Shipping Policy
          </Link>
        </div>
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Scriptdock Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}