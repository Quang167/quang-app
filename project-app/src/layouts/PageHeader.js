import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom'
import "../layouts/header.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

function PageHeader() {
  return (
    <header >
    <div className='container'>
       <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB" />
        <div className='header-content'>
        <NavDropdown title="Movies" id="basic-nav-dropdown" className='dropdown-content'>
              <NavDropdown.Item href="#action/3.1"><Link to="/popular">Popular</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/nowplaying">Now Playing </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/upcoming">Upcoming</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/toprated">Top Rated</Link></NavDropdown.Item>
                   
        </NavDropdown>
        <NavDropdown title="TV Shows" id="basic-nav-dropdown" className='dropdown-content'>
              <NavDropdown.Item href="#action/3.1"><Link to="/popular">Popular</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <Link to="/airingtoday">Airing Today</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/ontv">On TV</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/toprated">Top Rated</Link></NavDropdown.Item>
                   
        </NavDropdown>
        </div>
    </div>
    </header>
  );
}

export default PageHeader;