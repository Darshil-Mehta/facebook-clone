import { Avatar } from '@material-ui/core'
import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Post({ profileSrc, content, username, timestamp, image }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar
                    className="post__avatar" 
                    src={profileSrc} 
                />
                <div className="post__info">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <h4>{content}</h4>
            </div>
            {
                !image ? null : 
                (<> 
                    <div className="post__image">
                    <img 
                        alt="post_img"
                        src={image}
                    />
                    </div>
                </>)
            }
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p className="dont__display">Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p className="dont__display">Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p className="dont__display">Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
