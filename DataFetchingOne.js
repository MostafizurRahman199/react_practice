import axios from 'axios';
import React, {useState, useEffect} from 'react'

const DataFetchingOne = () => {

 const [loading, setLoading] = useState(true);
 const [error, setError] = useState('');
 const [post, setPost] = useState({});

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
        setLoading(false);
        setPost(response.data);
    }).catch((error)=>{
       setLoading(false);
       setPost({});
       setError('Something error wrong');
    })
},[]);

  return (
    <div>DataFetchingOne
        {loading ? 'loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne