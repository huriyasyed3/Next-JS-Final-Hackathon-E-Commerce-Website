import { Key } from "react";

export interface Category {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  imageUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  _id: string;
  rating: number;
  content: string;
  createdAt: string;
  isVerified: boolean;
  customer?: {
    name: string;
    email: string;
  };
}

export interface Dimensions {
  width?: number;
  height?: number;
  depth?: number;
  weight?: number;
}

export interface Feature {
  key: string;
  value: string;
}

export interface Product {
  _id: string;
  id: Key | null | undefined;
  title: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  image: string[];
  sizes: string[];
  category: Category;
  slug: {
    current: string;
  };
  quantity: number;
  dimensions?: Dimensions;
  features?: Feature[];
  productDetails: string[];
  tags?: string[];
}
