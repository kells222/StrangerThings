import React from 'react'
import PostItem from './PostItem'
import { Card } from 'react-bootstrap';
// import '.App.css'

// was watching another video and the guy does props.posts to get his stuff to work for me props never worked when i tried to render it. is that something that shuld normally work or was he doing something different cuz i was following him exactly.. or so i thought.

function Posts({posts}) {
    console.log(posts)
  return (
    <>
    
    <div>
        <h1>Sellers Posts</h1>
        {posts.map((post)=>{
          return (
            <>
            <PostItem key={post._id} post={post} />
            <Card/>
            </>
            
            ) 
        })}
    </div>
    </>
  )
}

export default Posts
