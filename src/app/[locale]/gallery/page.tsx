import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.gallery' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function GalleryPage() {
  const t = useTranslations('gallery');

  const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
    id: `gallery-${i + 1}`,
    color: i % 2 === 0 ? 'bg-rose-100' : 'bg-stone-100',
  }));

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-8">
          <button className="px-4 py-2 rounded-full bg-rose-500 text-white text-sm font-medium">
            {t('all')}
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors">
            {t('towels')}
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors">
            {t('robes')}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeholderImages.map((item, index) => (
            <div
              key={item.id}
              className={`${item.color} rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity`}
              style={{
                aspectRatio: index % 3 === 0 ? '3/4' : '1/1',
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl opacity-50">
                  {index % 2 === 0 ? '🧺' : '🥋'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
