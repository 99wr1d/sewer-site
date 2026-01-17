import type { Product, CategorySlug } from '@/types';

export const products: Product[] = [
  {
    id: 'towel-001',
    slug: 'premium-bath-towel',
    sku: 'LY-TWL-001',
    categorySlug: 'towels',
    name: {
      ru: 'Банное полотенце Premium',
      kk: 'Premium ванна сүлгісі',
    },
    shortDescription: {
      ru: 'Мягкое хлопковое полотенце с индивидуальной вышивкой',
      kk: 'Жеке кестелі жұмсақ мақта сүлгі',
    },
    description: {
      ru: 'Роскошное банное полотенце из 100% турецкого хлопка. Плотная махра обеспечивает превосходную впитываемость и мягкость. Идеально подходит для персонализированного подарка с вышивкой имени или инициалов.',
      kk: '100% түрік мақтасынан жасалған сәнді ванна сүлгісі. Тығыз махра тамаша сіңіргіштік пен жұмсақтықты қамтамасыз етеді. Аты немесе инициалдары кестеленген жекелендірілген сыйлық үшін өте қолайлы.',
    },
    images: [
      {
        id: 'img-001',
        src: '/images/products/towels/premium-bath-1.jpg',
        alt: { ru: 'Банное полотенце белое', kk: 'Ақ ванна сүлгісі' },
        width: 800,
        height: 1000,
        isMain: true,
      },
    ],
    sizes: [
      { id: 'size-50x90', label: '50x90 см', available: true },
      { id: 'size-70x140', label: '70x140 см', available: true },
      { id: 'size-100x150', label: '100x150 см', available: true },
    ],
    colors: [
      { id: 'white', name: { ru: 'Белый', kk: 'Ақ' }, hex: '#FFFFFF', available: true },
      { id: 'beige', name: { ru: 'Бежевый', kk: 'Сарғыш' }, hex: '#F5F5DC', available: true },
      { id: 'pink', name: { ru: 'Розовый', kk: 'Қызғылт' }, hex: '#FFB6C1', available: true },
    ],
    embroideryOptions: [
      { type: 'text', maxLength: 20, priceModifier: 2000 },
      { type: 'monogram', maxLength: 3, priceModifier: 1500 },
    ],
    priceRange: { min: 8500, max: 15000, currency: 'KZT' },
    priceVariants: [
      { sizeId: 'size-50x90', price: 8500 },
      { sizeId: 'size-70x140', price: 12000 },
      { sizeId: 'size-100x150', price: 15000 },
    ],
    material: {
      ru: '100% хлопок (Турция)',
      kk: '100% мақта (Түркия)',
    },
    density: '500 г/м²',
    careInstructions: {
      ru: 'Машинная стирка при 40°C, не отбеливать, сушка в расправленном виде',
      kk: '40°C-де машинамен жуу, ағартпаңыз, жайылған күйде кептіру',
    },
    isNew: true,
    isBestseller: false,
    isAvailable: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: 'towel-002',
    slug: 'face-towel-set',
    sku: 'LY-TWL-002',
    categorySlug: 'towels',
    name: {
      ru: 'Набор полотенец для лица',
      kk: 'Бет сүлгілерінің жиынтығы',
    },
    shortDescription: {
      ru: 'Комплект из 3 мягких полотенец для лица',
      kk: '3 жұмсақ бет сүлгісінен тұратын жиынтық',
    },
    description: {
      ru: 'Набор из трёх нежных полотенец для лица из отборного турецкого хлопка. Деликатная текстура бережно заботится о коже. Возможна вышивка инициалов на каждом полотенце.',
      kk: 'Таңдаулы түрік мақтасынан жасалған үш нәзік бет сүлгісінен тұратын жиынтық. Нәзік текстура теріні ұқыпты күтеді. Әр сүлгіге инициалдарды кестелеу мүмкіндігі бар.',
    },
    images: [
      {
        id: 'img-002',
        src: '/images/products/towels/face-set-1.jpg',
        alt: { ru: 'Набор полотенец для лица', kk: 'Бет сүлгілерінің жиынтығы' },
        width: 800,
        height: 1000,
        isMain: true,
      },
    ],
    sizes: [
      { id: 'size-30x50', label: '30x50 см (3 шт)', available: true },
    ],
    colors: [
      { id: 'white', name: { ru: 'Белый', kk: 'Ақ' }, hex: '#FFFFFF', available: true },
      { id: 'cream', name: { ru: 'Кремовый', kk: 'Кремді' }, hex: '#FFFDD0', available: true },
    ],
    embroideryOptions: [
      { type: 'monogram', maxLength: 3, priceModifier: 3000 },
    ],
    priceRange: { min: 6500, max: 6500, currency: 'KZT' },
    priceVariants: [
      { sizeId: 'size-30x50', price: 6500 },
    ],
    material: {
      ru: '100% хлопок (Турция)',
      kk: '100% мақта (Түркия)',
    },
    density: '450 г/м²',
    careInstructions: {
      ru: 'Машинная стирка при 40°C, не отбеливать',
      kk: '40°C-де машинамен жуу, ағартпаңыз',
    },
    isNew: false,
    isBestseller: true,
    isAvailable: true,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
  },
  {
    id: 'robe-001',
    slug: 'classic-bathrobe',
    sku: 'LY-RBE-001',
    categorySlug: 'robes',
    name: {
      ru: 'Классический махровый халат',
      kk: 'Классикалық махра халат',
    },
    shortDescription: {
      ru: 'Уютный халат из мягкой махры с вышивкой',
      kk: 'Кестелі жұмсақ махрадан жасалған жайлы халат',
    },
    description: {
      ru: 'Роскошный махровый халат с шалевым воротником и поясом. Идеален для дома и спа. Возможна персонализация с вышивкой имени на груди или спине.',
      kk: 'Шәлі жаға мен белдікті сәнді махра халат. Үй мен спа үшін тамаша. Кеуде немесе арқада атты кестелеу арқылы жекелендіру мүмкіндігі бар.',
    },
    images: [
      {
        id: 'img-003',
        src: '/images/products/robes/classic-robe-1.jpg',
        alt: { ru: 'Классический махровый халат', kk: 'Классикалық махра халат' },
        width: 800,
        height: 1000,
        isMain: true,
      },
    ],
    sizes: [
      { id: 'size-s', label: 'S', available: true },
      { id: 'size-m', label: 'M', available: true },
      { id: 'size-l', label: 'L', available: true },
      { id: 'size-xl', label: 'XL', available: true },
    ],
    colors: [
      { id: 'white', name: { ru: 'Белый', kk: 'Ақ' }, hex: '#FFFFFF', available: true },
      { id: 'gray', name: { ru: 'Серый', kk: 'Сұр' }, hex: '#808080', available: true },
      { id: 'navy', name: { ru: 'Тёмно-синий', kk: 'Қою көк' }, hex: '#000080', available: true },
    ],
    embroideryOptions: [
      { type: 'text', maxLength: 15, priceModifier: 3000 },
      { type: 'monogram', maxLength: 3, priceModifier: 2500 },
    ],
    priceRange: { min: 25000, max: 32000, currency: 'KZT' },
    priceVariants: [
      { sizeId: 'size-s', price: 25000 },
      { sizeId: 'size-m', price: 27000 },
      { sizeId: 'size-l', price: 29000 },
      { sizeId: 'size-xl', price: 32000 },
    ],
    material: {
      ru: '100% хлопок (Турция)',
      kk: '100% мақта (Түркия)',
    },
    density: '400 г/м²',
    careInstructions: {
      ru: 'Машинная стирка при 40°C, не отбеливать, сушка при низкой температуре',
      kk: '40°C-де машинамен жуу, ағартпаңыз, төмен температурада кептіру',
    },
    isNew: false,
    isBestseller: true,
    isAvailable: true,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
  },
  {
    id: 'robe-002',
    slug: 'kids-bathrobe',
    sku: 'LY-RBE-002',
    categorySlug: 'robes',
    name: {
      ru: 'Детский халат с капюшоном',
      kk: 'Қалпақшалы балалар халаты',
    },
    shortDescription: {
      ru: 'Мягкий детский халат с ушками и вышивкой имени',
      kk: 'Құлақшалары мен аты кестеленген жұмсақ балалар халаты',
    },
    description: {
      ru: 'Очаровательный детский халат с капюшоном и милыми ушками. Супер-мягкая махра безопасна для нежной детской кожи. Идеальный подарок с вышивкой имени ребёнка.',
      kk: 'Қалпақшасы мен сүйкімді құлақшалары бар сүйкімді балалар халаты. Супер-жұмсақ махра нәзік балалар терісі үшін қауіпсіз. Баланың аты кестеленген тамаша сыйлық.',
    },
    images: [
      {
        id: 'img-004',
        src: '/images/products/robes/kids-robe-1.jpg',
        alt: { ru: 'Детский халат с капюшоном', kk: 'Қалпақшалы балалар халаты' },
        width: 800,
        height: 1000,
        isMain: true,
      },
    ],
    sizes: [
      { id: 'size-2-3', label: '2-3 года', available: true },
      { id: 'size-4-5', label: '4-5 лет', available: true },
      { id: 'size-6-7', label: '6-7 лет', available: true },
      { id: 'size-8-10', label: '8-10 лет', available: true },
    ],
    colors: [
      { id: 'pink', name: { ru: 'Розовый', kk: 'Қызғылт' }, hex: '#FFB6C1', available: true },
      { id: 'blue', name: { ru: 'Голубой', kk: 'Көгілдір' }, hex: '#87CEEB', available: true },
      { id: 'white', name: { ru: 'Белый', kk: 'Ақ' }, hex: '#FFFFFF', available: true },
    ],
    embroideryOptions: [
      { type: 'text', maxLength: 12, priceModifier: 2500 },
    ],
    priceRange: { min: 18000, max: 22000, currency: 'KZT' },
    priceVariants: [
      { sizeId: 'size-2-3', price: 18000 },
      { sizeId: 'size-4-5', price: 19000 },
      { sizeId: 'size-6-7', price: 20000 },
      { sizeId: 'size-8-10', price: 22000 },
    ],
    material: {
      ru: '100% хлопок (Турция)',
      kk: '100% мақта (Түркия)',
    },
    density: '350 г/м²',
    careInstructions: {
      ru: 'Машинная стирка при 40°C, не отбеливать',
      kk: '40°C-де машинамен жуу, ағартпаңыз',
    },
    isNew: true,
    isBestseller: false,
    isAvailable: true,
    createdAt: '2024-01-20',
    updatedAt: '2024-01-20',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.categorySlug === category);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return products
    .filter((p) => p.isBestseller || p.isNew)
    .slice(0, limit);
}

export function getAllProducts(): Product[] {
  return products;
}
