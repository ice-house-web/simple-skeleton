import { Skeleton } from '@ice-house-web/simple-skeleton';
import styles from './App.module.css';
import './index.css';

import CodePeen from './components/playground/Playground';
import CodeBlock from './components/code-block/CodeBlock';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
          <svg width="80" height="80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="rounded-rect">
                <rect x="10" y="10" width="100" height="100" rx="20" />
              </clipPath>
            </defs>

            <rect x="10" y="10" width="100" height="100" rx="20" fill="#ffffff" stroke="#007cf0" stroke-width="4" />

            <g clip-path="url(#rounded-rect)">
              <rect x="10" y="10" width="20" height="100" fill="#007cf0" opacity="0.4">
                <animate attributeName="x" values="-20;110" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
              </rect>
            </g>

            <text
              x="60"
              y="67"
              font-family="Arial, sans-serif"
              font-size="80"
              font-weight="bold"
              fill="#007cf0"
              text-anchor="middle"
              dominant-baseline="middle"
            >
              S
            </text>
          </svg>
          <h1 className={styles.title}>Simple Skeleton</h1>
          <a
            href="https://github.com/ice-house-web/simple-skeleton"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#000', marginLeft: '10px' }}
          >
            <svg height="32" viewBox="0 0 16 16" width="32">
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </div>
        <p className={styles.subtitle}>A lightweight and flexible library for creating skeleton loaders</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Installation</h2>
          <CodeBlock code="npm install @ice-house-web/simple-skeleton" language="bash" />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.example}>
            <h3>Wave animation (default)</h3>
            <div className={styles.demo}>
              <div style={{ width: '300px', height: '100px' }}>
                <Skeleton />
              </div>
            </div>
            <CodeBlock
              code={`<div style={{ width: '300px', height: '100px' }}>
  <Skeleton />
</div>`}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Animation Types</h2>

          <div className={styles.example}>
            <h3 className={styles.exampleTitle}>Wave</h3>
            <div className={styles.demo}>
              <div style={{ width: '300px', height: '100px' }}>
                <Skeleton animation="wave" />
              </div>
            </div>
            <CodeBlock
              code={`<div style={{ width: '300px', height: '100px' }}>
  <Skeleton animation="wave" />
</div>`}
            />
          </div>

          <div className={styles.example}>
            <h3 className={styles.exampleTitle}>Pulse</h3>
            <div className={styles.demo}>
              <div style={{ width: '300px', height: '100px' }}>
                <Skeleton animation="pulse" />
              </div>
            </div>
            <CodeBlock
              code={`
<div style={{ width: '300px', height: '100px' }}>
  <Skeleton animation="pulse" />
</div>`}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Customization</h2>

          <div className={styles.example}>
            <h3 className={styles.exampleTitle}>Sizes and Border Radius</h3>
            <div className={styles.demo}>
              <Skeleton border="10px" height={30} width={300} />
              <Skeleton border="30px" height={50} width={300} />
              <Skeleton border="10px" height={50} width={300} backgroundColor="#e2eef1" highlightColor="#ececec" />
              <Skeleton border="10px" height={50} width={50} circle />
              <Skeleton border="10px" height={50} width={300} animation="pulse" backgroundColor="blue" />
            </div>
            <CodeBlock
              code={`<Skeleton border="10px" height={30} width={300} />
<Skeleton border="30px" height={50} width={300} />
<Skeleton border="10px" height={50} width={300} backgroundColor="#e2eef1" highlightColor="#ececec"  />
<Skeleton border="10px" height={50} width={50} circle />
<Skeleton border="10px" height={50} width={300} animation="pulse" backgroundColor="blue" />
`}
            />
          </div>

          <div className={styles.example}>
            <h3 className={styles.exampleTitle}>Animation Speed</h3>
            <div className={styles.demo}>
              <Skeleton animationSpeed={1} height={100} width={300} />
              <Skeleton animationSpeed={2} height={100} width={300} />
              <Skeleton animationSpeed={4} height={100} width={300} />
            </div>
            <CodeBlock
              code={`<Skeleton animationSpeed={1} height={100} width={300} />
<Skeleton animationSpeed={2} height={100} width={300} />
<Skeleton animationSpeed={4} height={100} width={300} />
`}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>CSS Variables</h2>
          <p>You can customize the skeleton appearance using CSS variables:</p>
          <CodeBlock
            code={`--simple-skeleton-bg: #fff;        /* Background color */
--simple-skeleton-shadow: #e2eef1; /* Shadow color */
--simple-skeleton-highlight: #ececec; /* Highlight color for wave animation */
--simple-skeleton-animation-speed: 2s; /* Animation speed */`}
            language="css"
          />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>API</h2>
          <table className={styles.apiTable}>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>''</td>
                <td>Additional CSS class</td>
              </tr>
              <tr>
                <td>height</td>
                <td>string | number</td>
                <td>'100px'</td>
                <td>Skeleton height</td>
              </tr>
              <tr>
                <td>width</td>
                <td>string | number</td>
                <td>'100%'</td>
                <td>Skeleton width</td>
              </tr>
              <tr>
                <td>border</td>
                <td>string</td>
                <td>undefined</td>
                <td>Border radius</td>
              </tr>
              <tr>
                <td>circle</td>
                <td>boolean</td>
                <td>false</td>
                <td>Display as circle</td>
              </tr>
              <tr>
                <td>animation</td>
                <td>'pulse' | 'wave'</td>
                <td>'wave'</td>
                <td>Animation type</td>
              </tr>
              <tr>
                <td>animationSpeed</td>
                <td>number</td>
                <td>2</td>
                <td>Animation speed in seconds</td>
              </tr>
              <tr>
                <td>backgroundColor</td>
                <td>string</td>
                <td>#ffffff</td>
                <td>Skeleton background color</td>
              </tr>
              <tr>
                <td>highlightColor</td>
                <td>string</td>
                <td>#ececec</td>
                <td>Highlight color for wave animation</td>
              </tr>
              <tr>
                <td>shadowColor</td>
                <td>string</td>
                <td>#e2eef1</td>
                <td>Skeleton shadow color</td>
              </tr>
            </tbody>
          </table>
        </section>

        <CodePeen />
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️ by Ice-House-Web team</p>
      </footer>
    </div>
  );
}

export default App;
