import React, {useEffect, useState} from 'react'; // Import useState and useEffect
import {useStore} from '@nanostores/react';
import {isGlobalLoading} from '../store/loaderStore';
import logo from '../assets/logo.webp';

const texts = [
    "Crafting your story in ink.!",
    "Where art meets skin.!",
    "Precision, Passion, Perfection.!",
    "Your vision, our canvas.!",
    "Experience the art of tattoo.!",
];

const getRandomText = () => texts[Math.floor(Math.random() * texts.length)];

const GlobalLoader = () => {
    const $isGlobalLoading = useStore(isGlobalLoading);

    const [text, setText] = useState(getRandomText());

    useEffect(() => {

        if ($isGlobalLoading) {
            const interval = setInterval(() => {
                setText(() => getRandomText());
            }, 1000); // Change text every 1 second (frequent)


            return () => {
                clearInterval(interval)
            };
        }
    }, [$isGlobalLoading]); // Re-run effect when loading state changes

    if (!$isGlobalLoading) {
        return null
    }

    return (
        <div
            className='fixed inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-[9999]' // Added flex-col here
            aria-live="polite"
            aria-busy="true"
        >
            {/* New wrapper div for gold background and differentiation */}
            <div className='p-4 rounded-full bg-primary flex items-center justify-center border-2 border-secondary'>
                <img
                    src={logo.src}
                    alt="Loading..."
                    className="h-10 w-10 animate-spin-y"
                />
            </div>
            {/* Display changing text below the logo */}
            <p className="text-primary font-body text-xl mt-4 text-center">
                {text}
            </p>
            <span className='sr-only'>Loading...</span> {/* Keep for accessibility */}
        </div>
    );
};

export default GlobalLoader;
