import React from 'react'

import "../pages/css/trend.css";

import axios from 'axios';


const PageTrending = () => {
  const [posts,setPosts] = React.useState([]);

        React.useEffect(()=>{
            const getPosts = async () => {
                    
               try{
                        const data = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=bbf4abc4e3112c3a8b28301c1ad039ee')
                        .then((response) => response.data);

                        if(data){
                            setPosts(data.results);
                    }
                }
               catch(error){
                console.log(error)
               }
                
            }
            getPosts();
        },[])
        console.log(posts)  
  return (
    <div className='container trending-header'>
      <div className='trending-head'>
        <div className='trending'>
            <h2>Trending</h2> 
        </div>
        <div className='trending-right'>
          <div className='content-today'>
              <p>Today</p>
          </div>
          <div className='content-thisweek'>
              <p>This Week</p>
          </div>
        </div>
      </div>  
      <div className='trending-info overflow'>
      {posts.map(post => (
                <ul className='trending-width'>
                    <li key={post.id}>
                        <div className='trend_Item'>
                            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${post.poster_path}`} alt={post.title}/>
                            <div className='flex-wrapper'>
                                <div className='single-chart'>
                                    <svg viewBox="0 0 36 36" className='circular-chart green'>
                                    <path className='circle-bg'
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className='circle'
                                        stroke-dasharray="30, 100"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className='percentage'>{post.vote_average}</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='trend-title'><b>{post.title}</b></li>
                    <li className='trend-date'>{post.release_date}</li>
                </ul>
            ))}
            </div>
    </div>
    
  )

}


export default PageTrending