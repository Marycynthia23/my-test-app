import React,{useState, } from 'react';
import styles from './Search.module.css';
import Cards from '../Cards/Cards';
export const Search = (props) => { 

const [term, setTerm] = useState([]);
const [search, setSearch] = useState("")

const movieText = "Harry";

const API_BASE_URL = "http://www.omdbapi.com";
const API_KEY = "12423aa9";
console.log(API_KEY)


 const handleSearch = (event) => {
    //event.preventDefault()
    const {value} = event.target
    setSearch(value)
    console.log(search)
 }

  const handleSelctedMovieList =(event) =>{
      event.preventDefault()

    //console.log(search)
    fetch(`${API_BASE_URL}?apiKey=${API_KEY}&s=${movieText}&type=movie`).then(response => response.json())
    .then(response => {
        console.log(response)
        setTerm(response.data);
    })
    .catch(error => {
        console.log(error)
    })


    
}

return(
         <div className={styles.SearchContainer}>
            <div className={styles.SearchInputContainer}>
                <input type="text" value={search} name="search" onChange={handleSearch} className={styles.SearchInput} placeholder="Search here"/>
            </div>


            <div className={styles.movieBox}>
            {term.map((movie, index) => {
              return (
                <div className={styles.box} key={index}  onClick ={() => handleSelctedMovieList(term)}>
                  <Cards name={movie.Title} imgSrc={movie.Poster} />
                </div>
              );
            })}
          </div>
        </div>
        
    
   
)
}