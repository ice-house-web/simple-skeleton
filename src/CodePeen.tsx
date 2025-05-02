import { Skeleton } from './component/Skeleton';
import styles from './CodePeen.module.css';

function CodePeen() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CodePeen</h1>
      <p className={styles.subtitle}>Здесь вы можете настроить и протестировать компонент Skeleton</p>

      <div className={styles.preview}>
        <Skeleton />
      </div>
    </div>
  );
}

export default CodePeen;
