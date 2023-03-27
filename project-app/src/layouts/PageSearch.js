import React from 'react'
import "../layouts/search.css";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const PageSearch = () => {
  return (   
      <div className='container search-wrapper'>   
        <div className='search-content'>
          <h1>Welcome.</h1>
          <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
          <div className='search-info'>
          <input type="text" placeholder='Search for a movie,tv show,person ......'/>
          <button className='search'>Search</button>
          </div>
          </div>
         
      </div>
  
  )
}

export default PageSearch