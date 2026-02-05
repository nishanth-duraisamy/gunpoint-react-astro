import { CheckIcon } from '@heroicons/react/24/solid';

const sections = [
    {
        title: 'Before your appointment',
        items: [
            'Eat a good meal and stay hydrated.',
            'Get a good night’s sleep.',
            'Avoid alcohol and excessive caffeine 24 hours prior.',
            'Moisturize the area daily for a week leading up to your appointment.',
            'Wear comfortable clothing that allows easy access to the tattoo area.',
        ],
    },
    {
        title: 'During your appointment',
        items: [
            'Communicate openly with your artist about comfort and breaks.',
            'Relax and trust your artist’s expertise.',
            'Bring headphones for entertainment if you wish.',
            'Stay still, especially during critical outlining.',
            'Hydrate and have snacks available for longer sessions.',
        ],
    },
    {
        title: 'Aftercare basics',
        items: [
            'Keep the tattoo clean and moisturized as instructed.',
            'Avoid direct sunlight and swimming.',
            'Do not pick or scratch your healing tattoo.',
            'Follow all specific aftercare instructions provided by your artist.',
            'Contact us if you have any concerns or questions during healing.',
        ],
    },
];

const PreparationGuide = ({ bookedLocationDetails }) => {
    const contactPhoneNumber = '+91 76677 55644';

    return (
        <div className='bg-background text-text-main py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-accent/20 mt-12'>
            <div className='max-w-7xl mx-auto space-y-16'>
                {/* Header Section */}
                <div className='text-center'>
                    <h1 className='text-4xl sm:text-5xl font-display text-primary mb-4 uppercase tracking-wide'>
                        Guide to a Great Tattoo Experience.
                    </h1>
                    <p className='max-w-3xl mx-auto text-lg text-text-main/80 font-body'>
                        Preparation is key to a smooth session and a perfectly healed tattoo. Follow these steps to ensure the best possible outcome for your new art.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    {/* Left Column - Preparation Steps */}
                    <div className='space-y-12'>
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2 className='text-2xl font-display text-primary mb-6 uppercase tracking-wider'>
                                    {section.title}
                                </h2>
                                <ul className='space-y-4'>
                                    {section.items.map((item) => (
                                        <li key={item} className='flex items-start'>
                                            <CheckIcon className='h-6 w-6 text-primary mr-3 flex-shrink-0' />
                                            <span className='text-text-main/80 font-body'>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Additional Info / Contact */}
                    <div className='space-y-8'>
                        <div className='border-l-4 border-primary pl-6 py-2'>
                            <h2 className='text-3xl font-display text-primary mb-4 uppercase'>
                                Got Questions?
                            </h2>
                            <p className='text-lg text-text-main/80 mb-6 font-body leading-relaxed'>
                                If you’re unsure about anything at all, don’t hesitate to reach out to us directly. We’re here to make your tattoo experience as comfortable and clear as possible.
                            </p>

                            <div className='space-y-4'>
                                <p className='text-xl font-bold text-primary font-body'>
                                    Call us: <a href={`tel:${contactPhoneNumber.replace(/\s/g, '')}`} className='hover:text-primary-light transition-colors'>{contactPhoneNumber}</a>
                                </p>

                                {bookedLocationDetails && bookedLocationDetails.address && (
                                    <div className='bg-secondary/30 p-6 rounded-xl border border-accent/10 mt-6'>
                                        <h3 className='text-primary font-display text-xl mb-2 uppercase'>Your Appointment Details:</h3>
                                        <p className='text-lg font-body text-text-main/90'>
                                            <span className='font-bold'>{bookedLocationDetails.locationName || 'Gunpoint Studio'}</span>
                                            <br />
                                            {bookedLocationDetails.address}
                                        </p>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${bookedLocationDetails.locationName}, ${bookedLocationDetails.address}`)}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-block mt-4 text-primary hover:text-primary-light font-bold underline transition-colors font-body'
                                        >
                                            Get Directions
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='bg-primary/10 border border-primary/20 p-8 rounded-xl'>
                            <h3 className='text-2xl font-display text-primary mb-3 uppercase tracking-wide'>Remember:</h3>
                            <p className='text-text-main/90 font-body text-lg italic'>
                                "A good tattoo starts with good preparation. We look forward to seeing you!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreparationGuide;