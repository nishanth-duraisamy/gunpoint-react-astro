import { PenTool, Zap, RefreshCcw, Gem, Check } from 'lucide-react';

const SERVICES = [
    {
        title: 'Custom Tattoo Design',
        description: 'The premium service for a truly unique piece of art. We work with you to bring your vision to life.',
        features: ['In-depth Consultation', 'Unlimited Revisions', 'Exclusive Artwork', 'Aftercare Kit'],
        icon: PenTool,
    },
    {
        title: 'Flash Tattoo',
        description: 'Choose from our curated collection of pre-designed tattoos. Perfect for a quick and stylish piece.',
        features: ['Pre-designed Artwork', 'Quick Application', 'Walk-ins Welcome', 'Variety of Styles'],
        icon: Zap,
    },
    {
        title: 'Cover-ups & Reworks',
        description: 'Breathe new life into old ink. Our artists specialize in transforming and restoring existing tattoos.',
        features: ['Consultation Included', 'Custom Cover-up Design', 'Seamless Integration', 'Color Correction'],
        icon: RefreshCcw,
    },
    {
        title: 'Piercing & Jewelry',
        description: 'Professional body piercing services with a wide selection of high-quality, sterile jewelry.',
        features: ['Sterile & Safe', 'Expert Piercers', 'Wide Jewelry Selection', 'Aftercare Guidance'],
        icon: Gem,
    },
];

const SEO_SERVICE_DETAILS = [
    {
        title: 'Custom Tattoo Design',
        content: `At Gunpoint Tattoo Studio, our custom design service is the pinnacle of personalized body art. We collaborate closely with you to transform your unique ideas into a masterpiece. From initial concept to the final, intricate details, your vision is our blueprint. Experience the best custom tattoos in the region, crafted with passion at <a href="/contact" class="text-primary hover:underline">Gunpoint Tattoo Studio</a>. Our artists specialize in a wide range of styles, including realism, traditional, geometric, and fine-line, ensuring that your custom tattoo perfectly reflects your individuality. Book a consultation today to start your tattoo journey with us.`,
    },
    {
        title: 'Flash Tattoo',
        content: `Looking for a quick, high-quality piece? Our flash tattoos at Gunpoint Tattoo Studio offer a range of stunning, pre-designed options. Each design is crafted by our talented artists, ensuring you get a stylish and professional tattoo, even on the go. Walk-ins are always welcome for flash tattoos at <a href="/locations" class="text-primary hover:underline">Gunpoint Tattoo Studio</a>, making it convenient to get beautiful art without a long wait. Discover your next favorite piece from our ever-evolving collection.`,
    },
    {
        title: 'Cover-ups & Reworks',
        content: `Transform your old or unwanted ink with our expert cover-up and rework services. The artists at Gunpoint Tattoo Studio specialize in breathing new life into existing tattoos, seamlessly integrating new designs or correcting previous work. Trust <a href="/appointments" class="text-primary hover:underline">Gunpoint Tattoo Studio</a> to give your tattoo a second chance, turning a faded memory into a vibrant new statement. Our consultation process ensures we understand your goals and deliver a result you'll love.`,
    },
    {
        title: 'Piercing & Jewelry',
        content: `Gunpoint Tattoo Studio offers professional and sterile body piercing services. Our expert piercers use top-of-the-line equipment and techniques to ensure a safe and comfortable experience. We also offer a wide selection of high-quality, hypoallergenic jewelry to complement your new piercing. For all your piercing needs, visit <a href="/locations" class="text-primary hover:underline">Gunpoint Tattoo Studio</a>. Our commitment to hygiene and precision guarantees a fantastic piercing experience.`,
    },
];

const ServicesSection = () => {
    return (
        <div className='bg-background text-text-main py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-display text-primary uppercase'>Our Services</h2>
                    <p className='text-lg text-text-main/70 mt-2 font-body'>
                        World-class ink, professional standards.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            className='bg-secondary border border-white/5 rounded-lg p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary shadow-xl'
                        >
                            <div className='flex-shrink-0 mb-4 text-center'>
                                <service.icon className='w-12 h-12 text-primary mx-auto drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' />
                            </div>
                            <h3 className='text-xl font-display text-primary text-center mb-2'>
                                {service.title}
                            </h3>
                            <p className='text-sm text-text-main/80 text-center flex-grow mb-6 font-body leading-relaxed'>
                                {service.description}
                            </p>
                            <ul className='space-y-2 text-sm'>
                                {service.features.map((feature) => (
                                    <li key={feature} className='flex items-center'>
                                        <Check className='w-4 h-4 text-primary mr-3 shrink-0' />
                                        <span className='text-text-main/90 font-body'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* SEO Content Section */}
                <div className='mt-24'>
                    <h2 className='text-3xl font-display text-primary text-center mb-12 uppercase tracking-wide'>
                        In-Depth Look at Our Offerings
                    </h2>
                    <div className='space-y-10'>
                        {SEO_SERVICE_DETAILS.map((detail) => (
                            <div key={detail.title} className='bg-secondary/50 border border-white/5 rounded-lg p-8 shadow-inner'>
                                <h3 className='text-2xl font-display text-primary mb-4'>{detail.title}</h3>
                                <p
                                    className='text-base text-text-main/80 leading-relaxed font-body'
                                    dangerouslySetInnerHTML={{ __html: detail.content }}
                                ></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;