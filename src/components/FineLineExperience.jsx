import { CheckIcon } from '@heroicons/react/24/solid';
import image1 from '../assets/tattoo/fine-line/1.webp';
import image2 from '../assets/tattoo/fine-line/2.webp';

const FineLineExperience = () => {
  return (
    <div className='bg-background text-text-main py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl font-serif text-primary mb-4'>
            You want something subtle, clean, and timeless.
          </h1>
          <p className='max-w-3xl mx-auto text-lg text-text-main/80'>
            Not loud. Not trendy. Something that still looks good years from
            now.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-16'>
          <div className='space-y-12'>
            <div>
              <h2 className='text-2xl font-serif text-text-main mb-4'>
                What most people worry about
              </h2>
              <ul className='space-y-3'>
                {[
                  'Will it fade badly?',
                  'Will lines blur over time?',
                  'Is the artist precise enough?',
                ].map((item) => (
                  <li key={item} className='flex items-start'>
                    <CheckIcon className='h-6 w-6 text-primary mr-3 flex-shrink-0' />
                    <span className='text-text-main/80'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className='text-xl font-serif text-primary text-center lg:text-left border-l-4 border-primary pl-4'>
              Precision requires a steady hand, not speed.
            </p>
            <div>
              <h2 className='text-2xl font-serif text-text-main mb-4'>
                Clean tattoos, done with restraint
              </h2>
              <ul className='space-y-3'>
                {[
                  'Controlled line weight and spacing',
                  'Designs chosen for long-term clarity',
                  'Placement advice based on skin movement',
                  'Fewer tattoos done — done properly',
                ].map((item) => (
                  <li key={item} className='flex items-start'>
                    <CheckIcon className='h-6 w-6 text-primary mr-3 flex-shrink-0' />
                    <span className='text-text-main/80'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='group'>
              <img
                src={image1.src}
                alt='Minimal floral tattoo on inner arm'
                className='w-full h-auto object-cover aspect-square rounded-lg transition-transform duration-300 group-hover:scale-105'
              />
              <p className='text-center text-sm text-text-main/60 mt-2'>
                Minimal floral / inner arm
              </p>
            </div>
            <div className='group'>
              <img
                src={image2.src}
                alt='Fine line tattoo with delicate size'
                className='w-full h-auto object-cover aspect-square rounded-lg transition-transform duration-300 group-hover:scale-105'
              />
              <p className='text-center text-sm text-text-main/60 mt-2'>
                Fine lines / delicate size
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FineLineExperience;