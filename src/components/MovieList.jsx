import React from 'react'
import Movie from './Movie';
import { useState } from 'react';

function MovieList() {

    const MoviesArray=[
      {title: "The Shawshank Redemption", genre: "Drama", year: 1994, rating: 9.3},
      {title: "The Godfather", genre: "Crime", year: 1972, rating: 9.2},
      {title: "The Dark Knight", genre: "Action", year: 2008, rating: 9.0},
      {title: "12 Angry Men", genre: "Drama", year: 1957, rating: 8.9}, 
      {title: "Schindler's List", genre: "Biography", year: 1993, rating: 8.9},
      {title: "The Lord of the Rings: The Return of the King", genre: "Adventure", year: 2003, rating: 8.9},
      {title: "Pulp Fiction", genre: "Crime", year: 1994, rating: 8.9},
    ]
    
// state
    const [search, setSearch] = React.useState("");
    const [option, setOption] = useState("title"); 
   


   // פונקציה לסינון הסרטים לפי תגית חיפוש 
    const filteredMovies=  option === "title" ? MoviesArray.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    ) : option === "year" ? MoviesArray.filter(movie =>
      movie.year.toString().includes(search)
    ) : option === "genre" ? MoviesArray.filter(movie =>
      movie.genre.toLowerCase().includes(search.toLowerCase())
    ) : option === "rating" ? MoviesArray.filter(movie =>
      movie.rating.toString().includes(search)
    ) : MoviesArray;


    // יצירת רשימת סרטים להצגה
    const movieList = filteredMovies.map((item, index) => (
      <Movie
        key={index}
        genre={item.genre}
        year={item.year}
        title={item.title}
        rating={item.rating}
      />
    ));

 

  return (
      <>
       <input
        type="text"
        placeholder="Search by"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={option} onChange={(e) => setOption(e.target.value)} name="" id="">
      <option value="title">title</option>
      <option value="year">year</option>
      <option value="genre">genre</option>
      <option value="rating">rating</option>  
      </select>

      <p>{filteredMovies.length} movies found</p>
      {movieList}
    </>
  )
}

export default MovieList