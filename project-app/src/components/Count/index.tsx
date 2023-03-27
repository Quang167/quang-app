import React, { useState } from "react";

export default function Count() {
    let [count, setCount] = React.useState(0);
    let [username, setUsername] = React.useState('Nam ANh');

    let [users, setUsers] = React.useState({
        name: 'users',
        age: 18
    })

    let handeClick = () => {
        setCount(n => n + 1)
        setCount(n => n + 1)
        setCount(n => n + 1)

        //Cách 1
        setUsers({
            name: 'users',
            age: 20
        });
        // Cách 2
        setUsers({
            ...users,
            age: 20
        });
        // Cách 3
        setUsers(prev => prev = {
            ...users,
            age: 20
        });

    }

    let handleChangeUsername = (e:any) => {
        setUsername(e.target.value);
    }
    console.log('run')
    return ( <
        >

        
        < button onClick = { handeClick } >
        Increment 3 +
        
        </button>

       
        <h3 > { count }
        </h3>  
        <input onChange = { handleChangeUsername }
        type = 'text'
        name = "username"
        value = { username }
        />  
        </>
    );
}