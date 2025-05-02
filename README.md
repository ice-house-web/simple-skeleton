# Simple Skeleton Component Library

Легкая и гибкая библиотека React-компонентов для создания skeleton-загрузчиков.

## Установка

```bash
npm install @ice-house-web/simple-skeleton
# или
yarn add @ice-house-web/simple-skeleton
```

## Примеры использования

### Базовое использование

```tsx
import { Skeleton } from '@ice/simple-skeleton';

function MyComponent() {
  return (
    <div>
      <Skeleton width={200} height={20} />
      <Skeleton width="100%" height={40} />
    </div>
  );
}
```

### Создание карточки товара

```tsx
import { Skeleton } from '@ice/simple-skeleton';

function ProductCardSkeleton() {
  return (
    <div style={{ padding: '16px', borderRadius: '8px', border: '1px solid #eee' }}>
      {/* Изображение товара */}
      <Skeleton width="100%" height={200} />

      {/* Название товара */}
      <Skeleton width={150} height={24} style={{ marginTop: '12px' }} />

      {/* Описание */}
      <Skeleton width="100%" height={16} style={{ marginTop: '8px' }} />
      <Skeleton width="80%" height={16} style={{ marginTop: '8px' }} />

      {/* Цена */}
      <Skeleton width={80} height={24} style={{ marginTop: '16px' }} />
    </div>
  );
}
```

## API

### Skeleton

| Свойство        | Тип               | По умолчанию | Описание                         |
| --------------- | ----------------- | ------------ | -------------------------------- |
| className       | string            | ''           | Дополнительный CSS класс         |
| width           | string \| number  | '100%'       | Ширина скелетона                 |
| height          | string \| number  | '100px'      | Высота скелетона                 |
| border          | string            | undefined    | Радиус скругления углов          |
| circle          | boolean           | false        | Отображение в виде круга         |
| animation       | 'pulse' \| 'wave' | 'wave'       | Тип анимации                     |
| animationSpeed  | number            | 2            | Скорость анимации в секундах     |
| backgroundColor | string            | '#ffffff'    | Цвет фона скелетона              |
| highlightColor  | string            | '#ececec'    | Цвет подсветки для анимации wave |
| shadowColor     | string            | '#e2eef1'    | Цвет тени скелетона              |

## Глобальная настройка

Библиотека поддерживает темизацию через CSS-переменные:

```css
:root {
  --simple-skeleton-bg: #fff; /* Цвет фона */
  --simple-skeleton-shadow: #e2eef1; /* Цвет тени */
  --simple-skeleton-highlight: #ececec; /* Цвет подсветки для wave анимации */
  --simple-skeleton-animation-speed: 2s; /* Скорость анимации */
}
```

## Лицензия

MIT
