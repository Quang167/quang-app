import React, {useContext} from 'react';

import "../layouts/footer.css";

const PageFooter = () => {

  return (
    <footer>
      <nav>
        <div className='join'>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" width={130} height={64} alt="TMDB" />
            <a href="#" className='rounded'>Join the Community</a>
        </div>
        <div>
          <h3>The Basics</h3>
          <ul>
            <li>
              <a href="">Giới thiệu về TMDB</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Support Forums</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
            <li>
              <a href="">System Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Get involved</h3>
          <ul>
            <li>
              <a href="">Contribution Bible</a>
            </li>
            <li>
              <a href="">Add New Movies</a>
            </li>
            <li>
              <a href="">Add New TV Show</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li>
              <a href="">Guidelines</a>
            </li>
            <li>
              <a href="">Discussions</a>
            </li>
            <li>
              <a href="">leaderboard</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">API Terms of Use</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </nav>
   </footer>
  );
}

export default PageFooter