import React, { useState, useRef } from 'react'

//COMPONENTS
import BlueButton from '../../components/buttons/BlueButton'
import icon from '../../assets/messageIcon.png'
import ListMessages from './ListMessages'

import { randomAnswers } from '../../components/mock-data/answer'

//Material - ui
import { Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleQuestion,
  faFaceSmile,
  faImage,
} from '@fortawesome/free-regular-svg-icons'

//STYLE
import './direct.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: { width: theme.spacing(3), height: theme.spacing(3), marginRight: 10 },
}))

function Direct(props) {
  const { direct, friend = {} } = props

  const inputRef = useRef(null)

  const [components, setComponents] = useState([''])
  const [isTyping, setIsTyping] = useState(false)

  //use to cange icon on typing
  const handleKeyPress = (event) => {
    setIsTyping(true)
  }
  //use to add message to direct and answer
  const handleSendMessage = () => {
    console.log(inputRef.current.value)
    let answer = randomAnswers[Math.floor(Math.random() * randomAnswers.length)]

    setComponents([...components, inputRef.current.value, answer])
  }

  const classes = useStyles()

  return (
    <div style={{ height: '100%' }}>
      {direct ? (
        <div className="direct__chat ">
          <div>
            <div className="up">
              <Avatar
                alt={friend.name}
                src={friend.image}
                className={classes.small}
              ></Avatar>
              <div className="direct__name">
                <p>{friend.name}</p>
              </div>
              <FontAwesomeIcon
                className="message_pen"
                icon={faCircleQuestion}
              />
            </div>
            <div className="direct__body">
              <span className="direct__timeStamp">
                {new Date().toUTCString()}
              </span>
              <p className="direct__message">{friend.message}</p>

              <div>
                {components.map((item, i) => (
                  <ListMessages key={i} text={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="textInput">
            <FontAwesomeIcon className="message_pen" icon={faFaceSmile} />
            <form>
              <input
                className="direct__input"
                placeholder="Scrivi un messaggio..."
                ref={inputRef}
                type="text"
                onKeyPress={handleKeyPress}
              />
            </form>
            {isTyping ? (
              <Button
                className="btn__send"
                type="submit"
                onClick={handleSendMessage}
              >
                Invia
              </Button>
            ) : (
              <FontAwesomeIcon className="message_pen" icon={faImage} />
            )}
          </div>
        </div>
      ) : (
        <div className="direct">
          <img alt="" src={icon} className="image" />
          <h4 className="mt">I tuoi messaggi</h4>
          <p className="text">
            Invia foto e messaggi privati a un amico o gruppo.
          </p>
          <BlueButton label={'Invia messaggio'}></BlueButton>
        </div>
      )}
    </div>
  )
}
export default Direct
