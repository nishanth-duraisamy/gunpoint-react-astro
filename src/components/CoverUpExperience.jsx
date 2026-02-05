import { CheckIcon } from '@heroicons/react/24/solid';
import coverup1 from '../assets/tattoo/coverup/1.webp';
import coverup2 from '../assets/tattoo/coverup/2.webp';
import coverup3 from '../assets/tattoo/coverup/3.webp';
import coverup4 from '../assets/tattoo/coverup/4.webp';
import coverup5 from '../assets/tattoo/coverup/5.webp';

const worries = [
    'Will the new tattoo look obviously like a cover-up?',
    'Does it have to be really dark or heavy?',
    'Will it actually hide the old tattoo completely?',
];

const solutions = [
    'Designs are built to distract the eye, not fight the old ink.',
    'We use layering and flow instead of heavy blackouts.',
    'We provide honest advice if laser removal is a better first step.',
    'You get realistic expectations — no unrealistic promises.',
];

const transformations = [
    {
        images: [coverup1, coverup2],
        caption: 'Effortless floral cover of a crowded earlier design.',
    },
    {
        images: [coverup3, coverup4, coverup5],
        caption: 'Forest camouflage made regret invisible.',
    },
];

const CoverUpExperience = () => {
    return (
        <div className='bg-background text-text-main py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <h1 className='text-4xl sm:text-5xl font-display text-primary mb-4 uppercase'>
                        You don’t want to see that tattoo anymore.
                    </h1>
                    <p className='max-w-3xl mx-auto text-lg text-text-main/80 font-body'>
                        Whether it reminds you of a past decision or just doesn’t match who
                        you are now — you want it handled properly, not made worse.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    {/* Left Column */}
                    <div className='space-y-12'>
                        <div>
                            <h2 className='text-2xl font-display text-primary mb-6 uppercase tracking-wide'>
                                Common worries with cover-ups
                            </h2>
                            <ul className='space-y-4'>
                                {worries.map((item) => (
                                    <li key={item} className='flex items-start'>
                                        <CheckIcon className='h-6 w-6 text-primary mr-3 flex-shrink-0' />
                                        <span className='text-text-main/80 font-body'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className='text-xl font-display text-primary text-center lg:text-left border-l-4 border-primary pl-4 uppercase tracking-tighter'>
                            Cover-ups require strategy, not shortcuts.
                        </p>

                        <div>
                            <h2 className='text-2xl font-display text-primary mb-6 uppercase tracking-wide'>
                                Cover-ups designed to look intentional
                            </h2>
                            <ul className='space-y-4'>
                                {solutions.map((item) => (
                                    <li key={item} className='flex items-start'>
                                        <CheckIcon className='h-6 w-6 text-primary mr-3 flex-shrink-0' />
                                        <span className='text-text-main/80 font-body'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='space-y-12'>
                        {transformations.map((transform, index) => (
                            <div key={index} className='bg-secondary/20 p-6 rounded-xl border border-accent/10'>
                                <div className='grid grid-cols-3 gap-2 md:gap-4 mb-4'>
                                    {transform.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img.src} // Access .src because imported assets are objects
                                            alt={`Transformation step ${i + 1}`}
                                            className='rounded-lg object-cover aspect-square border border-accent/20'
                                        />
                                    ))}
                                </div>
                                <p className='text-center text-sm text-text-main/60 font-body'>
                                    {transform.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverUpExperience;