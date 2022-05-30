import React from 'react';
import {IconButton} from "@material-ui/core"
import Search from './Search';
import "./styles/header.css"
import InstaLogo from "../assets/logo.png";
import SideMenu from './SideMenu';


export default function Header() {
  return (
   <div className="header">
       <div className="header__left">
            <IconButton edge="start" className="header__menuicon" color="inherit" aria-label="menu">
                <img src= {InstaLogo} className="header__logo"/>
            </IconButton>
       </div>
       <div className="header__center">
           <Search/>
       </div>
       <div className="header__right">
           <SideMenu/>  
       </div>
   </div>

      
  
  );
}
