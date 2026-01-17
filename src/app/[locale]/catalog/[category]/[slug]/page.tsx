import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductBySlug, getAllProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Send, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ locale: string; category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Not Found' };
  }

  const localeKey = locale as 'ru' | 'kk';

  return {
    title: product.metaTitle?.[localeKey] || product.name[localeKey],
    description: product.metaDescription?.[localeKey] || product.shortDescription[localeKey],
  };
}

export function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  const localeKey = locale as 'ru' | 'kk';

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const t = useTranslations('product');
  const tCommon = useTranslations('common');
  const tOrder = useTranslations('order');

  const mainImage = product.images.find((img) => img.isMain) || product.images[0];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const createOrderMessage = () => {
    const message = `Здравствуйте! Хочу заказать:\n\n${product.name[localeKey]}\nАртикул: ${product.sku}`;
    return encodeURIComponent(message);
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden">
              {mainImage ? (
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt[localeKey]}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-rose-50">
                  <span className="text-rose-300 text-6xl">🧺</span>
                </div>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-rose-500 hover:bg-rose-500 text-white">
                    {t('new')}
                  </Badge>
                )}
                {product.isBestseller && (
                  <Badge className="bg-amber-500 hover:bg-amber-500 text-white">
                    {t('bestseller')}
                  </Badge>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image) => (
                  <div
                    key={image.id}
                    className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt[localeKey]}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">Артикул: {product.sku}</p>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                {product.name[localeKey]}
              </h1>
              <p className="text-gray-600">{product.shortDescription[localeKey]}</p>
            </div>

            {/* Price */}
            <div className="py-4 border-y">
              <p className="text-3xl font-bold text-gray-900">
                {tCommon('from')} {formatPrice(product.priceRange.min)} {tCommon('currency')}
              </p>
              {product.priceRange.min !== product.priceRange.max && (
                <p className="text-sm text-gray-500 mt-1">
                  до {formatPrice(product.priceRange.max)} {tCommon('currency')}
                </p>
              )}
            </div>

            {/* Sizes */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-3">{t('size')}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.id}
                      disabled={!size.available}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        size.available
                          ? 'border-gray-200 hover:border-rose-500 hover:text-rose-500'
                          : 'border-gray-100 text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-3">{t('color')}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      disabled={!color.available}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        color.available
                          ? 'hover:scale-110 border-transparent hover:border-rose-500'
                          : 'opacity-50 cursor-not-allowed'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name[localeKey]}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Order buttons */}
            <div className="space-y-4 pt-4">
              <h3 className="font-medium text-gray-900">{t('orderVia')}</h3>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <a
                    href={`${siteConfig.social.whatsapp.url}?text=${createOrderMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {tOrder('whatsapp')}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <a
                    href={siteConfig.social.telegram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {tOrder('telegram')}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  <a
                    href={siteConfig.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    {tOrder('instagram')}
                  </a>
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="pt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">{t('tabs.description')}</TabsTrigger>
                <TabsTrigger value="care">{t('tabs.care')}</TabsTrigger>
                <TabsTrigger value="delivery">{t('tabs.delivery')}</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <div className="prose prose-sm max-w-none text-gray-600">
                  <p>{product.description[localeKey]}</p>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <strong>{t('material')}:</strong> {product.material[localeKey]}
                    </li>
                    {product.density && (
                      <li>
                        <strong>{t('density')}:</strong> {product.density}
                      </li>
                    )}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="care" className="mt-4">
                <p className="text-gray-600">{product.careInstructions[localeKey]}</p>
              </TabsContent>
              <TabsContent value="delivery" className="mt-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Алматы — курьерская доставка</li>
                  <li>• Казахстан — Казпочта, СДЭК</li>
                  <li>• Россия — СДЭК, Почта России</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
