import React, {useState,useEffect} from 'react';
import { fetchAllPosts } from './api';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './components/Posts';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/css/NavBar';
import Message from './components/Message';
import Profile from './components/Profile';


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
        <NavBar/>
        
     
        <Routes>
            <Route path='/message' element={<Message />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/' element={<Posts posts={posts}/> } />
        </Routes>
       
       
    </div>
  )
}

export default App;