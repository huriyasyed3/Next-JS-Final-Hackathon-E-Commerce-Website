'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { loadStripe } from '@stripe/stripe-js'
import { Product } from "../../../types/product"
import ShippingRatesPage from '../Ship/page'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

export default function Checkout() {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })
  const router = useRouter()

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems })
    });

    const data = await response.json();

    if (data.sessionId) {
      stripe?.redirectToCheckout({ sessionId: data.sessionId });
    } else {
      Swal.fire("Error", "Payment processing failed", "error");
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value })
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    Swal.fire({
      title: 'Confirming Order',
      text: 'Please wait while we process your order...',
      icon: 'info',
      showConfirmButton: false,
      allowOutsideClick: false
    })

    // Simulating an API call
    setTimeout(() => {
      Swal.fire({
        title: 'Order Confirmed!',
        text: 'Your order has been successfully placed.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        localStorage.removeItem("cart")
        router.push('/order-confirmation')
      })
    }, 2000)
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ShippingRatesPage/>
      
        <div className="bg-white shadow-lg rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4 mt-6">Payment Information</h2>
            <div>
              <label htmlFor="cardNumber" className="block mb-1 text-gray-600">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handlePaymentChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="cardName" className="block mb-1 text-gray-600">Name on Card</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={paymentInfo.cardName}
                onChange={handlePaymentChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block mb-1 text-gray-600">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={paymentInfo.expiryDate}
                  onChange={handlePaymentChange}
                  placeholder="MM/YY"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block mb-1 text-gray-600">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handlePaymentChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300">
              Place Order
            </button>
            <button 
              onClick={handleCheckout} 
              className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-300 mt-4">
              Pay with Stripe
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-600">{item.name} x {item.quantity}</span>
                <span className="text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4 mt-4 font-semibold">
              <div className="flex justify-between items-center">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}



