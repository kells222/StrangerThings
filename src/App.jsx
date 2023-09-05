import React, {useState,useEffect} from 'react';
import { fetchAllPosts } from './api';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
const [posts, setPosts] = useState([]);

    useEffect (()=>{
        const getAllPosts = async()=>{
            const posts = await fetchAllPosts();
            setPosts(posts);
        }
        getAllPosts();
    },[])

    // const [currForm,setCurrForm] = useState('login')

  return (
    <div>
        <h1>Sell Your Things</h1>
        <BrowserRouter>
        <Routes>
            
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/posts' element={<Posts posts={posts}/> } />
        </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default App;