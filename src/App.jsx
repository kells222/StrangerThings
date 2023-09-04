import React, {useState,useEffect} from 'react';
import { fetchAllPosts } from './api';


function App() {
const [posts, setPosts] = useState([]);

    useEffect (()=>{
        const getAllPosts = async()=>{
            const posts = await fetchAllPosts();
            setPosts(posts);
        }
        getAllPosts();
    },[])

  return (
    <div>
        <h1>App  </h1>
    </div>
  )
}

export default App;