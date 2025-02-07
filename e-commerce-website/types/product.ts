import { Key } from "react";

export interface Category {
    toLowerCase: any;
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
  
  export interface Product {
    imageUrl: string;
    id: Key | null | undefined;
    name: string;
    dimensions: any;
    quantity: number;
    features: any;
    // [x:string]: SanityImageSource;
    SanityImageSource:
    | string
    // | SanityReference
    // | SanityImageAsset
    // | SanityAssetIdStub
    // | SanityAssetUrlStub
    // | SanityAssetPathStub
    // | SanityImageObjectStub
    _id: string;
    title: string;
    price: number;
    // originalPrice?: number;
    // rating: number;
    description: string;
    image: string[];
    sizes: string[];
    category: Category;
    // inventory: number;
    slug: {
      current: string;
    };
    productDetails: string[];
    tags?: string[];
    
  }
  


