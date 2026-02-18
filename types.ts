
export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  material: string;
  image: string;
  altImage?: string;
  category: 'Rings' | 'Necklaces' | 'Bracelets' | 'Earrings' | 'Watches' | 'Chains' | 'Kada' | 'Bangles' | 'Payal' | 'Other';
  isNew?: boolean;
  isSold?: boolean;
  rating?: number;
  reviewsCount?: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Delivered' | 'Shipped' | 'Pending' | 'Cancelled';
  total: number;
  items: {
    productId: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
}

export interface WishlistItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
}
