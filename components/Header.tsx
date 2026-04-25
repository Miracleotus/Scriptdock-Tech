'use client';

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="bg-purple-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tight hover:text-purple-200 transition">
          Scriptdock Tech
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
          <Link href="/contact" className="bg-purple-700 text-white px-5 py-2.5 rounded-md hover:bg-purple-600 transition font-bold shadow-md">
            Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}