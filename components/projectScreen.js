import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import GitHub from './github';
import { useState } from 'react';

export default function ProjectScreen() {
  const css = { maxWidth: '750px', height: 'auto' };

  return (
    <section className=''>
      <ul className='items-start'>
        <li className='float-left'>
          <Link passHref href='https://chat.piotrklebaniuk.pl'>
            <a target={'_blank'}>
              <Image
                alt={'profile picture'}
                src={'/images/chat.png'}
                width={900}
                height={492}
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
            <GitHub size={'small'} />
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
