import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import "./styles/sideMenu.scss";

function MenuIcon({icon, label}) {
    return (
        <div className="menu__item">
            
        </div>

    )
}

export default function SideMenu(){
    return(
        <div className="menu">
             <div className="menu__item">
                <FontAwesomeIcon className="menu__icon" icon={solid('house')}/>
                <FontAwesomeIcon className="menu__icon" icon={regular('envelope')}/>
                <FontAwesomeIcon className="menu__icon" icon={regular('square-plus')}/>
                <FontAwesomeIcon className="menu__icon" icon={regular('compass')}/>
                <FontAwesomeIcon className="menu__icon" icon={regular('heart')}/>
                <MenuIcon icon="x" label="profile"/>   
            </div> 
        </div>
    )
}