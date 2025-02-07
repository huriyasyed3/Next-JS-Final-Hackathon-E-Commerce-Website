export interface Product{
    id: string
    title: string
    slug: {
      // _type:"slug"
      current: string
    }
    price: number
    originalPrice?: number
    rating: number
    reviews: number
    imageUrl: string
    discount: number
  
  }