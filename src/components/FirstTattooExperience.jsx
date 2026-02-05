import { CheckIcon } from '@heroicons/react/24/solid';
import fineLine from '../assets/tattoo/first/fine-line.webp';
import minimalSymbol from '../assets/tattoo/first/minimal-symbol.webp';
import smallText from '../assets/tattoo/first/small-text.webp';

const worries = [
    'What if I choose the wrong design?',
    'What if it hurts more than I expect?',
    'What if I regret it later?',
];

const solutions = [
    'We help you narrow down ideas until it feels right.',
    'We guide you on placement for aesthetics and comfort.',
    'We recommend clean, timeless styles that last.',
    'You never have to decide everything on day one.',
];

const trustFactors = [
    '1,000+ first-time tattoos completed successfully.',
    'A calm, sterile, and private process from start to finish.',
];

const tattooExamples = [
    {
        src: fineLine,
        caption: 'First tattoo - fine line',
    },
    {
        src: minimalSymbol,
        caption: 'Minimal symbol',
    },
    {
        src: smallText,
        caption: 'Small text',
    },
];

const FirstTattooExperience = () => {
    return (
        <div className='bg-background text-text-main py-16 sm:py-24 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <h1 className='text-4xl sm:text-5xl font-display text-primary mb-4 uppercase'>
                        Your first tattoo should feel exciting — not overwhelming.
                    </h1>
                    <p className='max-w-3xl mx-auto text-lg text-text-main/80 font-body'>
                        You want something meaningful, safe, and done right the first time.
                        Not rushed. Not pressured. Not something you regret later.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    {/* Left Column */}
                    <div className='space-y-12'>
                        <div>
                            <h2 className='text-2xl font-display text-primary mb-6 uppercase tracking-wide'>
                                This is probably what you’re worried about
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
                        <div>
                            <h2 className='text-2xl font-display text-primary mb-6 uppercase tracking-wide'>
                                How we make first tattoos easier
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
                        <p className='text-xl font-display text-primary text-center lg:text-left border-l-4 border-primary pl-4 uppercase tracking-tighter'>
                            This is a guided process — not a rushed appointment.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className='space-y-12'>
                        {/* Image Row */}
                        <div>
                            <div className='grid grid-cols-3 gap-4 mb-4'>
                                {tattooExamples.map((img) => (
                                    <img
                                        key={img.caption}
                                        src={img.src.src} // Access .src for Astro asset optimization
                                        alt={img.caption}
                                        className='rounded-lg object-cover aspect-[3/4] border border-accent/20'
                                    />
                                ))}
                            </div>
                            <div className='grid grid-cols-3 gap-4 text-center'>
                                {tattooExamples.map((img) => (
                                    <p key={img.caption} className='text-xs sm:text-sm text-text-main/60 font-body'>
                                        {img.caption}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Trust Section */}
                        <div className='bg-secondary/30 p-8 rounded-xl border border-accent/10'>
                            <h2 className='text-2xl font-display text-primary mb-6 uppercase tracking-wide'>
                                Why people trust us
                            </h2>
                            <ul className='space-y-4'>
                                {trustFactors.map((item) => (
                                    <li key={item} className='flex items-start'>
                                        <CheckIcon className='h-6 w-6 text-primary mr-3 flex-shrink-0' />
                                        <span className='text-text-main/80 font-body'>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstTattooExperience;