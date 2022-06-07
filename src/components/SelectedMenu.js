import React from 'react';
import {Menu, MenuItem}from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import goku from '../assets/Profile/goku.jpeg';
import trunks from '../assets/Profile/trunks-future.jpeg';
import bulma from '../assets/Profile/Bulma&V.jpeg';
import bra from '../assets/Profile/bra.png';
import Avatar from '@material-ui/core/Avatar';
import './styles/selectedMenu.css'

export default function SimpleMenu(props) {
    const icon = props.icon ;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const options = [
        { 
            image: bra,
            name:'Bra',
            text :'Ha iniziato a seguirti.',
            time: '1g'
        },
        { 
            image: goku,
            name: 'Goku',
            text :'Ha messo Mi piace al tuo commento: "CACAROOOT!!!"',
            time: '3g'
        },    
        { 
            image: bulma,
            name: 'Bulma',
            text :'Piace la tua foto.',
            time: '4g'
        },
        { 
            image: trunks,
            name: 'Trunks',
            text :'Piace la tua foto.',
            time: '4g'
        },
    
    ];

    return (
        <div>
            <FontAwesomeIcon className="menu__icon" icon={icon} onClick={handleClick}/>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            
            >
                <p className="menu__title">Questa settimana</p>
                {options.map((option, index) => (
                    <MenuItem onClick={handleClose } className="menuItem">
                        <Avatar alt="goku" src={option.image}  className="avatar"></Avatar>
                        <p className="menuItem__name">{option.name}</p>
                        <p className="menuItem__text">{option.text}</p>
                        <p className="menuItem__time">{option.time}</p>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
