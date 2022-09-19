import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function Header() {
  return (
    <header>
      <Image
        src={'/images/profileswag.png'}
        alt='Profile Image'
        layout='fixed'
        width='150'
        height='150'
        priority={true}
      />
      <div className='autoTypedAnimationContainer'>
        <TypeAnimation
          sequence={['Hi', 500, "Hi I'm Piotr Klebaniuk"]}
          wrapper='p'
          cursor={false}
          className='descriptionAnimated'
        />
        <TypeAnimation
          sequence={[2600, "I'm Software Developer"]}
          wrapper='p'
          cursor={false}
          className='descriptionAnimated'
        />
      </div>
    </header>
  );
}
