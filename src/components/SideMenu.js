import React from 'react'

// importing NavLink from react-router-dom to navigate to different end points.
import { NavLink } from 'react-router-dom'

//Icon from fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import {
  faPaperPlane,
  faCompass,
  faHeart,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons'

//components
import ProfileMenu from './ProfileMenu'
import SelectedMenu from './SelectedMenu'
import Modal from './Modal'

import profileImg from '../assets/Profile/profile.jpg'

import './styles/sideMenu.css'

function MenuIcon({ image }) {
  return (
    <div className="menu__item">
      <ProfileMenu src={image}></ProfileMenu>
    </div>
  )
}

function CustomNavLink({ to, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
    >
      <FontAwesomeIcon className="menu__icon" icon={icon} />
    </NavLink>
  )
}
export default function SideMenu() {
  return (
    <div className="menu">
      <div className="menu__item">
        <CustomNavLink to={'/'} icon={faHouse} />
        <CustomNavLink to={'/messages'} icon={faPaperPlane} />
        <Modal
          title={'Crea un nuovo post'}
          text={'Trascina le foto e i video qui'}
          icon={faSquarePlus}
        />
        <CustomNavLink to={'/people'} icon={faCompass} />
        <SelectedMenu icon={faHeart} />
        <MenuIcon image={profileImg} label="profile" />
      </div>
    </div>
  )
}
