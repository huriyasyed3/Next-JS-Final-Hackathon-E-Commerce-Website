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

export const getRates = async (shipmentDetails: any) => {
  try {
    const response = await shipengineClient.post('/rates', shipmentDetails);
    return response.data;
  } catch (error:any) {
    console.error('Error fetching rates:', error.response?.data || error.message);
    throw error;
  }
};

export const createLabel = async (labelDetails: any) => {
  try {
    const response = await shipengineClient.post('/labels', labelDetails);
    return response.data;
  } catch (error:any) {
    console.error('Error creating label:', error.response?.data || error.message);
    throw error;
  }
};