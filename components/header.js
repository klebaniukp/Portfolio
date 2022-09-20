import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  return (
    <header
      className={`col-start-2 col-end-8 row-start-1 row-end-1 
    xsm:col-end-9 xxsm:col-start-1 `}
    >
      <div >
        <Image
          src={'/images/profileswag.png'}
          alt='Profile Image'
          layout='fixed'
          width='150'
          height='150'
          priority={true}
          className={`xsm:mb-20`}
        />
      </div>
      <div
        className={`autoTypedAnimationContainer pt-5 m-auto 
      tsm:pt-0 tsm:mt-5 xtsm:flex xtsm:ml-1 xxtsm:w-screen`}
      >
        <TypeAnimation
          sequence={['Hi', 500, "Hi I'm Piotr Klebaniuk"]}
          wrapper='p'
          cursor={false}
          className='descriptionAnimated pl-12 xtsm:pl-0 xxtsm:w-screen'
        />
        <TypeAnimation
          sequence={[2600, "I'm Software Developer"]}
          wrapper='p'
          cursor={false}
          className='descriptionAnimated pr-5 xtsm:pr-0 xtsm:pl-5 xtsm:mt-6 xxtsm:w-screen xxtsm:p-0 xxtsm:m-0'
        />
      </div>
    </header>
  );
}
