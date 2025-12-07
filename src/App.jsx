import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import WatchList from './components/WatchList';
import Movies from './components/Movies';
import Banner from './components/Banner';
import { useState } from 'react';  // Import useState

function App() {
  const [watchList, setWatchList] = useState([]);

  const handleWatchList = (movieObj) => {
    setWatchList(prevWatchList => [...prevWatchList, movieObj]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Banner />
              <Movies handleWatchList={handleWatchList} />
            </>
          } 
        />
        <Route 
          path="/watchlist" 
          element={<WatchList watchList={watchList} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
