"use client";
import React, { useState } from "react";
import axios from "axios";
import { Address, Rate, trackingObjType } from "../../../type";
import { cartProductsWhichCanBeShipped } from "../../../data";
import Link from "next/link";

const ShippingRatesPage = () => {
  const [shipeToAddress, setShipeToAddress] = useState<Address>({
    name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "", 
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no", 
  });

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setRateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        packages: cartProductsWhichCanBeShipped.map((product) => ({
          weight: product.weight,
          dimensions: product.dimensions,
        })),
      });
      console.log(response.data);
      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.error(error);
      setErrors(["An error occurred while fetching rates."]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
    }

    setLoading(true);
    setErrors([]);

    try {
      const response = await axios.post("/api/shipengine/label", {
        rateId: rateId,
      });
      const labelData = response.data;
      console.log(labelData);
      setLabelPdf(labelData.labelDownload.href);
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      console.error(error);
      setErrors(["An error occurred while creating the label."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-black bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Shipping Rates Calculator
        </h1>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* To Address Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Ship To Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={shipeToAddress.name}
                onChange={(e) =>
                  setShipeToAddress({ ...shipeToAddress, name: e.target.value })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                value={shipeToAddress.phone}
                onChange={(e) =>
                  setShipeToAddress({
                    ...shipeToAddress,
                    phone: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Address Line 1"
                value={shipeToAddress.addressLine1}
                onChange={(e) =>
                  setShipeToAddress({
                    ...shipeToAddress,
                    addressLine1: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Address Line 2"
                value={shipeToAddress.addressLine2}
                onChange={(e) =>
                  setShipeToAddress({
                    ...shipeToAddress,
                    addressLine2: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="City"
                value={shipeToAddress.cityLocality}
                onChange={(e) =>
                  setShipeToAddress({
                    ...shipeToAddress,
                    cityLocality: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="State/Province"
                value={shipeToAddress.stateProvince}
                onChange={(e) =>
                  setShipeToAddress({
                    ...shipeToAddress,
                    stateProvince: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                value={shipeToAddress.postalCode}
                onChange={(e) =>
                  setShipeToAddress({
                    ...shipeToAddress,
                    postalCode: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Country Code (e.g., PK)"
                value={shipeToAddress.countryCode}
                onChange={(e) =>
                  setShipeToAddress({
                    ...shipeToAddress,
                    countryCode: e.target.value,
                  })
                }
                className="p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
          >
            {loading ? "Calculating..." : "Get Shipping Rates"}
          </button>
        </form>

        {/* Display Available Rates */}
        {rates.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Available Shipping Rates
            </h2>
            <div className="gap-4 flex items-center flex-wrap">
              {rates.map((rate) => (
                <div
                  key={rate.rateId}
                  className={`p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer ${
                    rateId === rate.rateId
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-200 bg-gray-50"
                  }`}
                  onClick={() => setRateId(rate.rateId)}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shippingRate"
                      checked={rateId === rate.rateId}
                      onChange={() => setRateId(rate.rateId)}
                      className="form-radio h-4 w-4 text-blue-500"
                    />
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        <strong>Carrier:</strong> {rate.carrierFriendlyName}
                      </p>
                      <p className="text-gray-600">
                        <strong>Service:</strong> {rate.serviceType}
                      </p>
                      <p className="text-gray-800 font-semibold">
                        <strong>Cost:</strong> {rate.shippingAmount.amount}{" "}
                        {rate.shippingAmount.currency}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Label Button */}
        {rateId && (
          <div className="mt-8">
            <button
              onClick={handleCreateLabel}
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              {loading ? "Creating Label..." : "Create Label"}
            </button>
          </div>
        )}
        {labelPdf && (
          <Link target="_blank" href={labelPdf}>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Download Label
            </button>
          </Link>
        )}
        {trackingObj && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tracking Details (Note: Using ShipEngine test API key)
            </h2>
            <p>Tracking number: {trackingObj.trackingNumber}</p>
            <p>Label ID: {trackingObj.labelId}</p>
            <p>Carrier Code: {trackingObj.carrierCode}</p>
            <Link href={`/tracking/?labelId=${trackingObj.labelId}`}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Track Order
              </button>
            </Link>
          </div>
        )}
        {errors.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Errors</h2>
            <div className="space-y-2">
              {errors.map((error, index) => (
                <p key={index} className="text-red-500">
                  {error}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingRatesPage;
