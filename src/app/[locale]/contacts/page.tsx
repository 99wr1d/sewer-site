import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.contacts' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ContactsPage() {
  const t = useTranslations('contacts');

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-rose-50">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Свяжитесь с нами
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t('address')}</p>
                    <p className="text-gray-600">{siteConfig.contacts.address.ru}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t('phone')}</p>
                    <a href={`tel:${siteConfig.contacts.phone}`} className="text-gray-600 hover:text-rose-500">
                      {siteConfig.contacts.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t('email')}</p>
                    <a href={`mailto:${siteConfig.contacts.email}`} className="text-gray-600 hover:text-rose-500">
                      {siteConfig.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t('workHours')}</p>
                    <p className="text-gray-600">{siteConfig.contacts.workHours.ru}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Messengers */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {t('social')}
              </h2>

              <div className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white justify-start"
                >
                  <a
                    href={siteConfig.social.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp
                    <span className="ml-auto text-green-200 text-sm">
                      {siteConfig.social.whatsapp.phone}
                    </span>
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white justify-start"
                >
                  <a
                    href={siteConfig.social.telegram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    Telegram
                    <span className="ml-auto text-blue-200 text-sm">
                      {siteConfig.social.telegram.username}
                    </span>
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white justify-start"
                >
                  <a
                    href={siteConfig.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5 mr-3" />
                    Instagram
                    <span className="ml-auto text-pink-200 text-sm">
                      {siteConfig.social.instagram.username}
                    </span>
                  </a>
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center">
                Выберите удобный способ связи — мы ответим в течение нескольких минут!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
