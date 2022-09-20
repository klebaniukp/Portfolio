import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function GitHub(props) {
  const { size } = props;

  return (
    <div className={`${styles.link} ml-1`}>
      <Link passHref href='https://github.com/klebaniukp'>
        <a target='blank'>
          {size === 'small' ? (
            <Image src={'/images/github.svg'} alt='github logo' width='30' height='30' />
          ) : (
            <Image src={'/images/github.svg'} alt='github logo' width='50' height='50' />
          )}
        </a>
      </Link>
    </div>
  );
}
