import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import GitHub from './github';

export default function ProjectScreen() {
  const css = { width: '1000px', height: 'auto' };

  return (
    <section>
      <ul style={{ alignItems: 'start' }} className='col-start-2 col-end-5 row-start-2 row-end-4 '>
        <li style={{ float: 'left' }}>
          <Link passHref href='https://chat.piotrklebaniuk.pl'>
            <a target={'_blank'}>
              <Image
                alt={'profile picture'}
                src={'/images/chat.png'}
                width={1000}
                height={547}
                styles={css}
                className='w-3/2 h-3/2 cursor-pointer'
              />
            </a>
          </Link>
          <div className='flex flex-row text-center justify-center mt-2'>
            <Link passHref href='https://chat.piotrklebaniuk.pl'>
              <a target={'_blank'} className='cursor-pointer'>
                chat
              </a>
            </Link>
            <GitHub />
            <div className={`${styles.link} ml-1`}>
              <Link passHref href={'https://chat.piotrklebaniuk.pl'}>
                <a target='blank'>
                  <Image src={'/images/live.png'} alt='live version' width='30' height='30' />
                </a>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
