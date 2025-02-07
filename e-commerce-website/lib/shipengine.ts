import axios from 'axios';

const SHIPENGINE_API_KEY = process.env.SHIPENGINE_API_KEY;
const SHIPENGINE_BASE_URL = 'https://api.shipengine.com/v1';

const shipengineClient = axios.create({
  baseURL: SHIPENGINE_BASE_URL,
  headers: {
    'API-Key': SHIPENGINE_API_KEY,
    'Content-Type': 'application/json',
  },
});

// Define types for shipment details and label details
interface ShipmentDetails {
  shipment: {
    carrier_id: string;
    service_code: string;
    ship_to: {
      name: string;
      address_line1: string;
      city_locality: string;
      state_province: string;
      postal_code: string;
      country_code: string;
    };
    ship_from: {
      name: string;
      address_line1: string;
      city_locality: string;
      state_province: string;
      postal_code: string;
      country_code: string;
    };
    packages: {
      weight: {
        value: number;
        unit: string;
      };
    }[];
  };
}

interface LabelDetails {
  shipment_id: string;
  label_format?: 'pdf' | 'png' | 'zpl'; // Optional label format
}

export const getRates = async (shipmentDetails: ShipmentDetails) => {
  try {
    const response = await shipengineClient.post('/rates', shipmentDetails);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching rates:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};

export const createLabel = async (labelDetails: LabelDetails) => {
  try {
    const response = await shipengineClient.post('/labels', labelDetails);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error creating label:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};
