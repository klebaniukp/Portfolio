import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function LinkedIn(size) {
  return (
    <div className={`${styles.link} ml-1`}>
      <Link passHref href='https://www.linkedin.com/in/piotr-klebaniuk-188548222/'>
        <a target='blank'>
          {size === 'small' ? (
            <Image src={'/images/linkedin.svg'} alt='linkedin logo' width='30' height='30' />
          ) : (
            <Image src={'/images/linkedin.svg'} alt='linkedin logo' width='50' height='50' />
          )}
        </a>
      </Link>
    </div>
  );
}
