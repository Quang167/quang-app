import React from 'react'

const AddUser = () => {

    const [status, getStatus] = React.useState(false);
    const [loading, setLoadding] = React.useState(false);

    const handleSubmit = async ()=>{
        const url = `https://641c4288b556e431a869cc9b.mockapi.io/api/v1/Batch29`;

        const payload = {
            
                "createdAt" : "2023-03-23T08:42:44.332Z",
                "name" : "Quang167",
                "avatar" : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/432.jpg",
                "age" : 84300,
                "email" : "Jo.Quigley27@example.com",
                "role": true
            
        }
        const options = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(payload), // body data type must match "Content-Type" header
        }
        const response = await fetch(url, options);

        if(response.ok){
            setLoadding(false);
            getStatus(true);
        }

        const results = await response.json();

        console.log(results);

    }
  return (
    <div>
        {status && <h1>Thành Công</h1>} 
        {loading && <p>Loading....</p> }
       <button disabled={loading} onClick={handleSubmit}>AddUser</button> 


    </div>
  )
}

export default AddUser