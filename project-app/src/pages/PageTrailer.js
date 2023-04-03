import React from 'react'

import "../pages/css/trailer.css";

import axios from 'axios';


const PageTrailer = () => {
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
    <div className='container trailer-header'>
      <div className='trailer-head'>
        <div className='trailer'>
            <h2>Latest Trailers</h2> 
        </div>
        <div className='trailer-right'>
          <div className='content-ontv'>
              <p>On TV</p>
          </div>
          <div className='content-intheaters'>
              <p>In Theaters</p>
          </div>
        </div>
      </div>
      <div className='trailer-info overflow'> 
      {posts.map(post => (
                <ul className='trailer-width'> 
                    <li key={post.id}>
                        <div className='trailer_Item'>
                            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${post.poster_path}`} alt={post.title}/>
                            
                           
                        </div>
                    </li>
                    <li className='trailer-title'><b>{post.title}</b></li>
                    <li className='trailer-date'>{post.release_date}</li>
                </ul>
            ))}
        </div> 
    </div>
    
  )

}


export default PageTrailer