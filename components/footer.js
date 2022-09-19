import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>klebaniukp@gmail.com</p>
      <p>klebaniukp</p>

      <div className={styles.flex}>
        <div className={styles.link}>
          <Link passHref href='https://www.linkedin.com/in/piotr-klebaniuk-188548222/'>
            <a target='blank'>
              <Image src={'/images/linkedin.svg'} alt='linkedin logo' width='30' height='30' />
            </a>
          </Link>
        </div>

        <div className={styles.link}>
          <Link passHref href='https://github.com/klebaniukp'>
            <a target='blank'>
              <Image src={'/images/github.svg'} alt='github logo' width='30' height='30' />
            </a>
          </Link>
        </div>

        <div className={styles.link}>
          <Link passHref href='https://twitter.com/PKlebaniuk'>
            <a target='blank'>
              <Image src={'/images/twitter.svg'} alt='twitter logo' width='30' height='30' />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
