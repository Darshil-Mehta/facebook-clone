import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase"
import { actionTypes } from "./reducer"
import { useStateValue } from "./StateProvider"

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch(error => {
            alert(error.message);
        })
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    alt="facebook_logo"
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
                    className="facebook_logo"
                />
                <img 
                    alt="facebook_text"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
                    className="facebook_text"
                /> 
            </div>
            <Button className="login__button" type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
