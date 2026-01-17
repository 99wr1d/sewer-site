export type Locale = 'ru' | 'kk';

export interface LocalizedString {
  ru: string;
  kk: string;
}

export type CategorySlug = 'towels' | 'robes';

export interface Category {
  id: string;
  slug: CategorySlug;
  name: LocalizedString;
  description: LocalizedString;
  image: string;
}

export interface ProductSize {
  id: string;
  label: string;
  dimensions?: string;
  available: boolean;
}

export interface ProductColor {
  id: string;
  name: LocalizedString;
  hex: string;
  image?: string;
  available: boolean;
}

export interface EmbroideryOption {
  type: 'text' | 'monogram' | 'logo';
  maxLength?: number;
  priceModifier: number;
}

export interface PriceRange {
  min: number;
  max: number;
  currency: 'KZT';
}

export interface PriceVariant {
  sizeId: string;
  price: number;
  oldPrice?: number;
}

export interface ProductImage {
  id: string;
  src: string;
  alt: LocalizedString;
  width: number;
  height: number;
  isMain: boolean;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  categorySlug: CategorySlug;
  name: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
  images: ProductImage[];
  sizes: ProductSize[];
  colors: ProductColor[];
  embroideryOptions: EmbroideryOption[];
  priceRange: PriceRange;
  priceVariants: PriceVariant[];
  material: LocalizedString;
  density?: string;
  careInstructions: LocalizedString;
  isNew: boolean;
  isBestseller: boolean;
  isAvailable: boolean;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  createdAt: string;
  updatedAt: string;
}

export interface ProductCard {
  id: string;
  slug: string;
  categorySlug: CategorySlug;
  name: LocalizedString;
  mainImage: ProductImage;
  priceRange: PriceRange;
  isNew: boolean;
  isBestseller: boolean;
  isAvailable: boolean;
}
