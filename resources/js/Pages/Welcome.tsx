
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Carousel, Card } from 'flowbite-react';
import Navbar from '@/Components/Navbar';
import KestaneKebap from '../../../public/images/carousel-images/kestane-kebap.jpg';
import KestaneAgac from '../../../public/images/carousel-images/kestane-agac.png';
import KestaneAgac2 from '../../../public/images/carousel-images/kestane-agac2.jpg';
import KestaneSecme from '../../../public/images/carousel-images/kestane-secme.jpg';
import KestaneDikenli from '../../../public/images/carousel-images/kestane-dikenli.jpg';
export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
  return (
    <>
    
      <Head title="Welcome" />
      <div>
        <Navbar />
        <div className='flex justify-center flex-wrap'>
          <div className="xl:pt-5  m-auto h-56 sm:h-64 xl:h-96 2xl:w-full w-full sm:w-full 2xl:w-4/5">
            <Carousel>
              <img src={KestaneKebap} alt="..." />
              <img src={KestaneAgac} alt="..." />
              <img src={KestaneAgac2} alt="..." />
              <img src={KestaneSecme} alt="..." />
              <img src={KestaneDikenli} alt="..." />
            </Carousel>
          </div>
          <div className='gap-x-8 gap-y-4  flex justify-center flex-wrap mt-6'>

            <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

            <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

            <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

            <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
