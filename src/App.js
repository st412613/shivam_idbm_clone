
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Header } from "./component/header/Header";
import { Home } from './Pages/Home/Home';
import { MovieList, MovieListt } from './component/movieList/MovieListt';
import { Movie, Moviee } from './component/movie_detail/Movie';

function App() {
  return (
    <div className="App">
      <Router>
            <Header/>
             <Routes>
             <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Moviee />}></Route>
                <Route path="movies/:type" element={<MovieListt />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
             </Routes>
      </Router>
   
    </div>
  );
}

export default App;
