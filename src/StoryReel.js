import React, { useState, useEffect } from 'react'
import "./StoryReel.css"
import Story from "./Story"
import { useStateValue } from "./StateProvider"
import db from "./firebase"

function StoryReel() {
    const [{ user }, dispatch] = useStateValue();
    const [story, setStory] = useState([]);
    useEffect(() => {
        db.collection('story').orderBy('timestamp','desc').onSnapshot(snapshot => {
            setStory(snapshot.docs.map(doc => ( { id: doc.id, data: doc.data() } )))
        });
    }, [])
    return (
        <div className="storyReel">
            {story.map(s => (
                <Story 
                    key={s.data.id}
                    profileSrc={s.data.profilePic}
                    timestamp={s.data.timestamp}
                    username={s.data.username}
                    image={s.data.image}
                />
            ))}
        </div>
    )
}

export default StoryReel
