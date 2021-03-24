import React, { useState, useEffect } from 'react'
import "./Posts.css"
import Post from "./Post"
import db from "./firebase"

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ( { id: doc.id, data: doc.data() } )))
        });
    }, [])
    return (
        <div className="posts">
            {posts.map(post => (
                <Post 
                    key={post.data.id}
                    profileSrc={post.data.profilePic}
                    content={post.data.content}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Posts
