import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Message() {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message)
        return alert ('message sent!')
    };

  return (
    <div className='msg-form'>
        <form className='seller-msg' onSubmit={handleSubmit} >
        <label htmlFor='textArea' >Leave message here:</label>
        <br/>
        <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder='send seller a message'></textarea>
        <br/>
        <button>Send!</button>
        </form>
    </div>
 
  )
}

export default Message