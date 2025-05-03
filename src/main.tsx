import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CodePeen from './component/code-peen/CodePeen.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CodePeen />
  </StrictMode>,
);
