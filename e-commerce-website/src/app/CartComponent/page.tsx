// 'use client'
// import { useEffect, useState } from "react";
// import Swal from 'sweetalert2';
// import { Product } from "../../../types/product";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart) as Product[]);
//     }
//   }, []);

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   const removeFromCart = (index: number) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
    
//     Swal.fire({
//       title: 'Item Removed',
//       text: 'The item has been removed from your cart.',
//       icon: 'warning',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#FF5733'
//     });
//   };

//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem("cart");
    
//     Swal.fire({
//       title: 'Cart Cleared!',
//       text: 'Your cart is now empty.',
//       icon: 'info',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#FF6347'
//     });
//   };

//   const increaseQuantity = (index: number) => {
//     const updatedCart = [...cartItems];
//     updatedCart[index].quantity += 1;
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const decreaseQuantity = (index: number) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity > 1) {
//       updatedCart[index].quantity -= 1;
//       setCartItems(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   };
  

//   const router = useRouter();
//   const handleProceed = () => {
//     Swal.fire({
//       title: "Processing your Order...",
//       text: "Please wait a moment.",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Proceed",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Success!", "Your order has been successfully processed!", "success");
//         router.push('/checkout');
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Shopping Cart</h1>

//       {cartItems.length > 0 ? (
//         <div className="space-y-6">
//           <ul>
//             {cartItems.map((product, index) => (
//               <li key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//                 <Image src={product.imageUrl || '/placeholder-image.png'}
//                  alt={product.name} 
//                  width={500} // Adjust width
//   height={500} // Adjust height
//                  className="w-16 h-16 object-cover rounded-md" />
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
//                   <p className="text-gray-500">Price: ${product.price}</p>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <button onClick={() => decreaseQuantity(index)} className="text-blue-500 hover:text-blue-700 text-2xl">-</button>
//                   <span className="text-lg">{product.quantity}</span>
//                   <button onClick={() => increaseQuantity(index)} className="text-blue-500 hover:text-blue-700 text-2xl">+</button>
//                 </div>
//                 <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700 font-semibold">Remove</button>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-8 flex justify-between items-center">
//             <button onClick={clearCart} className="bg-red-600 text-white px-8 py-2 rounded-lg hover:bg-red-700 transition duration-300">Clear Cart</button>
//             <button onClick={handleProceed} className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition duration-300">Go to Checkout</button>
//           </div>

//           <div className="mt-6 text-xl font-semibold text-right">
//             <p>Total Price: ${calculateTotal()}</p>
//           </div>
//         </div>
//       ) : (
//         <p className="text-center text-xl text-gray-600">Your cart is empty!</p>
//       )}
//     </div>
//   );
// };

// export default Cart;


'use client';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { Product } from "../../../types/product";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  // Load cart items from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart) as Product[]);
      }
    }
  }, []);

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Remove item from cart
  const removeFromCart = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    Swal.fire({
      title: 'Item Removed',
      text: 'The item has been removed from your cart.',
      icon: 'warning',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF5733',
    });
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");

    Swal.fire({
      title: 'Cart Cleared!',
      text: 'Your cart is now empty.',
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF6347',
    });
  };

  // Increase item quantity
  const increaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease item quantity
  const decreaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1); // Remove item if quantity is 1
    }
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle checkout
  const handleProceed = () => {
    Swal.fire({
      title: "Processing your Order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully processed!", "success");
        router.push('/checkout');
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="space-y-6">
          <ul>
            {cartItems.map((product, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <Image
                  src={product.imageUrl || '/placeholder-image.png'}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-500">Price: ${product.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => decreaseQuantity(index)} className="text-blue-500 hover:text-blue-700 text-2xl">-</button>
                  <span className="text-lg">{product.quantity}</span>
                  <button onClick={() => increaseQuantity(index)} className="text-blue-500 hover:text-blue-700 text-2xl">+</button>
                </div>
                <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700 font-semibold">Remove</button>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center">
            <button onClick={clearCart} className="bg-red-600 text-white px-8 py-2 rounded-lg hover:bg-red-700 transition duration-300">Clear Cart</button>
            <button onClick={handleProceed} className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition duration-300">Go to Checkout</button>
          </div>

          <div className="mt-6 text-xl font-semibold text-right">
            <p>Total Price: ${calculateTotal()}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600">Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;