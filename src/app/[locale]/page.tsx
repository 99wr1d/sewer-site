import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-rose-400 hover:bg-rose-500 text-white">
              <Link href="/catalog">{t('hero.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t('features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(['quality', 'embroidery', 'delivery', 'gift'] as const).map((feature) => (
              <div
                key={feature}
                className="text-center p-6 rounded-2xl bg-rose-50/50 hover:bg-rose-50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-100 flex items-center justify-center">
                  <span className="text-2xl">
                    {feature === 'quality' && '✨'}
                    {feature === 'embroidery' && '🪡'}
                    {feature === 'delivery' && '📦'}
                    {feature === 'gift' && '🎁'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`features.${feature}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`features.${feature}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-12">
            {t('categories.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/catalog/towels"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-rose-100"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-display font-bold">{tNav('towels')}</h3>
              </div>
            </Link>
            <Link
              href="/catalog/robes"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-stone-200"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-display font-bold">{tNav('robes')}</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-rose-400 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-rose-100">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-rose-500 hover:bg-rose-50"
            >
              <a href="https://wa.me/77771234567" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-rose-500 hover:bg-rose-50"
            >
              <a href="https://t.me/leysanya" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-rose-500 hover:bg-rose-50"
            >
              <a href="https://instagram.com/leysan.ya" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
