import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppShell({ children, currentPath, fullWidth }) {
  return (
    <div className='bg-background text-text-main h-full flex flex-col'>
        <Navbar client:load currentPath={currentPath} />
        <div className='flex-grow overflow-y-auto will-change-[transform,scroll-position]'>
            <main className='py-3'>
                <div className={fullWidth ? '' : 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    </div>
  );
}