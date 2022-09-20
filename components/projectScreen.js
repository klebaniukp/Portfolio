import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import GitHub from './github';
import { useState } from 'react';

export default function ProjectScreen() {
  return (
    <section>
      <ul>
        <li>
          <div className='flex justify-center'>
            <Link passHref href='https://chat.piotrklebaniuk.pl'>
              <a target={'_blank'}>
                {/* <div style={{ height: '98%', boxShadow: '0 0px 1px 0 grey, 0 1px 21px 0 grey' }}> */}
                  <Image
                    alt={'chat project picture'}
                    src={'/images/chat.png'}
                    width={900}
                    height={492}
                    className=' cursor-pointer'
                  />
                {/* </div> */}
              </a>
            </Link>
          </div>
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
