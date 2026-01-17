import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.about' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function AboutPage() {
  const t = useTranslations('about');
  const tFeatures = useTranslations('home.features');

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
        </div>

        {/* History */}
        <section className="mb-16">
          <div className="bg-rose-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              {t('history.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('history.text')}
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Мы специализируемся на создании уникальных полотенец и халатов из натурального турецкого хлопка.
              Каждое изделие украшается индивидуальной вышивкой — будь то имя, инициалы или особый дизайн.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Наша мастерская находится в Алматы, но мы доставляем заказы по всему Казахстану и России.
              Мы гордимся тем, что наши изделия становятся особенными подарками для близких людей.
            </p>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(['quality', 'embroidery', 'delivery', 'gift'] as const).map((feature) => (
              <div
                key={feature}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-rose-100 flex items-center justify-center">
                  <span className="text-xl">
                    {feature === 'quality' && '✨'}
                    {feature === 'embroidery' && '🪡'}
                    {feature === 'delivery' && '📦'}
                    {feature === 'gift' && '🎁'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tFeatures(`${feature}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tFeatures(`${feature}.description`)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
