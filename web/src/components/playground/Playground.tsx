import { useState } from 'react';
import { Skeleton } from '@ice-house-web/simple-skeleton';
import styles from './Playground.module.css';
import CodeBlock from '../code-block/CodeBlock';

type TNumberInput = {
  type: 'number';
  value: string;
  onChange: (value: string) => void;
};

type TTextInput = {
  type: 'text';
  value: string;
  onChange: (value: string) => void;
};

type TCheckboxInput = {
  type: 'checkbox';
  checked: boolean;
  onChange: (value: boolean) => void;
};

type TSelectInput = {
  type: 'select';
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

type TColorInput = {
  type: 'color';
  value: string;
  onChange: (value: string) => void;
};

type TInput = {
  label: string;
  id: string;
  type: 'number' | 'text' | 'checkbox' | 'select' | 'color';
} & (TNumberInput | TTextInput | TCheckboxInput | TSelectInput | TColorInput);

function CodePeen() {
  const [width, setWidth] = useState<string>('300');
  const [height, setHeight] = useState<string>('100');
  const [animation, setAnimation] = useState<string>('wave');
  const [border, setBorder] = useState<string>('0');
  const [isCircle, setIsCircle] = useState<boolean>(false);
  const [animationSpeed, setAnimationSpeed] = useState<string>('2');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [highlightColor, setHighlightColor] = useState<string>('#ececec');
  const [shadowColor, setShadowColor] = useState<string>('#e2eef1');

  const inputConfig: TInput[] = [
    {
      label: 'Width (px):',
      id: 'width',
      type: 'number',
      value: width,
      onChange: setWidth,
    },
    {
      label: 'Height (px):',
      id: 'height',
      type: 'number',
      value: height,
      onChange: setHeight,
    },
    {
      label: 'Animation:',
      id: 'animation',
      type: 'select',
      value: animation,
      options: ['wave', 'pulse'],
      onChange: setAnimation,
    },
    {
      label: 'Border Radius (px):',
      id: 'border',
      type: 'number',
      value: border,
      onChange: setBorder,
    },
    {
      label: 'Circle Shape:',
      id: 'isCircle',
      type: 'checkbox',
      checked: isCircle,
      onChange: setIsCircle,
    },
    {
      label: 'Animation Speed (s):',
      id: 'animationSpeed',
      type: 'number',
      value: animationSpeed,
      onChange: setAnimationSpeed,
    },
    {
      label: 'Background Color:',
      id: 'backgroundColor',
      type: 'color',
      value: backgroundColor,
      onChange: setBackgroundColor,
    },
    {
      label: 'Highlight Color:',
      id: 'highlightColor',
      type: 'color',
      value: highlightColor,
      onChange: setHighlightColor,
    },
    {
      label: 'Shadow Color:',
      id: 'shadowColor',
      type: 'color',
      value: shadowColor,
      onChange: setShadowColor,
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skeleton Playground</h1>

      <div className={styles.flex}>
        <div className={styles.flexItem}>
          <h3>Settings</h3>
          <div className={styles.settings}>
            {inputConfig.map((input) => {
              if (input.type === 'select') {
                return (
                  <>
                    <label className={styles.label} htmlFor={input.id}>
                      {input.label}
                    </label>
                    <select
                      className={styles.input}
                      id={input.id}
                      value={input.value}
                      onChange={(e) => input.onChange(e.target.value)}
                    >
                      {input.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </>
                );
              }

              if (input.type === 'checkbox') {
                return (
                  <>
                    <label className={styles.label} htmlFor={input.id}>
                      {input.label}
                    </label>
                    <input
                      className={styles.input}
                      type="checkbox"
                      checked={input.checked}
                      onChange={(e) => input.onChange(e.target.checked)}
                    />
                  </>
                );
              }
              return (
                <>
                  <label className={styles.label} htmlFor={input.id}>
                    {input.label}
                  </label>
                  <input
                    className={styles.input}
                    id={input.id}
                    type={input.type}
                    value={input.value}
                    onChange={(e) => input.onChange(e.target.value)}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className={styles.flexItem}>
          <h3 className={styles.previewTitle}>Preview</h3>
          <div className={styles.previewContainer}>
            <Skeleton
              width={Number(width)}
              height={Number(height)}
              animation={animation as 'wave' | 'pulse'}
              border={`${border}px`}
              circle={isCircle}
              animationSpeed={Number(animationSpeed)}
              backgroundColor={backgroundColor}
              highlightColor={highlightColor}
              shadowColor={shadowColor}
            />
          </div>

          <div className={styles.codeSection}>
            <h4 className={styles.codeTitle}>Component Code:</h4>
            <CodeBlock
              code={`<Skeleton
  width={${width}}
  height={${height}}
  animation="${animation}"
  border="${border}px"
  circle={${isCircle}}
  animationSpeed={${animationSpeed}}
  backgroundColor="${backgroundColor}"
  highlightColor="${highlightColor}"
  shadowColor="${shadowColor}"
/>`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodePeen;
