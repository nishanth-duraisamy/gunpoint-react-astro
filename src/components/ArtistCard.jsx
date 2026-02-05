const ArtistCard = ({ artist }) => {
    return (
        <div className='bg-secondary rounded-lg shadow-lg p-6 border border-accent/20 transition-all duration-300 hover:border-primary/50'>
            <img
                /* Access .src because the artist.image is an Astro metadata object */
                src={artist.image.src}
                alt={artist.name}
                className='w-32 h-32 rounded-full mx-auto object-cover border-2 border-primary'
            />
            <h3 className='text-xl font-body font-bold text-center mt-4 text-text-main'>
                {artist.name}
            </h3>
            <p className='text-primary text-center font-medium mt-1'>
                {artist.role}
            </p>
            <p className='text-center mt-2 text-sm text-text-main/80 leading-relaxed'>
                {artist.bio}
            </p>
        </div>
    );
};

export default ArtistCard;