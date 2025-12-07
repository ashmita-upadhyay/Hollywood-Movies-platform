import React from 'react';

function MoviesCard({ movieObj, movie, name, handleWatchList }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/200x300'; // Fallback image if no poster_path

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 cursor-pointer"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div 
        onClick={() => handleWatchList(movieObj)} 
        className='m-4 flex justify-center items-center h-8 w-8 bg-gray-800 rounded-full cursor-pointer text-white'
      >
        &#128525;
      </div>
      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>
        {name}
      </div>
    </div>
  );
}

export default MoviesCard;
