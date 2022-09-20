import Twitter from './twitter';
import LinkedIn from './linkedin';
import GitHub from './github';
import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} col-start-2 col-end-6 row-start-6 row-end-6 `}>
      <p className='mb-3'>klebaniukp@gmail.com</p>
      <p className='mb-3'>klebaniukp</p>

      <div className={styles.flex}>
        <LinkedIn />
        <GitHub />
        <Twitter />
      </div>
    </footer>
  );
}
