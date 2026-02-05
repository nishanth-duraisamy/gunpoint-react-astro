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
    <div className='bg-background text-text-main py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-body text-primary'>Contact Us</h2>
          <p className='text-lg text-text-muted mt-2'>We're here to help. Reach out to us anytime.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Contact Info */}
          <div className='bg-secondary border border-white/5 rounded-lg p-8 space-y-4'>
            <h3 className='text-lg font-semibold text-primary'>Contact Information</h3>
            <div className='flex items-center space-x-3'>
              <PhoneIcon className='h-6 w-6 text-primary' />
              <a href='tel:+917667755644' className='hover:text-primary-light'>
                +91 76677 55644
              </a>
            </div>
            <div className='flex items-center space-x-3'>
              <EnvelopeIcon className='h-6 w-6 text-primary' />
              <a
                href='mailto:art@gunpointtattoostudio.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary-light'
              >
                art@gunpointtattoostudio.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className='bg-secondary border border-white/5 rounded-lg p-8 space-y-4'>
            <h3 className='text-lg font-semibold text-primary'>Follow Us</h3>
            <div className='flex space-x-4'>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary-light'
                >
                  <span className='sr-only'>{item.name}</span>
                  <img src={item.icon.src} alt={item.name} className='h-8 w-8' />
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