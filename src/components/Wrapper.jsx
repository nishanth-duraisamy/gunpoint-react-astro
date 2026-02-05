import Footer from './Footer';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.webp';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Wrapper({ children, fullWidth = false, currentPath = '/' }) {
    // Astro will pass the current path as a prop because useLocation()
    // doesn't work outside of a React Router <BrowserRouter>
    const navigation = [
        { name: 'Home', href: '/', current: currentPath === '/' },
        { name: 'Services', href: '/services', current: currentPath === '/services' },
        { name: 'Locations', href: '/locations', current: currentPath === '/locations' },
        { name: 'Contact', href: '/contact', current: currentPath === '/contact' },
        { name: 'About us', href: '/about', current: currentPath === '/about' },
    ];

    return (
        <div className='bg-background min-h-screen flex flex-col'>
            <Disclosure
                as='nav'
                className='sticky top-0 z-50 border-b-2 border-accent shadow-lg bg-background'
            >
                {({ open }) => (
                    <>
                        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                            <div className='flex h-20 items-center justify-between'>
                                <div className='flex shrink-0 items-center'>
                                    <a href='/' className='flex items-center'>
                                        <img
                                            alt='Gunpoint Tattoo Studio'
                                            src={logo.src} // Added .src for Astro optimization
                                            className='h-10 w-auto'
                                        />
                                        <span className='ml-3 hidden sm:inline text-3xl sm:text-4xl font-display text-text-main'>
                      Gunpoint Tattoo Studio
                    </span>
                                    </a>
                                </div>

                                <div className='hidden sm:flex sm:space-x-8 flex-grow justify-center'>
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current
                                                    ? 'border-primary text-primary'
                                                    : 'border-transparent hover:border-primary-light hover:text-primary-light',
                                                'inline-flex items-center border-b-2 px-1 pt-1 text-lg font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>

                                <div className='hidden sm:block'>
                                    <a
                                        href='/appointments'
                                        className='bg-primary text-background hover:bg-primary-light font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out self-center animate-pulse-glow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                                    >
                                        Book Now
                                    </a>
                                </div>

                                <div className='-mr-2 flex items-center md:hidden'>
                                    <DisclosureButton className='relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-text-main'>
                                        <span className='absolute -inset-0.5' />
                                        <span className='sr-only'>Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className='block h-8 w-8' aria-hidden='true' />
                                        ) : (
                                            <Bars3Icon className='block h-8 w-8' aria-hidden='true' />
                                        )}
                                    </DisclosureButton>
                                </div>
                            </div>
                        </div>

                        <DisclosurePanel className='md:hidden'>
                            <div className='space-y-1 px-2 pb-3 pt-2'>
                                {navigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a" // Use standard anchor tag
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-secondary'
                                                : 'hover:bg-secondary hover:text-primary',
                                            'block rounded-md px-3 py-2 text-base font-medium text-center',
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                                <DisclosureButton
                                    as="a"
                                    href='/appointments'
                                    className='bg-primary text-background hover:bg-primary-light block font-bold py-2 px-4 rounded-lg text-center mt-2 animate-pulse-glow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                                >
                                    Book Now
                                </DisclosureButton>
                            </div>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>

            <div className='flex-grow py-4'>
                <main>
                    <div className={fullWidth ? '' : 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}