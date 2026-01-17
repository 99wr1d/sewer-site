'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'ru' | 'kk') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-1 rounded-full bg-gray-100 p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale('ru')}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
          locale === 'ru'
            ? 'bg-white text-rose-500 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        RU
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale('kk')}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
          locale === 'kk'
            ? 'bg-white text-rose-500 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        ҚК
      </Button>
    </div>
  );
}
