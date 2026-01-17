import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/catalog';
import { getProductsByCategory } from '@/data/products';
import { getCategoryBySlug, categories } from '@/data/categories';
import { Link } from '@/i18n/navigation';
import type { CategorySlug } from '@/types';

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return { title: 'Not Found' };
  }

  const t = await getTranslations({ locale, namespace: 'meta.catalog' });

  return {
    title: `${categoryData.name[locale as 'ru' | 'kk']} | ${t('title')}`,
    description: categoryData.description[locale as 'ru' | 'kk'],
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const t = useTranslations('catalog');
  const tNav = useTranslations('nav');

  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  const products = getProductsByCategory(category as CategorySlug);

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {tNav(categoryData.slug)}
          </h1>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/catalog"
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
            >
              {t('allProducts')}
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/catalog/${cat.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat.slug === category
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {tNav(cat.slug)}
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
