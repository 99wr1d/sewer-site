# CLAUDE.md - Инструкции для Claude Code

## О проекте

**Leysan.ya** — интернет-витрина для бизнеса по персонализации текстиля (полотенца, халаты) в Алматы, Казахстан.

**Технологический стек:**
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4 (PostCSS)
- shadcn/ui + Radix UI
- next-intl (русский и казахский языки)
- Lucide React (иконки)

---

## КРИТИЧЕСКИ ВАЖНЫЕ ПРАВИЛА

### 1. НИКОГДА не угадывай и не предполагай

**ЗАПРЕЩЕНО:**
- Писать код, не изучив существующие паттерны проекта
- Добавлять фичи, не понимая как работают аналогичные части
- Использовать технологии/библиотеки, которых нет в проекте
- Придумывать структуру данных без изучения `src/types/` и `src/data/`

**ОБЯЗАТЕЛЬНО:**
- Перед любой задачей — исследуй релевантные файлы
- Если что-то непонятно — задай уточняющий вопрос
- Если не можешь выполнить задачу качественно — скажи "Я не могу это сделать" и объясни почему

### 2. Исследование перед работой

Перед добавлением любой фичи ОБЯЗАТЕЛЬНО:

```
1. Изучи похожий функционал в проекте
2. Проверь типы в src/types/
3. Посмотри как организованы данные в src/data/
4. Изучи стиль компонентов в src/components/
5. Проверь переводы в messages/ru.json и messages/kk.json
```

### 3. Задавай вопросы

Спрашивай ВСЕГДА, если:
- Неясно где должен располагаться новый код
- Непонятно какой паттерн использовать
- Нужно выбрать между несколькими подходами
- Требуется добавить новые зависимости
- Нужно изменить существующую структуру

---

## Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Локализованные маршруты (ru, kk)
│   │   ├── layout.tsx     # Layout с Header/Footer
│   │   ├── page.tsx       # Главная страница
│   │   ├── about/         # О нас
│   │   ├── catalog/       # Каталог
│   │   │   ├── [category]/ # Категория (towels, robes)
│   │   │   │   └── [slug]/ # Страница товара
│   │   ├── contacts/      # Контакты
│   │   ├── delivery/      # Доставка
│   │   ├── gallery/       # Галерея
│   │   └── faq/           # FAQ
│   └── globals.css        # Глобальные стили
├── components/
│   ├── layout/            # Header, Footer, LanguageSwitcher
│   ├── catalog/           # ProductCard
│   └── ui/                # shadcn/ui компоненты
├── config/
│   └── site.ts            # Конфигурация сайта (контакты, соцсети)
├── data/
│   ├── categories.ts      # Данные категорий
│   └── products.ts        # Данные товаров
├── i18n/                  # Настройки интернационализации
├── lib/
│   └── utils.ts           # Утилита cn()
└── types/
    ├── common.ts          # Общие типы
    └── product.ts         # Типы товаров
messages/
├── ru.json                # Русские переводы
└── kk.json                # Казахские переводы
```

---

## Как изменять контент

### Товары
Файл: `src/data/products.ts`

```typescript
// Добавление товара - следуй структуре Product из src/types/product.ts
{
  id: 'unique-id',
  slug: 'url-slug',
  categorySlug: 'towels' | 'robes',
  name: { ru: 'Название', kk: 'Атауы' },
  description: { ru: '...', kk: '...' },
  // ... остальные поля по типу Product
}
```

### Категории
Файл: `src/data/categories.ts`

### Переводы
Файлы: `messages/ru.json` и `messages/kk.json`
- ВСЕГДА добавляй переводы в ОБА файла
- Используй существующую структуру namespace'ов

### Контакты и соцсети
Файл: `src/config/site.ts`

---

## Стандарты кода

### Компоненты

```typescript
// Client Component (если нужны хуки/интерактивность)
'use client'

import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations('namespace')
  return <div className="...">{t('key')}</div>
}

// Server Component (по умолчанию)
import { getTranslations } from 'next-intl/server'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'namespace' })
  return <div>...</div>
}
```

### Стилизация

```typescript
// Используй cn() для объединения классов
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className // если передаётся пропсом
)} />
```

**Цветовая схема:** розовый/rose как основной цвет бренда
**Шрифты:** Inter (текст), Playfair Display (заголовки)

### Типизация

- ВСЕ данные должны быть типизированы
- Используй существующие типы из `src/types/`
- Билингвальные строки: `LocalizedString = { ru: string; kk: string }`

### Иконки

```typescript
import { IconName } from 'lucide-react'
// Список иконок: https://lucide.dev/icons
```

### UI компоненты

Используй shadcn/ui из `src/components/ui/`
Добавление новых: `npx shadcn@latest add [component-name]`

---

## Интернационализация (i18n)

### В Server Components
```typescript
const t = await getTranslations({ locale, namespace: 'home' })
t('hero.title')
```

### В Client Components
```typescript
const t = useTranslations('catalog')
t('filters.category')
```

### Навигация
```typescript
import { Link } from '@/i18n/navigation'
<Link href="/catalog">...</Link> // автоматически добавит локаль
```

---

## Чек-лист перед коммитом

- [ ] Код соответствует стилю проекта
- [ ] Добавлены переводы в ОБА файла (ru.json, kk.json)
- [ ] Типы определены/используются корректно
- [ ] Компоненты используют cn() для классов
- [ ] Нет хардкода строк (всё через i18n)
- [ ] Изображения через next/image
- [ ] Проверена адаптивность (mobile-first)

---

## Команды

```bash
npm run dev      # Запуск dev-сервера
npm run build    # Сборка продакшена
npm run lint     # Проверка ESLint
```

---

## Что делать если...

**Нужно добавить новую страницу:**
1. Создай `src/app/[locale]/page-name/page.tsx`
2. Добавь переводы в `messages/*.json`
3. Добавь ссылку в навигацию (Header/Footer)

**Нужно добавить новый UI компонент:**
1. Проверь есть ли в shadcn/ui
2. Если есть: `npx shadcn@latest add [name]`
3. Если нет: создай в `src/components/` следуя паттернам проекта

**Нужно добавить новую категорию товаров:**
1. Добавь в `src/data/categories.ts`
2. Добавь товары в `src/data/products.ts`
3. Добавь переводы

**Не понимаю как что-то сделать:**
→ СПРОСИ, не угадывай!
