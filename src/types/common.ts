import type { LocalizedString, CategorySlug } from './product';

export type MessengerType = 'whatsapp' | 'telegram' | 'instagram';

export interface OrderIntent {
  productId: string;
  productName: string;
  selectedSize?: string;
  selectedColor?: string;
  embroideryText?: string;
  quantity: number;
  messenger: MessengerType;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: LocalizedString;
  width: number;
  height: number;
  category: CategorySlug | 'all';
  tags?: string[];
  featured: boolean;
}

export interface FAQ {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  city?: string;
  text: LocalizedString;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  productSlug?: string;
}

export interface DeliveryZone {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: number | 'free';
  estimatedDays: string;
}

export interface SocialLink {
  platform: MessengerType;
  url: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
