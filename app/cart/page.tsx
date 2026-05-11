'use client';

import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, cartTotal } = useCart();
  const { formatPrice, convertPrice, currency } = useCurrency();

  if (cart.length === 0) {
    return (
      <main className="container mx-auto px-4 py-16 text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-4">Your Cart</h1>
        <p className="text-lg text-gray-600 mb-8">Your cart is currently empty. Start architecting your digital future today by adding some services.</p>
        <Link href="/shop" className="bg-purple-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-800 transition">
          Browse Services
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8">Your Cart</h1>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
        <ul className="divide-y divide-gray-200">
          {cart.map((item) => (
            <li key={item.product.sku} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">{item.product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.product.sku}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-gray-700 font-medium whitespace-nowrap">
                  {item.quantity} &times; {formatPrice(item.product.price)}
                </div>
                <div className="text-xl font-bold text-purple-700 whitespace-nowrap">
                  {formatPrice(item.quantity * item.product.price)}
                </div>
                <button onClick={() => removeFromCart(item.product.sku)} className="text-red-500 hover:text-red-700 font-semibold text-sm transition">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-gray-50 p-6 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200">
          <div className="mb-4 sm:mb-0">
            <span className="text-2xl font-bold">Total: {formatPrice(cartTotal)}</span>
            {currency === 'NGN' && (
              <p className="text-xs text-gray-500 mt-1">Exchange rate: 1 USD = 1,600 NGN</p>
            )}
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <button onClick={clearCart} className="flex-1 sm:flex-none px-6 py-3 border border-gray-300 rounded-md font-semibold hover:bg-gray-100 transition">Clear Cart</button>
            <button className="flex-1 sm:flex-none bg-purple-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-800 transition">Checkout</button>
          </div>
        </div>
      </div>
    </main>
  );
}
