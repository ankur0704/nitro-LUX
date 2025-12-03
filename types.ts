export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
}

export enum CategoryType {
  WATCHES = 'Timepieces',
  APPAREL = 'Apparel',
  ACCESSORIES = 'Accessories',
  FRAGRANCE = 'Fragrance',
  AUTOMOTIVE = 'Automotive'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}