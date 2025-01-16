'use client'
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri-color grey glaze.",
      price: 85,
      quantity: 1,
      image: "../public/silkyvase.png",
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 125,
      quantity: 1,
      image: "../../public/whitevase.png",
    },
  ]);

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Shopping Cart</h1>
      <div className="grid grid-cols-3 font-medium border-b py-3">
        <span>Product</span>
        <span className="text-center">Quantity</span>
        <span className="text-right">Total</span>
      </div>

      {cart.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-3 items-center gap-4 py-4 border-b"
        >
          <div className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <span className="text-sm text-gray-700">£{item.price}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Button
              onClick={() => decrementQuantity(item.id)}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              -
            </Button>
            <span className="text-lg">{item.quantity}</span>
            <Button
              onClick={() => incrementQuantity(item.id)}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              +
            </Button>
          </div>

          <div className="text-right text-lg">£{item.price * item.quantity}</div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6 ">
       <div className="">
          <h2 className="text-2xl font-bold">Subtotal: £{subtotal}</h2>
          <p className="text-sm text-gray-500">
            Taxes and shipping are calculated at checkout.
          </p>
          </div>
        <Button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Go to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
