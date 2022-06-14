import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


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

const profileAccess ={
    display: 'flex',
    alignItems: 'center',
}
const profileAccess_left ={
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    width: '50%' 
};
const profileAccess_text= {
    margin: '0 15px',
}
const profileAccess_right ={
    width: '50%',
    fontWeight: 'bold',
    color: '#018eff'
}
export default function ProfileAccess(){
    const classes = useStyles();
    return(
       <div style={profileAccess}>
            <div style={profileAccess_left}>
                
                <Avatar alt="goku" src={require('../assets/Profile/profile.jpg')}  className={classes.large}></Avatar>
                <div style={profileAccess_text}>
                    <p>Vegeta</p>
                    <p>Il principe dei Sayan</p>
                </div>
            </div>
            <div style={profileAccess_right}>
                Passa a
            </div>
        </div>
     
    )
}