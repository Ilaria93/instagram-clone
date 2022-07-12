import React from 'react'
// material-ui
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

// importing Link from react-router-dom to navigate to different end points.
import { Link } from 'react-router-dom'

//FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faGear, faRotate } from '@fortawesome/free-solid-svg-icons'

import profileImg from '../assets/Profile/profile.jpg'
import './styles/profileMenu.css'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      //   backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {},
    },
  },
}))(MenuItem)

export default function CustomizedMenus({ image }) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ backgroundImage: `url(${profileImg})` }}
      ></Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <FontAwesomeIcon
              icon={faCircleUser}
              className=""
              fontSize="small"
            />
          </ListItemIcon>
          <Link to="/profile">
            <ListItemText primary="Profilo" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={faBookmark} className="" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Elementi salvati" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={faGear} className="" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Impostazioni" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={faRotate} className="" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Cambia account" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  )
}
