import erodeShop from '../assets/shops/erode.webp';

const HeroSection = () => {
  return (
    <div
      className='relative bg-background min-h-screen flex items-center justify-center text-center'
      style={{
        backgroundImage: `url(${erodeShop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/70'></div>

      {/* Content */}
      <div className='relative z-10 p-4 animate-fade-in'>
        <h1 className='text-6xl md:text-8xl font-body text-primary uppercase tracking-wider'>
          Gunpoint Tattoo Studio
        </h1>
        <p className='mt-4 text-lg md:text-xl max-w-2xl mx-auto'>
          Premium Artistry. Professional Standards. Uncompromising Quality.
        </p>
        <div className='mt-8'>
          <a
            href='/appointments'
            className='bg-primary text-background hover:bg-primary-light font-bold py-3 px-8 rounded-lg text-lg uppercase transition duration-300 ease-in-out transform hover:scale-105'
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;