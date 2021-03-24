import { Avatar } from '@material-ui/core'
import React, {useState} from 'react'
import "./MessageSender.css"
import { useStateValue } from "./StateProvider"
import db from "./firebase"
import firebase from "firebase"

function StorySender() {
    const [{ user }, dispatch] = useStateValue();

    const [imageURL, setImageURL] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('story').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL,
        })
        setImageURL("")
    }
    
    return (
        <div className="messageSender">
            <h4 className="title">Add a story</h4>
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={imageURL}
                        onChange={e => setImageURL(e.target.value)}
                        type="text"
                        className="messageSender__input"
                        placeholder="Image URL"  
                    />
                    <button onClick={handleSubmit} type="submit">
                        Add Story
                    </button>
                </form>
            </div>
        </div>
    )
}

export default StorySender

