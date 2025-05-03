<div style="display: flex; align-items: center; gap: 16px;">
  <img src="web/public/simple-skeleton.svg" alt="Simple Skeleton Logo" width="60" height="60"/>
  <h1 style="margin: 0; font-size: 3rem; background: linear-gradient(45deg, #007cf0, #00dfd8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Simple Skeleton</h1>
</div>

#### Lightweight and flexible React component library for creating skeleton loaders.

## Installation

```bash
npm install @ice-house-web/simple-skeleton
# or
yarn add @ice-house-web/simple-skeleton
```

## Usage

### Basic Usage

```tsx
import { Skeleton } from '@ice-house-web/simple-skeleton';

function MyComponent() {
  return (
    <div>
      <Skeleton width={200} height={20} />
      <Skeleton width="100%" height={40} />
    </div>
  );
}
```

### Creating a Product Card

```tsx
import { Skeleton } from '@ice-house-web/simple-skeleton';

function ProductCardSkeleton() {
  return (
    <div style={{ padding: '16px', borderRadius: '8px', border: '1px solid #eee' }}>
      {/* Product image */}
      <Skeleton width="100%" height={200} />

      {/* Product name */}
      <Skeleton width={150} height={24} style={{ marginTop: '12px' }} />

      {/* Description */}
      <Skeleton width="100%" height={16} style={{ marginTop: '8px' }} />
      <Skeleton width="80%" height={16} style={{ marginTop: '8px' }} />

      {/* Price */}
      <Skeleton width={80} height={24} style={{ marginTop: '16px' }} />
    </div>
  );
}
```

## API

### Skeleton

| Property        | Type              | Default   | Description                    |
| --------------- | ----------------- | --------- | ------------------------------ |
| className       | string            | ''        | Additional CSS class           |
| width           | string \| number  | '100%'    | Skeleton width                 |
| height          | string \| number  | '100px'   | Skeleton height                |
| border          | string            | undefined | Border radius                  |
| circle          | boolean           | false     | Display as circle              |
| animation       | 'pulse' \| 'wave' | 'wave'    | Animation type                 |
| animationSpeed  | number            | 2         | Animation speed in seconds     |
| backgroundColor | string            | '#ffffff' | Skeleton background color      |
| highlightColor  | string            | '#ececec' | Wave animation highlight color |
| shadowColor     | string            | '#e2eef1' | Skeleton shadow color          |

## Global Configuration

The library supports theming through CSS variables:

```css
:root {
  --simple-skeleton-bg: #fff; /* Background color */
  --simple-skeleton-shadow: #e2eef1; /* Shadow color */
  --simple-skeleton-highlight: #ececec; /* Wave animation highlight color */
  --simple-skeleton-animation-speed: 2s; /* Animation speed */
}
```

## License

MIT
