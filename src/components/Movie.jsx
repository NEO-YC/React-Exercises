import React from 'react'

const Movie= ({genre, year, title, rating}) => {

   
  return (
       <p style={{ border: "3px solid grey" }}>
      <p>Title: {title}  </p>
      <p>Year: {year} </p>
      <p>Genre: {genre} </p>
      <p>Rating: {rating} </p>
    </p>
 
  )
}

export default Movie