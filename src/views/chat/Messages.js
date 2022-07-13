import React, { useState } from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

//COMPONENTS
import Header from '../../components/Header'
import Direct from './Direct'

//Material - ui
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

//array
import { contacts } from '../../components/mock-data/contacts'
//style
import './messages.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: 10,
  },
}))

function Messages() {
  const [chatActive, setChatActive] = useState(false)

  let selectedContac = ''

  const selectChat = (e, c, i) => {
    setChatActive(true)
    console.log(e)

    selectedContac = c
    console.log(selectedContac)
    console.log('key index: ', i)
  }

  const classes = useStyles()
  const profileName = 'Vegeta'

  return (
    <div>
      <Header />
      <hr />
      <div className="messages">
        <div className="message__name">
          <div className="up">
            <span></span>
            <div className="name">
              <h4>{profileName} </h4>
              <FontAwesomeIcon
                className="message__angle-down"
                icon={faAngleDown}
              />
            </div>
            <FontAwesomeIcon className="message_pen" icon={faPenToSquare} />
          </div>
          <div className="message__down">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="message__avatar-content"
                onClick={(event) => selectChat(event, contact, index)}
              >
                <Avatar
                  alt={contact.name}
                  src={contact.image}
                  className={classes.large}
                ></Avatar>
                <div className="message__avatar-info">
                  <p>{contact.name}</p>
                  <div className="message__avatar-info-msg">
                    <p>{contact.message}</p>
                    <p>{contact.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="message__chat">
          <Direct direct={chatActive} friend={selectedContac} />
        </div>
      </div>
    </div>
  )
}
export default Messages
