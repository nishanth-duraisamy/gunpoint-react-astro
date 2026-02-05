import React from 'react';
import { useStore } from '@nanostores/react';
import { isGlobalLoading } from '../store/loaderStore';

const GlobalLoader = () => {
  const $isGlobalLoading = useStore(isGlobalLoading);

  if (!$isGlobalLoading) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[9999]'
      aria-live="polite"
      aria-busy="true"
    >
      <div className='bg-primary p-4 rounded-full animate-pulse-glow'>
        {/* You can put an SVG spinner or an image here if preferred */}
        <span className='sr-only'>Loading...</span>
        <div className="h-8 w-8 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default GlobalLoader;
