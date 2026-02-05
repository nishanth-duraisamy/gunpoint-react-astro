import React from 'react';
import { useLoading } from '../contexts/LoadingContext';
import Logo from '../assets/logo.webp'; // Import the brand logo

const GlobalLoader = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-[9999]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className='bg-primary p-4 rounded-full animate-bounce'>
        <img src={Logo} alt="Brand Logo" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default GlobalLoader;
