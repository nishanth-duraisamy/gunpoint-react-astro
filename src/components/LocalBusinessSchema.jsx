import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { locations } from '../data/locations'; // Adjust path if necessary

const LocalBusinessSchema = () => {
  const websiteUrl = 'https://gunpointtattoostudio.com'; // Your actual website URL
  const contactPhone = '+917667755644'; // Your actual contact phone

  const schemas = locations.map((location) => {
    const addressComponents = location.address.split(', ');
    // Basic parsing, might need more robust logic for complex addresses
    const streetAddress = addressComponents
      .slice(0, addressComponents.length - 3)
      .join(', ');
    const addressLocality = addressComponents[addressComponents.length - 3]; // e.g., Erode or Tiruppur
    const addressRegion = addressComponents[addressComponents.length - 2]; // e.g., Tamil Nadu
    const postalCode = addressComponents[addressComponents.length - 1]; // e.g., 638001

    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: location.displayName,
      image: websiteUrl + '/logo.webp', // Assuming logo.webp is in public folder
      url: websiteUrl,
      telephone: contactPhone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: streetAddress,
        addressLocality: addressLocality,
        addressRegion: addressRegion,
        postalCode: postalCode,
        addressCountry: 'IN', // Assuming India
      },
      hasMap: location.mapSrc,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '10:00',
          closes: '22:00',
        },
      ],
      priceRange: '$$', // Example price range
      slogan: 'Crafting unique tattoo experiences.',
      logo: websiteUrl + '/logo.webp',
      description: `Experience custom tattoos and piercings at ${location.displayName}.`,
      sameAs: [
        'https://www.facebook.com/p/Gun-Point-Tattoo-Studios-100063521092954',
        'https://www.instagram.com/gunpoint_tattoostudio',
        'https://wa.me/917667755644',
      ],
    };
  });

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={`local-business-schema-${index}`}
          type='application/ld+json'
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default LocalBusinessSchema;
