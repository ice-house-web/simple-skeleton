import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';
import './prism-coldact-dark.css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';

import styles from './CodeBlock.module.css';
import { useEffect } from 'react';

const CodeBlock = ({ code, language = 'tsx' }: { code: string; language?: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const html = Prism.highlight(code, Prism.languages[language], language);
  return (
    <pre className={styles.codeBlock}>
      <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
};

export default CodeBlock;
