# TEDxSavskiVenac — Design & Development Guideline

Документ для команды: описывает визуальный язык, принятые решения и структуру проекта.  
Весь публичный контент сайта — **на английском**.

---

## Концепция

**Минималистичный цифровой брутализм** в духе TEDxAmsterdam:

- глубокий чёрный фон без декоративных градиентов в контенте;
- массивная контрастная типографика;
- фирменный красный TEDx как единственный акцент;
- минимум рамок и «мягких» UI-паттернов;
- крупные заголовки, плотная вёрстка, уверенные отступы.

Сайт — одностраничный лендинг (SPA). Цель: быстро донести дату, тему, ценность события и привести к покупке билета или партнёрскому контакту.

**Тема 2026:** Small Shifts, Big Impact  
**Дата и место:** October 10, 2026 · Startit Center, Belgrade  
**Организатор:** IT Connect Belgrade

---

## Принятые решения

| Решение | Почему так |
|--------|------------|
| React + Vite + TypeScript | Быстрая разработка, типизация, простой деплой статики |
| SCSS Modules + UIKit | Стили изолированы по компонентам; общие токены не дублируются |
| Mobile-first | Основной трафик с мобильных; desktop — расширение базовой вёрстки |
| Контент в `constants/` | Тексты и ссылки меняются без правок в JSX |
| Секции только композируют UIKit | Логика страницы отделена от переиспользуемых блоков |
| lucide-react для иконок | Лёгкие stroke-иконки в бруталистском стиле |
| Якорная навигация | Одна страница, плавный скролл к секциям |

---

## Палитра

Все цвета заданы в `src/uikit/styles/_variables.scss`. В компонентах используйте переменные, не хардкодьте hex.

| Токен | Значение | Назначение |
|-------|----------|------------|
| `$color-bg` | `#000000` | Фон страницы |
| `$color-text` | `#FFFFFF` | Основной текст |
| `$color-ted-red` | `#EB0028` | Акцент TEDx: логотип, маркеры, цифры, CTA, hover |
| `$color-muted` | `#888888` | Вторичный текст, подписи |
| `$color-vignette` | `rgba(235, 0, 40, 0.12)` | Едва заметное красное свечение по краям экрана |

**Правила:**
- красный — только для акцентов, не для больших заливок фона (кроме primary-кнопок);
- не добавлять новые цвета без согласования;
- градиенты — только виньетка на `.app-shell`, больше нигде.

---

## Типографика

**Шрифт:** Inter (подключён в `index.html`), fallback: Helvetica Neue, Arial.

| Роль | Настройки |
|------|-----------|
| Заголовки секций | `font-weight: 900`, uppercase, tight line-height — миксин `heading-brutal` |
| Основной текст | `font-weight: 400`, `line-height: 1.6–1.7` |
| Навигация, лейблы | `font-weight: 700`, uppercase, увеличенный letter-spacing |
| Legal / disclaimer | мелкий кегль, `$color-muted` |

Размеры заголовков — fluid через `clamp()`, чтобы крупный бруталистский текст не ломал мобильную вёрстку.

**Логотип в шапке:** `TEDx` — красным, `SavskiVenac` — белым.

---

## Сетка и отступы

| Токен | Значение |
|-------|----------|
| `$container-max-width` | `1200px` |
| `$container-padding-x` | `clamp(1.25rem, 4vw, 2.5rem)` |
| `$section-padding-y` | `clamp(4rem, 12vw, 8rem)` |

**Breakpoints** (mobile-first, расширяем вверх):

| Миксин | Ширина |
|--------|--------|
| `from-sm` | 480px |
| `from-md` | 768px |
| `from-lg` | 1024px |
| `from-xl` | 1280px |

Секции разделены тонкой линией `rgba(white, 0.08)` — единый ритм без тяжёлых карточек.

---

## Интерактив и анимации

- Переходы: `$transition-fast` — `0.2s ease`
- **Primary-кнопка:** красная заливка → при hover инверсия (белый фон, красный текст и рамка)
- **Ghost-кнопка:** прозрачная с белой рамкой → при hover белая заливка
- **NavLink:** подчёркивание красным снизу при hover
- Без сложных анимаций, parallax и декоративных эффектов

---

## Структура страницы

```
Header          — логотип, навигация, Get Tickets
Hero            — главный заголовок, манифест, дата/место, Buy Tickets
About           — тема и описание события
Audience        — аудитория, красные маркеры
Numbers         — цифры в 3 колонки (desktop)
Partnership     — текст + Become a Partner
Footer          — соцсети, email, TEDx disclaimer
```

### Секции и якоря

| Секция | `id` | Файл |
|--------|------|------|
| About | `#about` | `src/components/sections/About/` |
| Audience | `#audience` | `src/components/sections/Audience/` |
| Numbers | `#numbers` | `src/components/sections/Numbers/` |
| Partnership | `#partnership` | `src/components/sections/Partnership/` |
| Contacts | `#contacts` | `src/components/sections/Footer/` |

Навигация: `src/constants/navigation.ts`

---

## Структура файлов

```
src/
├── styles/
│   └── index.scss              # глобальный reset, body, .app-shell, виньетка
├── uikit/
│   ├── styles/
│   │   ├── _variables.scss     # токены: цвета, шрифты, breakpoints
│   │   ├── _mixins.scss        # container, heading-brutal, vignette, hover…
│   │   └── index.scss
│   ├── components/             # переиспользуемые UI-блоки
│   │   ├── Button/
│   │   ├── Container/
│   │   ├── Section/
│   │   ├── SectionTitle/
│   │   ├── Text/
│   │   ├── Highlight/
│   │   ├── Logo/
│   │   ├── NavLink/
│   │   ├── HeaderNav/
│   │   ├── InfoStrip/
│   │   ├── MarkerList/
│   │   ├── StatCard/
│   │   └── SocialLinks/
│   └── index.ts                # публичный API UIKit
├── components/
│   ├── sections/               # секции лендинга (только композиция)
│   └── Seo/                    # meta-теги и JSON-LD в runtime
├── constants/
│   ├── content.ts              # тексты секций
│   ├── links.ts                # URL, email, mailto
│   ├── navigation.ts           # пункты меню
│   └── seo.ts                  # SEO, schema.org, canonical URL
├── App.tsx
└── main.tsx

public/
├── favicon.ico / favicon.svg
├── apple-touch-icon.svg
├── og-image.svg
├── robots.txt
└── sitemap.xml
```

### Где что менять

| Задача | Файл |
|--------|------|
| Тексты секций | `src/constants/content.ts` |
| Ссылки, email, билеты | `src/constants/links.ts` |
| Пункты меню | `src/constants/navigation.ts` |
| SEO, домен, schema | `src/constants/seo.ts` + `index.html` |
| Цвета, отступы, breakpoints | `src/uikit/styles/_variables.scss` |
| Общие паттерны стилей | `src/uikit/styles/_mixins.scss` |
| Вёрстка конкретной секции | `src/components/sections/<Section>/` |
| Новый UI-примитив | `src/uikit/components/` → экспорт в `src/uikit/index.ts` |

**Правило:** если блок может понадобиться в двух местах — выносим в UIKit. Если уникален для одной секции — стили в `Section.module.scss`.

---

## UIKit — краткий справочник

| Компонент | Назначение |
|-----------|------------|
| `Container` | Центрированный контейнер с max-width |
| `Section` | Обёртка секции с вертикальными отступами (`default` / `compact`) |
| `SectionTitle` | Заголовок секции в бруталистском стиле |
| `Text` | Абзац: `default`, `muted`, `caption`, `legal` |
| `Highlight` | Красный inline-акцент в тексте |
| `Button` | `primary` / `ghost`, размеры `sm` / `md` / `lg`, поддержка `as="a"` |
| `Logo` | TEDxSavskiVenac в шапке |
| `NavLink` | Якорная ссылка с hover-эффектом |
| `HeaderNav` | Меню; на `< 1024px` — burger + overlay |
| `InfoStrip` | Дата/место и тема в Hero (иконки MapPin, Target) |
| `MarkerList` | Список с красными квадратными маркерами |
| `StatCard` | Крупная цифра + подпись |
| `SocialLinks` | Instagram + email в футере |

SCSS-переменные и миксины автоматически доступны во всех `.module.scss` через настройку Vite (`vite.config.ts`).

---

## Контент и ссылки

Актуальные значения — в `src/constants/`. Ключевые:

- **Билеты:** `TICKETS_URL` → itconnect.tic.rs
- **Instagram:** `@tedxsavskivenac`
- **Email:** `tedxsavskivenac@gmail.com`
- **Партнёрство:** `PARTNER_MAILTO` с темой письма `TEDxSavskiVenac Partnership`

### Обязательный текст в футере (TEDx license)

> This TEDx event is operated under license from TED. © 2026 TEDxSavskiVenac. All rights reserved.

Не удалять и не перефразировать без согласования с лицензией TEDx.

---

## SEO и метаданные

- Статические meta и JSON-LD — в `index.html` (для краулеров без JS)
- Динамическое обновление — `src/components/Seo/Seo.tsx` + `src/constants/seo.ts`
- Canonical URL: `https://tedxsavskivenac.com` — обновить во всех местах при смене домена
- `public/robots.txt`, `public/sitemap.xml` — для индексации

Schema.org: `Event`, `WebSite`, `Organization`.

---

## Чего избегать

- Новые цвета, скругления, тени, glassmorphism
- Декоративные рамки и карточки «ради красоты»
- Контент не на английском (кроме имён собственных и локаций)
- Дублирование стилей вне UIKit / `_variables.scss`
- Хардкод текстов и URL прямо в компонентах секций
- Изменение TEDx disclaimer в футере

---

## Запуск

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # сборка в dist/
npm run preview  # превью продакшн-сборки
```
