import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Truck, MapPin, CreditCard, Banknote } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.delivery' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function DeliveryPage() {
  const t = useTranslations('delivery');

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
        </div>

        {/* Delivery Zones */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Truck className="w-7 h-7 text-rose-500" />
            Зоны доставки
          </h2>

          <div className="space-y-4">
            {/* Almaty */}
            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-100">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {t('zones.almaty.title')}
                  </h3>
                  <p className="text-gray-600 mb-2">{t('zones.almaty.description')}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Бесплатно при заказе от 20 000 ₸</li>
                    <li>• Стоимость: 1 500 ₸</li>
                    <li>• Срок: 1-2 дня</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kazakhstan */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-stone-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {t('zones.kazakhstan.title')}
                  </h3>
                  <p className="text-gray-600 mb-2">{t('zones.kazakhstan.description')}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Казпочта: от 1 000 ₸</li>
                    <li>• СДЭК: от 2 000 ₸</li>
                    <li>• Срок: 3-7 дней</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Russia */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {t('zones.russia.title')}
                  </h3>
                  <p className="text-gray-600 mb-2">{t('zones.russia.description')}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• СДЭК: от 3 000 ₸</li>
                    <li>• Почта России: от 2 500 ₸</li>
                    <li>• Срок: 7-14 дней</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 flex items-center gap-3">
            <CreditCard className="w-7 h-7 text-rose-500" />
            {t('payment.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-xl">💳</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('payment.kaspi')}</h3>
                  <p className="text-sm text-gray-500">Быстрый и удобный перевод</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t('payment.card')}</h3>
                  <p className="text-sm text-gray-500">Visa, Mastercard</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
