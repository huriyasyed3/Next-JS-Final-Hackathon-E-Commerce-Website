// 'use client'
// import { useEffect, useState } from "react";
// import Swal from 'sweetalert2'; // Import SweetAlert2
// import { Product } from "../../../types/product";
// import { useRouter } from "next/navigation";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   // Add item to cart
//   const addToCart = (product: Product) => {
//     const updatedCart = [...cartItems, { ...product, quantity: 1 }];
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     // SweetAlert2 for item added with Tailwind classes
//     Swal.fire({
//       title: 'Success!',
//       text: `${product.name} has been added to your cart.`,
//       icon: 'success',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#4CAF50', // Green button for success
//       background: '#f9fafb', // Tailwind's background color
//       padding: '2em', // Padding around the alert
//       customClass: {
//         title: 'text-xl font-semibold text-green-600', // Tailwind class for title
//       }
//     });
//   };

//   // Remove item from cart
//   const removeFromCart = (index: number) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     // SweetAlert2 for item removed with Tailwind classes
//     Swal.fire({
//       title: 'Item Removed',
//       text: 'The item has been removed from your cart.',
//       icon: 'warning',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#FF5733', // Red button for remove
//       background: '#f9fafb', // Tailwind's background color
//       padding: '2em',
//       customClass: {
//         title: 'text-xl font-semibold text-red-600', // Tailwind class for title
//       }
//     });
//   };

//   // Clear entire cart
//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem("cart");

//     // SweetAlert2 for clearing cart with Tailwind classes
//     Swal.fire({
//       title: 'Cart Cleared!',
//       text: 'Your cart is now empty.',
//       icon: 'info',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#FF6347', // Tomato color for clearing cart
//       background: '#f9fafb', // Tailwind's background color
//       padding: '2em',
//       customClass: {
//         title: 'text-xl font-semibold text-blue-600', // Tailwind class for title
//       }
//     });
//   };

//   // Increase quantity of item
//   const increaseQuantity = (index: number) => {
//     const updatedCart = [...cartItems];
//     updatedCart[index].quantity += 1;
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     // SweetAlert2 for quantity increased with Tailwind classes
//     Swal.fire({
//       title: 'Quantity Increased',
//       text: `The quantity of ${updatedCart[index].name} has been increased.`,
//       icon: 'success',
//       confirmButtonText: 'OK',
//       confirmButtonColor: '#4CAF50', // Green button for success
//       background: '#f9fafb', // Tailwind's background color
//       padding: '2em',
//       customClass: {
//         title: 'text-xl font-semibold text-green-600', // Tailwind class for title
//       }
//     });
//   };

//   // Decrease quantity of item
//   const decreaseQuantity = (index: number) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity > 1) {
//       updatedCart[index].quantity -= 1;
//       setCartItems(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));

//       // SweetAlert2 for quantity decreased with Tailwind classes
//       Swal.fire({
//         title: 'Quantity Decreased',
//         text: `The quantity of ${updatedCart[index].name} has been decreased.`,
//         icon: 'success',
//         confirmButtonText: 'OK',
//         confirmButtonColor: '#4CAF50', // Green button for success
//         background: '#f9fafb', // Tailwind's background color
//         padding: '2em',
//         customClass: {
//           title: 'text-xl font-semibold text-green-600', // Tailwind class for title
//         }
//       });
//     } else {
//       Swal.fire({
//         title: 'Minimum Quantity Reached',
//         text: `The quantity of ${updatedCart[index].name} cannot be less than 1.`,
//         icon: 'warning',
//         confirmButtonText: 'OK',
//         confirmButtonColor: '#FF5733', // Red button for warning
//         background: '#f9fafb', // Tailwind's background color
//         padding: '2em',
//         customClass: {
//           title: 'text-xl font-semibold text-yellow-600', // Tailwind class for warning
//         }
//       });
//     }
//   };

//   // Calculate total price of the cart
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   // Handle Proceed to Checkout
//   const router = useRouter();
//   const handleProceed = () => {
//     Swal.fire({
//       title:"Processing your Order...",
//       text:"please wait a moment.",
//       icon:"info",
//       showCancelButton: true,
//       confirmButtonColor:'#3085d6',
//       cancelButtonColor:"#d33",
//       confirmButtonText:"proceed",
//     }).then((result)=>{
//       if(result.isConfirmed){
//         Swal.fire(
//           "Success!",
//           "Your order has been successfully processed!",
//           "success"
//         );
//         router.push('/checkout');
//         // clear the cart after proceeding (optional)
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Shopping Cart</h1>

//       {/* Cart Items List */}
//       {cartItems.length > 0 ? (
//         <div className="space-y-6">
//           <ul>
//             {cartItems.map((item, index) => (
//               <li key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
//                   <p className="text-gray-500">Price: ${item.price}</p>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={() => decreaseQuantity(index)}
//                     className="text-blue-500 hover:text-blue-700 text-2xl"
//                   >
//                     -
//                   </button>
//                   <span className="text-lg">{item.quantity}</span>
//                   <button
//                     onClick={() => increaseQuantity(index)}
//                     className="text-blue-500 hover:text-blue-700 text-2xl"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(index)}
//                   className="text-red-500 hover:text-red-700 font-semibold"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Cart Actions */}
//           <div className="mt-8 flex justify-between items-center">
//             <button
//               onClick={clearCart}
//               className="bg-red-600 text-white px-8 py-2 rounded-lg hover:bg-red-700 transition duration-300"
//             >
//               Clear Cart
//             </button>

//             <button
//               onClick={handleProceed}
//               className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition duration-300"
//             >
//               Go to Checkout
//             </button>
//           </div>

//           {/* Total Price */}
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


'use client'
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { Product } from "../../../types/product";
import { useRouter } from "next/navigation";


const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart) as Product[]);
    }
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    Swal.fire({
      title: 'Item Removed',
      text: 'The item has been removed from your cart.',
      icon: 'warning',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF5733'
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
    
    Swal.fire({
      title: 'Cart Cleared!',
      text: 'Your cart is now empty.',
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF6347'
    });
  };

  const increaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  

  const router = useRouter();
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
                <img src={product.imageUrl || '/placeholder-image.png'} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
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
