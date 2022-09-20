import Head from 'next/head';
import Header from '../components/header';
import Projects from '../components/projects';
import Footer from '../components/footer';
import { useEffect, createRef } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={'grid grid-cols-6 gap-4 grid-rows-6 w-screen bg-zinc-900 text-white'} style={{ height: '150vh' }}>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Portfolio Piotr Klebaniuk' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Projects />
      <div className='mt-24 text-center col-start-2 col-end-6 row-start-5 row-end-5'>
        <p>More coming soon!</p>
      </div>
      <Footer />
    </div>
  );
}
