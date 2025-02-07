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
    [x: string]: SanityImageSource;
    _id: string;
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    description: string;
    image: string[];
    sizes: string[];
    category: Category;
    inventory: number;
    slug: {
      current: string;
    };
    productDetails: string[];
    faqs: FAQ[];
    isNewArrival?: boolean;
    isTopSelling?: boolean;
    tags?: string[];
    createdAt: string;
    reviews: Review[];
  }
  