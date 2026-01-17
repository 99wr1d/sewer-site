import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ProductCard } from '@/components/catalog';
import { getAllProducts } from '@/data/products';
import { categories } from '@/data/categories';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.catalog' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function CatalogPage() {
  const t = useTranslations('catalog');
  const tNav = useTranslations('nav');
  const products = getAllProducts();

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/catalog"
              className="px-4 py-2 rounded-full bg-rose-500 text-white text-sm font-medium"
            >
              {t('allProducts')}
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/catalog/${category.slug}`}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
              >
                {tNav(category.slug)}
              </Link>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('empty')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
