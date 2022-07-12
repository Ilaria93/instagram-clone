import React from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

//COMPONENTS
import Header from '../../components/Header'
//style
import './messages.css'

function Messages() {
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
          <div className="message__down"></div>
        </div>
        <div className="message__chat">chat</div>
      </div>
    </div>
  )
}
export default Messages
