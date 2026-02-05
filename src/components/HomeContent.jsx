import {
    PaintBrushIcon,
    SparklesIcon,
    BackspaceIcon,
} from '@heroicons/react/24/outline';

const expertiseData = [
    {
        icon: PaintBrushIcon,
        title: 'Custom Tattoos',
        description: 'Realism, Traditional, Geometric – tailored to your story.',
    },
    {
        icon: SparklesIcon,
        title: 'Professional Piercing',
        description: 'Sterile, precise, and stylish body jewelry.',
    },
    {
        icon: BackspaceIcon,
        title: 'Laser Removal',
        description: 'Safe, effective fading for a fresh start.',
    },
];

const HomeContent = () => {
    return (
        <>
            {/* Welcome Section */}
            <div className='py-8 bg-background'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h2 className='text-3xl font-extrabold text-text-main'>
                        Welcome to Gunpoint Tattoo Studio
                    </h2>
                    <p className='mt-4 max-w-2xl mx-auto text-xl text-text-light'>
                        Your journey to incredible body art starts here. We are a collective
                        of passionate artists dedicated to creating unique and meaningful
                        tattoos. Whether you're looking for a small, personal piece or a
                        large, intricate design, we have the expertise to bring your vision
                        to life.
                    </p>
                    <div className='mt-8'>
                        {/* Standard <a> tag replaces React Router <Link> */}
                        <a
                            href='/services'
                            className='inline-block bg-primary text-background hover:bg-primary-light font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105'
                        >
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </div>

            {/* Our Expertise Section */}
            <div className='bg-background py-8 sm:py-16'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-4xl text-primary sm:text-5xl'>OUR EXPERTISE</h2>
                    </div>
                    <div className='mt-10 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-3'>
                        {expertiseData.map((item) => (
                            <div
                                key={item.title}
                                className='flex flex-col items-center rounded-lg border-2 border-secondary bg-secondary p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary'
                            >
                                <item.icon
                                    className='h-12 w-12 text-primary'
                                    aria-hidden='true'
                                />
                                <h3 className='mt-6 text-2xl font-semibold leading-7 text-primary'>
                                    {item.title}
                                </h3>
                                <p className='mt-4 text-lg leading-6 mb-2'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeContent;