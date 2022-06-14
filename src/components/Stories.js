import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import './styles/stories.css';

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
                
                <Avatar alt="goku" src={require('../assets/Profile/goku.jpeg')}  className={classes.large}></Avatar>
                <p>Son Goku</p>
            </div>
            <div className="first_stories">
                <Avatar alt="trunks" src={require('../assets/Profile/trunks-future.jpeg')} className={classes.large}></Avatar>
                <p>Trunks</p>
            </div>
            <div className="first_stories">
                <Avatar alt="Goan" src={require('../assets/Profile/goan.png')}  className={classes.large}></Avatar>
                <p>Son Goan</p>
            </div>
            <div className="first_stories">
                <Avatar alt="bulma" src={require('../assets/Profile/Bulma&V.jpeg')}  className={classes.large}></Avatar>
                <p>Bulma</p>
            </div>
            <div className="first_stories">
                <Avatar alt="goten" src={require('../assets/Profile/goten.jpeg')}  className={classes.large}></Avatar>
                <p>Son Goten</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={require('../assets/Profile/pan.jpeg')}  className={classes.large}></Avatar>
                <p>Pan</p>
            </div>
            <div className="first_stories">
                <Avatar alt="bra" src={require('../assets/Profile/bra.png')} className={classes.large}></Avatar>
                <p>Bra</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={require('../assets/Profile/c-18.jpeg')} className={classes.large}></Avatar>
                <p>C-18</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={require('../assets/Profile/broly.png')} className={classes.large}></Avatar>
                <p>Broly</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={require('../assets/Profile/c-17.png')} className={classes.large}></Avatar>
                <p>C-17</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={require('../assets/Profile/freezer.png')} className={classes.large}></Avatar>
                <p>Freezer</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={require('../assets/Profile/cell.png')} className={classes.large}></Avatar>
                <p>Cell</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={require('../assets/Profile/black_Goku.png')} className={classes.large}></Avatar>
                <p>Black Goku</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={require('../assets/Profile/Majin_Buu.png')} className={classes.large}></Avatar>
                <p>Bu</p>
            </div>
            <div className="first_stories">
                <Avatar alt="" src={require('../assets/Profile/Majin-Bu.png')} className={classes.large}></Avatar>
                <p>Majin Bu</p>
            </div>
            

        </div>
    )
}