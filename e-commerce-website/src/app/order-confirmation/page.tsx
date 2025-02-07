"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Rate {
  rate_id: string;
  service_type: string;
  shipping_amount: {
    amount: number;
  };
}

export default function OrderConfirmation() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState<boolean>(true);
  const [rates, setRates] = useState<Rate[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, [sessionId]);

  const fetchShippingRates = async () => {
    try {
      const shipmentDetails = {
        shipment: {
          carrier_id: "se-1873382", // Replace with your carrier ID
          from: {
            name: "John Doe",
            company_name: "Example Corp",
            phone: "555-555-5555",
            address_line1: "4009 Marathon Blvd",
            city_locality: "Austin",
            state_province: "TX",
            postal_code: "78756",
            country_code: "US",
          },
          to: {
            name: "Jane Doe",
            company_name: "Acme Inc",
            phone: "555-555-5555",
            address_line1: "123 Main St",
            city_locality: "New York",
            state_province: "NY",
            postal_code: "10001",
            country_code: "US",
          },
          packages: [{ weight: { value: 1.0, unit: "pound" } }],
        },
      };

      const response = await fetch("/api/shipengine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "getRates", data: shipmentDetails }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      setRates(data.rate_response?.rates || []);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <motion.div 
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full border-t-4 border-green-500 border-solid h-16 w-16 mb-4"></div>
            <h1 className="text-xl font-semibold text-gray-700">Verifying your payment...</h1>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold text-green-600">🎉 Order Placed Successfully! 🎉</h1>
            <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
            
            <button 
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition"
              onClick={fetchShippingRates}
            >
              Get Shipping Rates
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <ul className="mt-4 text-left">
              {rates.map((rate) => (
                <li key={rate.rate_id} className="text-gray-700">
                  {rate.service_type}: ${rate.shipping_amount.amount}
                </li>
              ))}
            </ul>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="/"
                className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition"
              >
                Back to Home
              </a>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
