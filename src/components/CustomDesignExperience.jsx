import { CheckIcon } from '@heroicons/react/24/solid';
import customDesign1 from '../assets/tattoo/custom/1.webp';
import customDesign2 from '../assets/tattoo/custom/2.webp';
import customDesign3 from '../assets/tattoo/custom/3.webp';

const CustomDesignExperience = () => {
  return (
    <div className='bg-background text-text-main py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl font-serif text-primary mb-4'>
            Your Vision, Our Artistry: Custom Tattoo Design.
          </h1>
          <p className='max-w-3xl mx-auto text-lg text-text-main/80'>
            When you have a unique idea that needs to be brought to life, our
            custom design service is for you. We transform your concepts into a
            one-of-a-kind tattoo.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left Column */}
          <div className='space-y-12'>
            <div>
              <h2 className='text-2xl font-serif text-text-main mb-4'>
                The Custom Design Process
              </h2>
              <ul className='space-y-3'>
                {[
                  'In-depth consultation to understand your ideas, style, and placement.',
                  'Collaborative design process with sketches and digital mock-ups.',
                  'Unlimited revisions until the design is perfect for you.',
                  'Expert application by artists specialized in bringing complex visions to life.',
                ].map((item) => (
                  <li key={item} className='flex items-start'>
                    <CheckIcon className='h-6 w-6 text-primary mr-3 flex-shrink-0' />
                    <span className='text-text-main/80'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className='text-xl font-serif text-primary text-center lg:text-left border-l-4 border-primary pl-4'>
              Every custom tattoo is a journey from imagination to skin.
            </p>
            <div>
              <h2 className='text-2xl font-serif text-text-main mb-4'>
                What Makes Our Custom Designs Stand Out
              </h2>
              <ul className='space-y-3'>
                {[
                  'Truly unique artwork tailored to your personal story.',
                  'Guidance on design longevity and skin compatibility.',
                  'A comfortable and creative environment for your design journey.',
                  'A final piece that exceeds expectations and lasts a lifetime.',
                ].map((item) => (
                  <li key={item} className='flex items-start'>
                    <CheckIcon className='h-6 w-6 text-primary mr-3 flex-shrink-0' />
                    <span className='text-text-main/80'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Visuals & Gallery) */}
          <div className='space-y-4'>
            <div className='group'>
              <img
                src={customDesign1.src}
                alt='Intricate custom back piece tattoo'
                className='w-full h-auto object-cover aspect-video rounded-lg transition-transform duration-300 group-hover:scale-105'
              />
              <p className='text-center text-sm text-text-main/60 mt-2'>
                Intricate custom back piece
              </p>
            </div>
            <div className='group'>
              <img
                src={customDesign2.src}
                alt='Geometric custom arm tattoo'
                className='w-full h-auto object-cover aspect-video rounded-lg transition-transform duration-300 group-hover:scale-105'
              />
              <p className='text-center text-sm text-text-main/60 mt-2'>
                Geometric custom arm sleeve
              </p>
            </div>
            <div className='group'>
              <img
                src={customDesign3.src}
                alt='Floral custom thigh tattoo'
                className='w-full h-auto object-cover aspect-video rounded-lg transition-transform duration-300 group-hover:scale-105'
              />
              <p className='text-center text-sm text-text-main/60 mt-2'>
                Floral custom thigh piece
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesignExperience;