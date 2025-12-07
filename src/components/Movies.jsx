import { useEffect, useState } from 'react';  // Import useState and useEffect
import MoviesCard from './MoviesCard';
import Pagination from './pagination';

function Movies({ handleWatchList }) {
  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handleNext = () => {
    setPageNo(prevPageNo => prevPageNo + 1);
  };

  const handlePrev = () => {
    setPageNo(prevPageNo => (prevPageNo > 1 ? prevPageNo - 1 : 1));
  };

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c06b74acb89a75294b9e7ad12196c1aa&language=en-US&page=${pageNo}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results))
      .catch(error => console.error('Failed to fetch movies:', error));
  };

  useEffect(() => {
    getMovie();
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-xl m-5 font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movieList.map(movie => (
          <MoviesCard 
            key={movie.id}
            movieObj={movie}   // Pass the movie object directly
            movie={movie}
            name={movie.title}
            handleWatchList={handleWatchList}
          />
        ))}
      </div>
      <Pagination 
        pageNo={pageNo} 
        handleNext={handleNext} 
        handlePrev={handlePrev} 
      />
    </div>
  );
}

export default Movies;
