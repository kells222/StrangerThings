import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import Signup from "./Signup";


function Login() {
    const [user, setUser] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        // console.log(password);
    }

  

  return (
<>

<div className="auth-form-container">
    <h3>Login to account</h3>
    <form method="POST" className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} type='text' placeholder='Your Username' id='username' name='username' /> <br/>
        <label htmlFor='password'>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Your Password' id='password' name='password'/> <br/>
        <button type='submit'>Log me in!</button>
    </form>
    <Link to='/signup' className="link-btn">No account? Sign-up here</Link>
    {/* <button className='link-btn' >No account? Sign-up here</button> */}
</div>
</>
  )
}

export default Login