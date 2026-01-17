import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cat-towels',
    slug: 'towels',
    name: {
      ru: 'Полотенца',
      kk: 'Сүлгілер',
    },
    description: {
      ru: 'Мягкие полотенца из натурального хлопка с индивидуальной вышивкой',
      kk: 'Жеке кестелі табиғи мақтадан жасалған жұмсақ сүлгілер',
    },
    image: '/images/categories/towels.jpg',
  },
  {
    id: 'cat-robes',
    slug: 'robes',
    name: {
      ru: 'Халаты',
      kk: 'Халаттар',
    },
    description: {
      ru: 'Уютные халаты для дома с персонализированной вышивкой',
      kk: 'Жекелендірілген кестелі үй үшін жайлы халаттар',
    },
    image: '/images/categories/robes.jpg',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
