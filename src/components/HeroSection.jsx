import erodeShop from '../assets/shops/erode.webp';

const HeroSection = () => {
    return (
        <div
            className='relative bg-background min-h-screen flex items-center justify-center text-center'
            style={{
                // Use .src here because Astro imports assets as objects
                backgroundImage: `url(${erodeShop.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/70'></div>

            {/* Content */}
            <div className='relative z-10 p-2 animate-fade-in'>
                <h1 className='text-6xl md:text-8xl font-body text-primary uppercase tracking-wider'>
                    Gunpoint Tattoo Studio
                </h1>
                <p className='mt-2 text-lg md:text-xl max-w-2xl mx-auto'>
                    Premium Artistry. Professional Standards. Uncompromising Quality.
                </p>
                <div className='mt-6'>
                    <a
                        href='/appointments' // Standard anchor tag replaces React Router Link
                        className='inline-block bg-primary text-background hover:bg-primary-light font-bold py-2 px-6 rounded-lg text-lg uppercase transition duration-300 ease-in-out transform hover:scale-105'
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;