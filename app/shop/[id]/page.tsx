"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.sku === productId);
  const { addToCart } = useCart();
  const { formatPrice, currency } = useCurrency();

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/shop"
            className="bg-purple-700 text-white px-6 py-3 font-semibold rounded-full hover:bg-purple-800 transition"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition"
      >
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Icon Placeholder */}
        <div className="aspect-square bg-purple-50 rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart size={32} className="text-purple-700" />
            </div>
            <p className="text-purple-400 font-medium">{product.category}</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <span className="text-xs text-purple-600 uppercase tracking-widest font-bold">{product.category}</span>
            <h1 className="text-3xl font-bold mt-2 mb-4 text-gray-900">{product.name}</h1>
            <p className="text-gray-600">{product.shortDescription}</p>
          </div>

          <div>
            <div className="text-4xl font-bold text-purple-700">
              {formatPrice(product.price)}
            </div>
            {currency === 'NGN' && (
              <p className="text-xs text-gray-500 mt-1">Exchange rate: 1 USD = 1,600 NGN</p>
            )}
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
          </div>

          <p className="text-sm text-gray-500">
            <span className="font-semibold">SKU:</span> {product.sku}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-purple-700 text-white py-4 font-bold rounded-full hover:bg-purple-600 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
