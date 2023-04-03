import React from 'react';
import "../pages/css/jointoday.css";

const PageJoinToday = () => {
  return (
    <div className='container jointoday'>
        <h2>JoinToday</h2>
        <div className='jointoday-content'>
            <div>
                <p>Get access to maintain your own <i>custom personal lists, track what you've seen</i> and search and filter for <i>what to watch next</i>—regardless if it's in theatres, on TV or available on popular streaming services like .</p>
                <button className='jointoday-button'>Sign Up</button>
            </div>
            <div>
                <ul >
                    <li>Enjoy TMDB ad free</li>
                    <li>Maintain a personal watchlist</li>
                    <li>Filter by your subscribed streaming services and find something to watch</li>
                    <li>Log the movies and TV shows you've seen</li>
                    <li>Build custom lists</li>
                    <li>Contribute to and improve our database</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PageJoinToday