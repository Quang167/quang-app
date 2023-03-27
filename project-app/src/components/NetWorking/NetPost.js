import React from 'react';
import axios from 'axios';

const NetPost =  () => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(()=>{
        const getPosts = async () =>{
            const options = {};
            const url = 'https://641c4288b556e431a869cc9b.mockapi.io/api/v1/Batch29';
            // url : endpoint API
            // options là tùy chọn

            // const response = await fetch(url, options);
            // const results = await response.json();

            //await axios.get(url)
            try {
                const data = await axios.get(url)
                .then((response) => response.data);

                console.log(data);
                if(data){
                    setPosts(data);
                }
            } catch(error) {
                // handle error
                console.log(error);
            }
        
           
        
        }

        getPosts();
    },[]);


    console.log(posts);


  return (
    <div>
        <h1>Tin tức</h1>
        <ul> 
            {posts.map((post)=>{
                return (<li key={post.id}>{post.name}</li>)
            })}
        </ul>
    </div>
  )
}

export default NetPost