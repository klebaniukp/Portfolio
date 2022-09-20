import ProjectScreen from './projectScreen';
import { links } from '../links/links';

export default function Projects() {
  return (
    <main className='col-start-2 col-end-6 row-start-2 row-end-3'>
      <p className='text-center	'>Projects:</p>
      <ProjectScreen link={links.chat} />
      
    </main>
  );
}
