'use client';

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";

export default function Header() {
  const { cartCount } = useCart();
  const { currency, setCurrency } = useCurrency();

  return (
    <header className="bg-purple-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <Image src="/logo.svg" alt="Mayo Digital" width={180} height={45} priority />
        </Link>
        <nav className="space-x-6 font-medium text-purple-100 flex items-center">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/shop" className="hover:text-white transition">Shop</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/cart" className="hover:text-white transition font-bold">
            Cart ({cartCount})
          </Link>

          {/* Currency Toggle */}
          <div className="flex items-center border border-purple-500 rounded-full overflow-hidden text-sm font-bold">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 transition ${currency === 'USD' ? 'bg-white text-purple-900' : 'text-purple-200 hover:text-white'}`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency('NGN')}
              className={`px-3 py-1.5 transition ${currency === 'NGN' ? 'bg-white text-purple-900' : 'text-purple-200 hover:text-white'}`}
            >
              NGN
            </button>
          </div>

          <Link href="/contact" className="bg-purple-700 text-white px-5 py-2.5 rounded-md hover:bg-purple-600 transition font-bold shadow-md">
            Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
