import React from 'react'

//material-ui

//STYLES
import './styles/header.css'

// COMPONENTS
import Search from './Search'
import SideMenu from './SideMenu'

// importing Link from react-router-dom to navigate to different end points.
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <div className="header__menuicon">DragonGram</div>
        </Link>
      </div>
      <div className="header__center">
        <Search />
      </div>
      <div className="header__right">
        <SideMenu />
      </div>
    </div>
  )
}
