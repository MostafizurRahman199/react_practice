import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DataFetching = () => {

    const[post , setPost] = useState({});
    const [id, setId] = useState(1);
    const[idButton, setIdButton] = useState(1);

    useEffect(()=>{

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`).then(res => {
            console.log(res);
            setPost(res.data);
        }).catch(err => console.log(err));

    },[idButton])

    const idButtonChange = ()=>{
        setIdButton(id)
    }

  return (
    
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
        <button onClick={()=>idButtonChange()}>Fetch Post</button>

        {/* <ul>
            {
                post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul> */}


        <div>
            <h1>Title : </h1>
            <h2> {post.title}</h2>
           
           <h1> Body : </h1> 
           <h2>{post.body}</h2>
        </div>
    </div>
  )
}

export default DataFetching