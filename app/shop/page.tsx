'use client';

import React from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";

export default function ShopPage() {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">Shop Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our selection of enterprise-grade software solutions, scalable web applications, and ongoing maintenance packages.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.sku} className="border border-gray-200 rounded-2xl p-6 flex flex-col bg-white hover:shadow-xl transition-all border-t-4 border-t-purple-600">
            <span className="text-xs text-purple-600 uppercase tracking-widest font-bold mb-2">{product.category}</span>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">{product.name}</h2>
            <p className="text-gray-600 text-sm flex-1 leading-relaxed mb-6">{product.shortDescription}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <div>
                <span className="text-2xl font-extrabold text-gray-900">{formatPrice(product.price)}</span>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/shop/${product.sku}`}
                  className="text-purple-700 border border-purple-700 text-sm font-bold px-4 py-2.5 rounded-full hover:bg-purple-50 transition"
                >
                  Details
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-purple-700 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-purple-600 transition shadow-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
