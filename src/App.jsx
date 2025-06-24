import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Movie from './component/Movie'
import { movies } from './Data'
import './css/Movie.css'


function App() {

  return (
    <>
      <div>
        <Header />
        <div className='movie-main'>
          {movies?.map((movie) =>
            <Movie key={movie.id} movie={movie} />

          )}

        </div>


      </div>
    </>
  )
}

export default App
