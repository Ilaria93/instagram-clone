import React from 'react';
import {IconButton } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faCompass, faHeart, faSquarePlus  } from '@fortawesome/free-regular-svg-icons';
import profileImg from '../assets/profile.jpg'

import "./styles/sideMenu.css";

function MenuIcon({image}) {
    return (
        <div className="menu__item">
            <img src={image} className="menu__profile"/> 
        </div>
    )
}

export default function SideMenu(){
    return(
        <div className="menu">
            <div className="menu__item">
            <IconButton edge="start" color="inherit">
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