import { Skeleton } from '../Skeleton';
import styles from './CodePeen.module.css';

function CodePeen() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CodePeen</h1>
      <p className={styles.subtitle}>Here you can configure and test the Skeleton component</p>

      <div className={styles.preview}>
        <Skeleton />
      </div>
    </div>
  );
}

export default CodePeen;
