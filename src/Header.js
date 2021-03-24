import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionOutlinedIcon from '@material-ui/icons/Subscriptions'
import StoreFrontOutlinedIcon from '@material-ui/icons/Storefront'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar, IconButton } from '@material-ui/core'
import { useStateValue } from './StateProvider'

function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img 
                    alt="facebook_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png"
                />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" 
                        placeholder="Search Facebook"
                    />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <SubscriptionOutlinedIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <StoreFrontOutlinedIcon fontSize="large" /> 
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" /> 
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar 
                        src={user.photoURL}
                    />
                    <h4>{user.displayName}</h4>
                </div>
                <div className="header__buttons">
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
