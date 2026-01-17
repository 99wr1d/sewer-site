export const siteConfig = {
  name: 'Leysan.ya',
  domain: 'leysan-ya.kz',
  url: 'https://leysan-ya.kz',

  locales: ['ru', 'kk'] as const,
  defaultLocale: 'ru' as const,

  contacts: {
    phone: '+7 (777) 123-45-67',
    email: 'info@leysan-ya.kz',
    address: {
      ru: 'г. Алматы',
      kk: 'Алматы қ.',
    },
    workHours: {
      ru: 'Пн-Сб: 10:00 - 19:00',
      kk: 'Дс-Сб: 10:00 - 19:00',
    },
  },

  social: {
    whatsapp: {
      url: 'https://wa.me/77771234567',
      phone: '+77771234567',
    },
    telegram: {
      url: 'https://t.me/leysanya',
      username: '@leysanya',
    },
    instagram: {
      url: 'https://instagram.com/leysan.ya',
      username: '@leysan.ya',
    },
  },

  seo: {
    titleTemplate: '%s | Leysan.ya',
    defaultTitle: 'Leysan.ya — Полотенца и халаты с вышивкой',
    keywords: [
      'полотенца с вышивкой',
      'халаты на заказ',
      'вышивка Алматы',
      'персонализированные подарки',
      'сүлгілер',
      'халаттар',
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
