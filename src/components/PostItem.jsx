import React from 'react'

function PostItem({post}) {
  return (
    <div>
        <h2>{post.title}</h2>
        <div> <h4>Location:</h4>{post.location} 
            <h4>Seller:</h4>{post.author.username}
            <h4>Price:</h4>{post.price} 
            <h4>Descripton:</h4> {post.description}</div>
        {/* <button onClick={message}>Send Message</button> */}

    </div>
  )
}

export default PostItem