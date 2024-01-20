
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Carousel } from 'flowbite-react';
import Navbar from '@/Components/Navbar';
export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
  return (
    <>
      <Head title="Welcome" />
      <div>
        <Navbar/>
      
        <div className="m-auto h-56 sm:h-64 xl:h-80 2xl:h-96 w-56 sm:w-64 xl:w-80 2xl:w-96">
          <Carousel>
            <img src="https://picsum.photos/id/237/200/300" alt="..." />
            <img src="https://picsum.photos/id/238/200/300" alt="..." />
            <img src="https://picsum.photos/id/239/200/300" alt="..." />
            <img src="https://picsum.photos/id/240/200/300" alt="..." />
            <img src="https://picsum.photos/id/241/200/300" alt="..." />
          </Carousel>
        </div>
      </div>

    </>
  );
}
