import owner from '../assets/artists/ranjith.webp';

function AboutUsComponent() {
  return (
    <div className='bg-background-dark text-text-light py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl'>
            Our Story
          </h1>
          <p className='mt-2 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            From a humble beginning to a celebrated name in the world of tattoo
            art.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='md:w-1/2 mb-6 md:mb-0'>
            <img
              className='w-48 h-48 object-cover rounded-full shadow-xl ring-4 ring-primary ring-offset-4 ring-offset-background-dark mx-auto transition-transform duration-300 transform hover:scale-105'
              src={owner.src}
              alt='Ranjith Kumar, founder of Gunpoint Tattoo Studio'
            />
          </div>
          <div className='md:w-1/2'>
            <h2 className='text-3xl font-bold mb-2'>
              Meet the Artist: Ranjith Kumar
            </h2>
            <p className='text-lg mb-2'>
              The heart and soul of Gunpoint Tattoo Studio, Ranjith Kumar, began
              his journey in 2015. With a passion for art and a dedication to
              his craft, he opened his first tattoo shop in the vibrant city of
              Erode.
            </p>
            <p className='text-lg mb-2'>
              His unique style, attention to detail, and commitment to hygiene
              quickly earned him a reputation as one of the most trusted tattoo
              artists in the region. What started as a small, one-man operation
              has blossomed into a testament to his hard work and artistic
              vision.
            </p>
            <p className='text-lg mb-2'>
              Today, Gunpoint Tattoo Studio stands as a pillar of excellence in
              the tattoo community. We are proud to have expanded our family,
              with thriving studios in{' '}
              <span className='text-primary font-semibold'>
                multiple cities
              </span>
              .
            </p>
            <p className='text-lg'>
              Ranjith's story is one of perseverance and success, a reminder
              that with passion and dedication, any dream is achievable. We are
              excited to be a part of your story and to create a piece of art
              that you will cherish for a lifetime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsComponent;