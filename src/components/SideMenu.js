import React from 'react';
import {IconButton } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faCompass, faHeart, faSquarePlus  } from '@fortawesome/free-regular-svg-icons';
import profileImg from '../assets/Profile/profile.jpg'
import ProfileMenu from './ProfileMenu'

import "./styles/sideMenu.css";

function MenuIcon({image}) {
    return (
        <div className="menu__item">
            <ProfileMenu src={image}></ProfileMenu>
        </div>
    )
}

export default function SideMenu(){
    return(
        <div className="menu">
            <div className="menu__item">
            <IconButton edge="start" color="inherit" onClick={() => { alert('clicked') }}>
                <FontAwesomeIcon className="menu__icon" icon={faHouse } />
            </IconButton>
            <IconButton edge="start" color="inherit">
                <FontAwesomeIcon className="menu__icon" icon={faPaperPlane} />
            </IconButton>
            <IconButton edge="start" color="inherit">
                <FontAwesomeIcon className="menu__icon" icon={faSquarePlus} />
            </IconButton>
            <IconButton edge="start" color="inherit">
              <FontAwesomeIcon className="menu__icon" icon={faCompass} /> 
            </IconButton>
            <IconButton edge="start" color="inherit">
                <FontAwesomeIcon className="menu__icon" icon={faHeart} />
            </IconButton>
            <MenuIcon image={profileImg} label="profile"/>   
            </div> 
        </div>
    )
}