import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  return (
    <header className='col-start-2 col-end-6 row-start-1 row-end-2 xsm:row-end-3'>
      <Image
        src={'/images/profileswag.png'}
        alt='Profile Image'
        layout='fixed'
        width='150'
        height='150'
        priority={true}
      />
      <div className='autoTypedAnimationContainer pt-5'>
        <TypeAnimation
          sequence={['Hi', 500, "Hi I'm Piotr Klebaniuk"]}
          wrapper='p'
          cursor={false}
          className='descriptionAnimated pl-12'
        />
        <TypeAnimation
          sequence={[2600, "I'm Software Developer"]}
          wrapper='p'
          cursor={false}
          className='descriptionAnimated pr-5'
        />
      </div>
    </header>
  );
}
