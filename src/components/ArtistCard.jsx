const ArtistCard = ({ artist }) => {
  return (
    <div className='bg-secondary rounded-lg shadow-lg p-6'>
      <img
        src={artist.image}
        alt={artist.name}
        className='w-32 h-32 rounded-full mx-auto'
      />
      <h3 className='text-xl font-bold text-center mt-4'>{artist.name}</h3>
      <p className='text-primary text-center mt-1'>{artist.role}</p>
      <p className='text-center mt-2'>{artist.bio}</p>
    </div>
  );
};

export default ArtistCard;
