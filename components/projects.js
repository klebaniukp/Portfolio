import ProjectScreen from './projectScreen';
import { links } from '../links/links';

export default function Projects() {
  return (
    <main
      className={`col-start-2 col-end-8 row-start-2 row-span-3
    md:col-start-2 md:col-end-8 xsm:row-end-2 xsm:col-start-1 xsm:col-end-9`}
    >
      <p className='text-center text-xl pb-4'>
        <b>Projects:</b>
      </p>
      <ProjectScreen link={links.chat} />
    </main>
  );
}
