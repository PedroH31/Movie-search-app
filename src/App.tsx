import { useState, useEffect } from 'react'
import Header from "./components/Header"
import MovieCard from "./components/MovieCard"
import {StyledMovieList} from "./styled-components/Styles"

interface Movie {
  adult: boolean;
  backdrop_path: null
  genre_ids: []
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([])

  useEffect(() => {
    async function defaultMovieList() {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6100bddb3f750ab9ba35c21920848b03&sort_by=popularity`)
      const data = await res.json()

      setMovieList(data.results.slice(0, 10))
    }
    defaultMovieList()
  }, [])
  
  const handleSearch = async (query: string) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6100bddb3f750ab9ba35c21920848b03&query=${query}`
      )

      if (!res.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await res.json()
      setMovieList(data.results.slice(0, 10))
    }catch(error) {
      console.error("Error fetching data:", error)
    }
  }

  const movieElements = movieList.map(movie => (
    <MovieCard 
      key={movie.id}
      id={movie.id}
      title={movie.title}
      releaseDate={movie.release_date}
      rating={movie.popularity}
      description={movie.overview ? movie.overview : "No description"}
      imgUrl={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` :
      "https://t3.ftcdn.net/jpg/03/01/83/28/360_F_301832885_XSg1F3ba571JjJ1RCrSnXs5VFvyopVMD.jpg"
    }
    />
  ))

  return (
    <>
      <Header
        handleSearch={handleSearch}
      />
      <StyledMovieList>
        {movieElements}
      </StyledMovieList>
    </>
    
  )
}

export default App
