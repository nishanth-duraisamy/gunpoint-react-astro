import { locations } from '../data/locations';

function LocationsComponent() {
  return (
    <div className='bg-background-dark text-text-light py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl'>
            Visit Our Studios
          </h1>
          <p className='mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            Find us in multiple cities, ready to bring your tattoo ideas to
            life.
          </p>
        </div>

        <div className='space-y-12'>
          {locations.map((location) => (
            <div
              key={location.name}
              className='flex flex-col md:flex-row items-center p-8 rounded-lg shadow-lg'
            >
              <div className='md:w-1/2 md:pr-8'>
                <img
                  src={location.image.src}
                  alt={location.name}
                  className='w-full h-64 object-cover rounded-lg mb-6 md:mb-0'
                />
              </div>
              <div className='md:w-1/2 md:pr-8'>
                <h2 className='text-3xl font-bold mb-4'>{location.name}</h2>
                <p className='text-lg mb-2'>
                  <strong>Address:</strong> {location.address}
                </p>
              </div>
              <div className='md:w-1/2 mt-8 md:mt-0'>
                <div className='aspect-w-16 aspect-h-9'>
                  <iframe
                    src={location.mapSrc}
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationsComponent;