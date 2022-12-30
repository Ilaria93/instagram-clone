import React, { useState, useRef } from 'react'

//MATIRIAL-UI
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button } from '@material-ui/core'

//FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faFaceSmile,
} from '@fortawesome/free-regular-svg-icons'

//COMPONENTS
import Carousel from './carousel/Carousel'

//STYLES
import './styles/card.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}))

export default function Card(props) {
  const classes = useStyles()
  const {
    image,
    city,
    name,
    number,
    comment_number,
    pubblication,
    background,
  } = props

  const [components, setComponents] = useState([''])

  const inputRef = useRef(null)

  const postComment = () => {
    console.log(inputRef.current.value)

    setComponents([...components, inputRef.current.value])
  }

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__headerLeft">
          <div className={classes.root}>
            <Avatar alt="" src={image} className={classes.small} />
          </div>
          <div className="card__leftText">
            <p>{name}</p>
            <p>
              <small> {city} </small>
            </p>
          </div>
        </div>
        <FontAwesomeIcon className="menu__icon" icon={faEllipsis} />
      </div>
      {typeof background !== 'string' || !background instanceof String ? (
        <Carousel Images={background} />
      ) : (
        <div
          className="card__pictures"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
          }}
        ></div>
      )}

      <div className="card__icons">
        <div className="card__icons-left">
          <FontAwesomeIcon className="card__icon" icon={faHeart} />
          <FontAwesomeIcon className="card__icon" icon={faComment} />
          <FontAwesomeIcon className="card__icon" icon={faPaperPlane} />
        </div>
        <div className="card__icons-right">
          <FontAwesomeIcon className="card__icon" icon={faBookmark} />
        </div>
      </div>
      <div className="card__text">
        <p>Piace a {number}</p>
        <p> {name}</p>
        <p>Mostra tutti i {comment_number} commenti</p>

        {components.map((item, i) => (
          <p className="card__text-comment" key={i}>
            Vegeta
            <span> {item}</span>
          </p>
        ))}

        <p>{pubblication}</p>
      </div>
      <div className="card__comment">
        <FontAwesomeIcon className="card__icon" icon={faFaceSmile} />
        <form className={classes.root} noValidate autoComplete="off">
          <input
            className="card__input"
            placeholder="Aggiungi commento..."
            variant="outlined"
            ref={inputRef}
            type="text"
          />
        </form>
        <div className={classes.root.btn}>
          <Button onClick={postComment} className="btn__public">
            Pubblica
          </Button>
        </div>
      </div>
    </div>
  )
}
