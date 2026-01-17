import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.faq' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

const faqItems = [
  {
    question: {
      ru: 'Как сделать заказ?',
      kk: 'Тапсырысты қалай беруге болады?',
    },
    answer: {
      ru: 'Выберите понравившийся товар и свяжитесь с нами через WhatsApp, Telegram или Instagram. Мы обсудим детали заказа, вышивку и способ доставки.',
      kk: 'Ұнаған тауарды таңдаңыз және бізбен WhatsApp, Telegram немесе Instagram арқылы байланысыңыз. Біз тапсырыс мәліметтерін, кестені және жеткізу тәсілін талқылаймыз.',
    },
  },
  {
    question: {
      ru: 'Сколько времени занимает изготовление?',
      kk: 'Дайындауға қанша уақыт кетеді?',
    },
    answer: {
      ru: 'Обычно изготовление занимает 3-5 рабочих дней. Сроки могут увеличиться в праздничный сезон или при больших заказах.',
      kk: 'Әдетте дайындау 3-5 жұмыс күнін алады. Мерекелік маусымда немесе үлкен тапсырыстар кезінде мерзімдер ұзаруы мүмкін.',
    },
  },
  {
    question: {
      ru: 'Можно ли вышить своё изображение или логотип?',
      kk: 'Өз суретімді немесе логотипімді кестелеуге бола ма?',
    },
    answer: {
      ru: 'Да, мы можем вышить логотип, монограмму или текст по вашему желанию. Отправьте нам изображение, и мы оценим возможность реализации.',
      kk: 'Иә, біз сіздің қалауыңыз бойынша логотипті, монограмманы немесе мәтінді кестелей аламыз. Бізге суретті жіберіңіз, біз іске асыру мүмкіндігін бағалаймыз.',
    },
  },
  {
    question: {
      ru: 'Какие способы оплаты вы принимаете?',
      kk: 'Қандай төлем тәсілдерін қабылдайсыздар?',
    },
    answer: {
      ru: 'Мы принимаем оплату через Kaspi перевод и банковские карты (Visa, Mastercard). Предоплата составляет 50% от суммы заказа.',
      kk: 'Біз Kaspi аударымы және банк карталары (Visa, Mastercard) арқылы төлемді қабылдаймыз. Алдын ала төлем тапсырыс сомасының 50% құрайды.',
    },
  },
  {
    question: {
      ru: 'Как ухаживать за изделиями с вышивкой?',
      kk: 'Кестелі бұйымдарды қалай күту керек?',
    },
    answer: {
      ru: 'Рекомендуем машинную стирку при температуре до 40°C, не использовать отбеливатели. Сушить в расправленном виде. Гладить с изнаночной стороны.',
      kk: '40°C-ге дейінгі температурада машинамен жууды ұсынамыз, ағартқыштарды пайдаланбаңыз. Жайылған күйде кептіріңіз. Теріс жағынан үтіктеңіз.',
    },
  },
  {
    question: {
      ru: 'Можно ли вернуть или обменять товар?',
      kk: 'Тауарды қайтаруға немесе ауыстыруға бола ма?',
    },
    answer: {
      ru: 'Поскольку каждое изделие изготавливается индивидуально с вышивкой, возврат не предусмотрен. Однако мы гарантируем качество и готовы исправить любые дефекты.',
      kk: 'Әр бұйым кестемен жеке дайындалатындықтан, қайтару қарастырылмаған. Дегенмен, біз сапаға кепілдік береміз және кез келген ақауларды түзетуге дайынбыз.',
    },
  },
];

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  const localeKey = locale as 'ru' | 'kk';
  const t = useTranslations('faq');

  return (
    <div className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-xl border border-gray-100 px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-rose-500">
                {item.question[localeKey]}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer[localeKey]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center p-8 bg-rose-50 rounded-2xl">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-gray-600 mb-4">
            Свяжитесь с нами — мы с удовольствием поможем!
          </p>
          <a
            href="https://wa.me/77771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
