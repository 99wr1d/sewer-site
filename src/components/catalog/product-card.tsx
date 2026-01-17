'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Product, Locale } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations('product');
  const tCommon = useTranslations('common');

  const mainImage = product.images.find((img) => img.isMain) || product.images[0];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <Link href={`/catalog/${product.categorySlug}/${product.slug}`}>
      <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
          {mainImage ? (
            <Image
              src={mainImage.src}
              alt={mainImage.alt[locale]}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-rose-50">
              <span className="text-rose-300 text-4xl">🧺</span>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
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

          {!product.isAvailable && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <span className="text-gray-500 font-medium">{t('outOfStock')}</span>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 group-hover:text-rose-500 transition-colors">
            {product.name[locale]}
          </h3>
          <p className="text-sm text-gray-500 mb-2 line-clamp-1">
            {product.shortDescription[locale]}
          </p>
          <p className="text-lg font-semibold text-gray-900">
            {tCommon('from')} {formatPrice(product.priceRange.min)} {tCommon('currency')}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
