import React from 'react'


const Forms = () => {
    let [username, setUsername] = React.useState<string>("");
    let [content, setContent] = React.useState<string>("");
    let [isHidden, setIsHidden] = React.useState<boolean>(true);

    let HandleOnChangeContent =(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        console.log(e.target.value);
        setContent(e.target.value);
    }
  return (
    <div>
        <form className='registerForm'>
            <div>
                <label htmlFor="">Username</label> <br/>
                <input onChange={(e)=>{
                    console.log(e.target.value);
                    setUsername(e.target.value )
                }}
                value={username} type="text" name='username'/>
            </div>
            <div>
                <label htmlFor="">Content</label> <br/>
                <textarea onChange={(e)=>HandleOnChangeContent(e)} value={content} name="content" ></textarea>
            </div>
            <div>
                <label htmlFor="">Hidden</label> <br/>
                <input type="checkbox" onChange={(e)=>{
                    console.log(e.target.checked);
                    setIsHidden(!isHidden)
                }} checked={isHidden} name="hidden" value={1}/>
            </div>
        </form>
    </div>
  )
}

export default Forms