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
  // Assuming you want to display contact info for a specific location,
  // or a default one if not specified. For now, let's use the first location's phone.
  const contactPhoneNumber = '+91 76677 55644';

  return (
    <div className='bg-background text-text-main py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto space-y-16'>
        {/* Header Section */}
        <div className='text-center'>
          <h1 className='text-4xl sm:text-5xl font-serif text-primary mb-4'>
            Your Guide to a Great Tattoo Experience.
          </h1>
          <p className='max-w-3xl mx-auto text-lg text-text-main/80'>
            Preparation is key to a smooth session and a perfectly healed tattoo. Follow these steps to ensure the best possible outcome for your new art.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left Column - Preparation Steps */}
          <div className='space-y-12'>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className='text-2xl font-serif text-text-main mb-4'>
                  {section.title}
                </h2>
                <ul className='space-y-3'>
                  {section.items.map((item) => (
                    <li key={item} className='flex items-start'>
                      <CheckIcon className='h-6 w-6 text-primary mr-3 flex-shrink-0' />
                      <span className='text-text-main/80'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column - Additional Info / Contact */}
          <div className='space-y-8'>
            <div className='border-l-4 border-primary pl-4'>
              <h2 className='text-2xl font-serif text-text-main mb-4'>
                Got Questions?
              </h2>
              <p className='text-lg text-text-main/80 mb-4'>
                If you’re unsure about anything at all, don’t hesitate to reach out to us directly. We’re here to help make your tattoo experience as comfortable and clear as possible.
              </p>
              <p className='text-xl font-bold text-primary'>
                Call us: <a href={`tel:${contactPhoneNumber}`} className='hover:underline'>{contactPhoneNumber}</a>
              </p>
              {bookedLocationDetails && bookedLocationDetails.address && (
                <p className='text-lg mt-2'>
                  <span className='font-semibold text-primary'>Location:</span> {bookedLocationDetails.locationName || 'Our Studio'}
                  <br />
                  <span className='font-semibold text-primary'>Address:</span> {bookedLocationDetails.address}
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${bookedLocationDetails.locationName}, ${bookedLocationDetails.address}`)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline ml-2'
                  >
                    (Get Directions)
                  </a>
                </p>
              )}
            </div>

            <div className='bg-secondary p-6 rounded-lg'>
                <h3 className='text-xl font-serif text-text-main mb-3'>Remember:</h3>
                <p className='text-text-main/80'>
                    A good tattoo starts with good preparation. We look forward to seeing you!
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreparationGuide;
