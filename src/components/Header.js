import React from 'react';
import {IconButton, Button, Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css"

export default function Header() {
  return (
   <div className="header">
       <div className="header__left">
            <IconButton edge="start" className="header__menuicon" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="header__title">
                News
            </Typography>
       </div>
       <div className="header__right">
           <Button color="inherit">Login</Button>
       </div>
   </div>

      
  
  );
}
