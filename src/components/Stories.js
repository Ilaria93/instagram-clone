import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import './styles/stories.css';

import goku from '../assets/Profile/goku.jpeg'
import trunks from '../assets/Profile/trunks-future.jpeg';
import Goan from '../assets/Profile/goan.png';
import bulma from '../assets/Profile/Bulma&V.jpeg';
import Goten from '../assets/Profile/goten.jpeg';
import Pan from '../assets/Profile/pan.jpeg';
import Bra from '../assets/Profile/bra.png';
import Cyborg from '../assets/Profile/c-18.jpeg';

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
    }
}));


export default function Stories(){
    const classes = useStyles();
    return(
        <div className="stories__content">
            <div className="first_stories">
                
                <Avatar alt="goku" src={goku} className={classes.large}></Avatar>
                <p>Son Goku</p>
            </div>
            <div className="first_stories">
                <Avatar alt="trunks" src={trunks} className={classes.large}></Avatar>
                <p>Trunks</p>
            </div>
            <div className="first_stories">
                <Avatar alt="Goan" src={Goan} className={classes.large}></Avatar>
                <p>Son Goan</p>
            </div>
            <div className="first_stories">
                <Avatar alt="bulma" src={bulma} className={classes.large}></Avatar>
                <p>Bulma</p>
            </div>
            <div className="first_stories">
                <Avatar alt="goten" src={Goten} className={classes.large}></Avatar>
                <p>Son Goten</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={Pan} className={classes.large}></Avatar>
                <p>Pan</p>
            </div>
            <div className="first_stories">
                <Avatar alt="bra" src={Bra}className={classes.large}></Avatar>
                <p>Bra</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={Cyborg} className={classes.large}></Avatar>
                <p>C-18</p>
            </div>

        </div>
    )
}