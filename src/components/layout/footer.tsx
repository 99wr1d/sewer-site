'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Instagram, MessageCircle, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-display font-bold text-white">
              Leysan.ya
            </Link>
            <p className="text-sm text-gray-400">
              {t('description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('navigation')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="text-sm hover:text-rose-400 transition-colors">
                  {tNav('catalog')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-rose-400 transition-colors">
                  {tNav('gallery')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-rose-400 transition-colors">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-sm hover:text-rose-400 transition-colors">
                  {tNav('delivery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('contacts')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>{siteConfig.contacts.phone}</li>
              <li>{siteConfig.contacts.email}</li>
              <li>{siteConfig.contacts.address.ru}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('social')}
            </h3>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.social.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          {t('copyright', { year: currentYear })}
        </div>
      </div>
    </footer>
  );
}
