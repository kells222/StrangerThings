import React from 'react';
// import Card from './Card';

function PostItem({post}) {
  return (
    <div>
        <h2>{post.title}</h2>
        <div> 
            <h4>Location:</h4>{post.location} 
            <h4>Seller:</h4>{post.author.username}
            <h4>Price:</h4>{post.price} 
            <h4>Descripton:</h4>{post.description}
        </div>
        <button id='msg-btn'>Send Message</button>
        <button id='delete-btn'>Delete Post</button>

    </div>
  )
}


export default PostItem;
