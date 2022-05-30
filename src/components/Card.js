import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis} from '@fortawesome/free-solid-svg-icons';
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

export default function Card(){
    const classes = useStyles();
    return(
        <div className="card">
          <div className="card__header"> 
            <div className="card__headerLeft">
                <div className={classes.root}>
                    <Avatar alt="" src="" className={classes.small}/>
                </div>
                <div className="card__leftText">
                    <p>Son Goku</p>
                    <p> <small> Città </small></p>
                </div>
            </div>
                <FontAwesomeIcon className="menu__icon" icon={faEllipsis} />
          </div>
        </div>
    )
}