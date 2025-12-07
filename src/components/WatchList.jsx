import React from 'react';

function WatchList({ watchList }) {
  return (
    <div className="p-5">
      <div className="text-xl m-5 font-bold text-center">
        My Watchlist
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {watchList.length === 0 ? (
          <p>No movies in the watchlist.</p>
        ) : (
          watchList.map(movie => (
            <div 
              key={movie.id}
              className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl"
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}
            >
              <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>
                {movie.title}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WatchList;
