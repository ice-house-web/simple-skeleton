import { Skeleton } from 'simple-skeleton';
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
        </div>
        <p className={styles.subtitle}>Легкая и гибкая библиотека для создания skeleton-загрузчиков</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Установка</h2>
          <CodeBlock code="npm install @ice/simple-skeleton" language="bash" />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Базовое использование</h2>
          <div className={styles.example}>
            <h3>Wave анимация (по умолчанию)</h3>
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
          <h2 className={styles.sectionTitle}>Типы анимации</h2>

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
          <h2 className={styles.sectionTitle}>Кастомизация</h2>

          <div className={styles.example}>
            <h3 className={styles.exampleTitle}>Размеры и скругление</h3>
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
            <h3 className={styles.exampleTitle}>Скорость анимации</h3>
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
          <h2 className={styles.sectionTitle}>CSS переменные</h2>
          <p>Вы можете кастомизировать внешний вид скелетона с помощью CSS переменных:</p>
          <CodeBlock
            code={`--simple-skeleton-bg: #fff;        /* Цвет фона */
--simple-skeleton-shadow: #e2eef1; /* Цвет тени */
--simple-skeleton-highlight: #ececec; /* Цвет подсветки для wave анимации */
--simple-skeleton-animation-speed: 2s; /* Скорость анимации */`}
            language="css"
          />
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>API</h2>
          <table className={styles.apiTable}>
            <thead>
              <tr>
                <th>Свойство</th>
                <th>Тип</th>
                <th>По умолчанию</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>''</td>
                <td>Дополнительный CSS класс</td>
              </tr>
              <tr>
                <td>height</td>
                <td>string | number</td>
                <td>'100px'</td>
                <td>Высота скелетона</td>
              </tr>
              <tr>
                <td>width</td>
                <td>string | number</td>
                <td>'100%'</td>
                <td>Ширина скелетона</td>
              </tr>
              <tr>
                <td>border</td>
                <td>string</td>
                <td>undefined</td>
                <td>Радиус скругления углов</td>
              </tr>
              <tr>
                <td>circle</td>
                <td>boolean</td>
                <td>false</td>
                <td>Отображение в виде круга</td>
              </tr>
              <tr>
                <td>animation</td>
                <td>'pulse' | 'wave'</td>
                <td>'wave'</td>
                <td>Тип анимации</td>
              </tr>
              <tr>
                <td>animationSpeed</td>
                <td>number</td>
                <td>2</td>
                <td>Скорость анимации в секундах</td>
              </tr>
              <tr>
                <td>backgroundColor</td>
                <td>string</td>
                <td>#ffffff</td>
                <td>Цвет фона скелетона</td>
              </tr>
              <tr>
                <td>highlightColor</td>
                <td>string</td>
                <td>#ececec</td>
                <td>Цвет подсветки для анимации wave</td>
              </tr>
              <tr>
                <td>shadowColor</td>
                <td>string</td>
                <td>#e2eef1</td>
                <td>Цвет тени скелетона</td>
              </tr>
            </tbody>
          </table>
        </section>

        <CodePeen />
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️ by ICE team</p>
      </footer>
    </div>
  );
}

export default App;
