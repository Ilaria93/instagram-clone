import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Button, TextField} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment , faPaperPlane, faBookmark , faFaceSmile} from '@fortawesome/free-regular-svg-icons';
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
  }));

export default function Card(props){
    const classes = useStyles();
    const image = props.image ;
    const name = props.name ;
    const number = props.number ;
    const comment_number = props.comment_number ;
    const pubblicetion = props.pubblicetion;

    return(
        <div className="card">
          <div className="card__header"> 
            <div className="card__headerLeft">
                <div className={classes.root}>
                    <Avatar alt="" src={image} className={classes.small}/>
                </div>
                <div className="card__leftText">
                    <p>{name}</p>
                    <p> <small> Città </small></p>
                </div>
            </div>
                <FontAwesomeIcon className="menu__icon" icon={faEllipsis} />
          </div>
          <div className= "card__pictures"></div>
          <div className= "card__icons">
            <div className= "card__icons-left">
                <FontAwesomeIcon className="card__icon" icon={faHeart} />
                <FontAwesomeIcon className="card__icon" icon={faComment} />
                <FontAwesomeIcon className="card__icon" icon={faPaperPlane} />
            </div>
            <div className= "card__icons-right">
                <FontAwesomeIcon className="card__icon" icon={faBookmark} />
            </div>
          </div>
          <div className= "card__text">
              <p>Piace a {number}</p>
              <p> {name}</p>
              <p>Mostra tutti i { comment_number} commenti</p>
              <p>{pubblicetion}</p>
          </div>
          <div className= "card__comment">
            <FontAwesomeIcon className="card__icon" icon={faFaceSmile} />
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Aggiungi commento..." variant="standard" />
            </form>
            <div className={classes.root}>
                <Button>Pubblica</Button>
            </div>
          </div>
          
        </div>
    )
}