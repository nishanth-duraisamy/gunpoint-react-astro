import owner from '../assets/artists/ranjith.webp';

function AboutUsComponent() {
    return (
        <div className='bg-background text-text-main py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h1 className='text-5xl font-display text-primary uppercase tracking-wide sm:text-6xl'>
                        Our Story
                    </h1>
                    <p className='mt-4 max-w-2xl mx-auto text-lg text-text-main/70 font-body'>
                        From a humble beginning to a celebrated name in the world of tattoo art.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row items-center md:space-x-16'>
                    {/* Founder Image */}
                    <div className='md:w-1/2 mb-12 md:mb-0'>
                        <img
                            className='w-64 h-64 object-cover rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] ring-4 ring-primary ring-offset-4 ring-offset-background mx-auto transition-transform duration-500 transform hover:scale-105'
                            src={owner.src} // Access .src for Astro asset processing
                            alt='Ranjith Kumar, founder of Gunpoint Tattoo Studio'
                        />
                    </div>

                    {/* Story Content */}
                    <div className='md:w-1/2 space-y-6'>
                        <h2 className='text-4xl font-display text-primary uppercase'>
                            Meet the Artist: Ranjith Kumar
                        </h2>
                        <div className='space-y-4 font-body text-lg leading-relaxed text-text-main/90'>
                            <p>
                                The heart and soul of Gunpoint Tattoo Studio, Ranjith Kumar, began
                                his journey in 2015. With a passion for art and a dedication to
                                his craft, he opened his first tattoo shop in the vibrant city of
                                Erode.
                            </p>
                            <p>
                                His unique style, attention to detail, and commitment to hygiene
                                quickly earned him a reputation as one of the most trusted tattoo
                                artists in the region. What started as a small, one-man operation
                                has blossomed into a testament to his hard work and artistic
                                vision.
                            </p>
                            <p>
                                Today, Gunpoint Tattoo Studio stands as a pillar of excellence in
                                the tattoo community. We are proud to have expanded our family,
                                with thriving studios in{' '}
                                <span className='text-primary font-bold'>multiple cities</span>.
                            </p>
                            <p className='italic text-primary'>
                                "Ranjith's story is one of perseverance and success, a reminder
                                that with passion and dedication, any dream is achievable. We are
                                excited to be a part of your story."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsComponent;