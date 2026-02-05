import ArtistCard from './ArtistCard';
import arun from '../assets/artists/arun.webp';
import karthi from '../assets/artists/karthi.webp';
import nandhini from '../assets/artists/nandhini.webp';
import ranjith from '../assets/artists/ranjith.webp';

const artists = [
  {
    name: 'Ranjith',
    image: ranjith,
    role: 'Founder & Lead Artist',
    bio: 'Specialist in hyper-realism, cover-ups, and large-scale custom concepts.',
  },
  {
    name: 'Karthi',
    image: karthi,
    role: 'Senior Artist',
    bio: 'Master of vibrant neo-traditional styles and advanced color packing.',
  },
  {
    name: 'Nandhini',
    image: nandhini,
    role: 'Senior Artist',
    bio: 'Expert in delicate fine-line work, dotwork, and minimalist aesthetics.',
  },
  {
    name: 'Arun',
    image: arun,
    role: 'Tattoo Artist',
    bio: 'Versatile artist focused on black & grey realism and intricate sketching.',
  },
];

const MeetTheArtists = () => {
  return (
    <div className='container mx-auto px-4 py-6'>
      <h2 className='text-4xl font-bold text-center mb-6'>Meet Our Artists</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {artists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default MeetTheArtists;