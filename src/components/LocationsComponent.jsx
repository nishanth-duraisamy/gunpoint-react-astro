import { locations } from '../data/locations';

function LocationsComponent() {
    return (
        <div className='bg-background text-text-main py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h1 className='text-5xl font-display text-primary uppercase tracking-wide sm:text-6xl md:text-7xl'>
                        Visit Our Studios
                    </h1>
                    <p className='mt-4 max-w-2xl mx-auto text-lg text-text-main/70 font-body'>
                        Find us in multiple cities, ready to bring your tattoo ideas to life with professional standards.
                    </p>
                </div>

                <div className='space-y-20'>
                    {locations.map((location) => (
                        <div
                            key={location.name}
                            className='flex flex-col lg:flex-row items-center bg-secondary/50 border border-accent/20 p-8 rounded-xl shadow-2xl transition-all duration-300 hover:border-primary/40'
                        >
                            {/* Studio Image */}
                            <div className='w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8'>
                                <img
                                    src={location.image.src} // Accessing .src for Astro asset processing
                                    alt={location.name}
                                    className='w-full h-80 object-cover rounded-lg shadow-lg border border-accent/10'
                                />
                            </div>

                            {/* Details */}
                            <div className='w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 text-center lg:text-left'>
                                <h2 className='text-4xl font-display text-primary mb-6'>{location.name}</h2>
                                <div className='space-y-4'>
                                    <p className='text-lg font-body'>
                                        <strong className='text-primary uppercase text-sm tracking-widest block mb-1'>Address</strong>
                                        <span className='text-text-main/90'>{location.address}</span>
                                    </p>
                                    <p className='text-lg font-body'>
                                        <strong className='text-primary uppercase text-sm tracking-widest block mb-1'>Opening Hours</strong>
                                        <span className='text-text-main/90'>10:00 AM - 10:00 PM</span>
                                    </p>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className='w-full lg:w-1/3 h-80 rounded-lg overflow-hidden border border-accent/20'>
                                <iframe
                                    src={location.mapSrc}
                                    width='100%'
                                    height='100%'
                                    style={{ border: 0 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                    title={`Map of ${location.name}`}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LocationsComponent;