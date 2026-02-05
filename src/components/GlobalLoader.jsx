import React from 'react';
import { useLoading } from '../contexts/LoadingContext';
import Logo from '../assets/logo.webp';

const GlobalLoader = () => {
    const { loading } = useLoading();

    if (!loading) return null;

    return (
        <div
            className='fixed inset-0 flex items-center justify-center z-[9999] bg-background/80 backdrop-blur-sm'
        >
            <div className='bg-primary p-4 rounded-full animate-bounce shadow-[0_0_20px_rgba(212,175,55,0.5)]'>
                <img
                    src={Logo.src} // Added .src for Astro asset processing
                    alt="Gunpoint Tattoo Logo"
                    className="h-12 w-12 object-contain"
                />
            </div>
        </div>
    );
};

export default GlobalLoader;