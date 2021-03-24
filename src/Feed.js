import React from 'react'
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Posts from "./Posts"
import StorySender from "./StorySender"

function Feed() {
    return (
        <div className="feed">
            <StorySender />
            <StoryReel />
            <MessageSender />
            <Posts />
        </div>
    )
}

export default Feed
