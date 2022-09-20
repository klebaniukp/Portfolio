import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Twitter(size) {
  return (
    <div className={`${styles.link} ml-1`}>
      <Link passHref href='https://twitter.com/PKlebaniuk'>
        <a target='blank'>
          {size === 'small' ? (
            <Image src={'/images/twitter.svg'} alt='twitter logo' width='30' height='30' />
          ) : (
            <Image src={'/images/twitter.svg'} alt='twitter logo' width='50' height='50' />
          )}
        </a>
      </Link>
    </div>
  );
}
