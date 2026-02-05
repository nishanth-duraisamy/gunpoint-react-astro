import React from 'react';
import { useStore } from '@nanostores/react';
import { isGlobalLoading } from '../store/loaderStore';
import logo from '../assets/logo.webp'; // Import the logo

const GlobalLoader = () => {
  const $isGlobalLoading = useStore(isGlobalLoading);

  if (!$isGlobalLoading) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[9999]'
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
      <span className='sr-only'>Loading...</span> {/* Keep for accessibility */}
    </div>
  );
};

export default GlobalLoader;
