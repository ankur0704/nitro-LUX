import { CategoryType, Product } from './types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=2542&auto=format&fit=crop"; 
// Dark luxury texture or starry night

export const CATEGORIES = [
  {
    id: CategoryType.WATCHES,
    title: "Timepieces",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop",
    description: "Swiss engineering meets eternal elegance."
  },
  {
    id: CategoryType.APPAREL,
    title: "Apparel",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    description: "Sartorial perfection for the modern elite."
  },
  {
    id: CategoryType.FRAGRANCE,
    title: "Fragrance",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=2506&auto=format&fit=crop",
    description: "Scents that define presence."
  },
  {
    id: CategoryType.ACCESSORIES,
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    description: "The finishing touch of mastery."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'w1',
    name: 'NITRO Chronograph Obsidian',
    category: CategoryType.WATCHES,
    price: 45000,
    description: 'Black titanium case with gold accents. Automatic movement.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'a1',
    name: 'Midnight Silk Tuxedo',
    category: CategoryType.APPAREL,
    price: 3200,
    description: 'Hand-stitched Italian silk. Tailored for command.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'f1',
    name: 'Essence No. 5 Gold',
    category: CategoryType.FRAGRANCE,
    price: 450,
    description: 'Oud, amber, and rare spices in a crystal vessel.',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop',
    featured: false
  },
  {
    id: 'ac1',
    name: 'Dragon Leather Weekender',
    category: CategoryType.ACCESSORIES,
    price: 5500,
    description: 'Rare exotic leather with rhodium hardware.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop',
    featured: false
  }
];