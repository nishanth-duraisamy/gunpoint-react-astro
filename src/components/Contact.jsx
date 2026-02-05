import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import fb from '../assets/fb.webp';
import insta from '../assets/insta.webp';
import wa from '../assets/wa.webp';

const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/p/Gun-Point-Tattoo-Studios-100063521092954',
        icon: fb,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/gunpoint_tattoostudio',
        icon: insta,
    },
    {
        name: 'Whatsapp',
        href: 'https://wa.me/917667755644',
        icon: wa,
    },
];

const Contact = () => {
    return (
        <div className='bg-background text-text-main py-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-5xl font-display text-primary uppercase tracking-wide'>Contact Us</h2>
                    <p className='text-lg text-text-main/70 mt-4 font-body'>We're here to help. Reach out to us anytime.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* Contact Information Card */}
                    <div className='bg-secondary/40 border border-accent/20 rounded-xl p-10 space-y-6 shadow-xl'>
                        <h3 className='text-2xl font-display text-primary uppercase tracking-wider'>Contact Information</h3>
                        <div className='flex items-center space-x-4 group'>
                            <PhoneIcon className='h-7 w-7 text-primary transition-transform group-hover:scale-110' />
                            <a href='tel:+917667755644' className='text-xl font-body hover:text-primary-light transition-colors'>
                                +91 76677 55644
                            </a>
                        </div>
                        <div className='flex items-center space-x-4 group'>
                            <EnvelopeIcon className='h-7 w-7 text-primary transition-transform group-hover:scale-110' />
                            <a
                                href='mailto:art@gunpointtattoostudio.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-xl font-body hover:text-primary-light transition-colors break-all'
                            >
                                art@gunpointtattoostudio.com
                            </a>
                        </div>
                    </div>

                    {/* Social Media Card */}
                    <div className='bg-secondary/40 border border-accent/20 rounded-xl p-10 space-y-6 shadow-xl'>
                        <h3 className='text-2xl font-display text-primary uppercase tracking-wider'>Follow Our Work</h3>
                        <p className='text-text-main/70 font-body mb-4'>Check out our latest tattoos and studio updates.</p>
                        <div className='flex space-x-6'>
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='transition-transform hover:scale-110'
                                >
                                    <span className='sr-only'>{item.name}</span>
                                    {/* Accessing .src for proper asset resolution */}
                                    <img src={item.icon.src} alt={item.name} className='h-10 w-10' />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;