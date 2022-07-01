import React, { useState }from 'react';
import {Avatar, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from './Modal';


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
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
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
};
const profileAccess_right ={
    width: '50%',
    fontWeight: 'bold',
    color: '#018eff',
    textTransform: 'initial'
};
const profileAccess_p = {
    fontWeight: 'bold'
};
const profileAccess_tips = {
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
};
const profileAccess_leftNoWidth ={
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
}
const profileAccess_rightNoWidth ={
    fontWeight: 'bold',
    textTransform: 'initial'
}
const profileAccess_tipText ={
    fontSize: 14,
    color: '#8E8E8E',
    marginTop: 2,
    fontWeight: 500
}
const profileAccess_descripion ={
    color: '#8E8E8E',
    marginTop: 2,
    fontWeight: 500

}
const tips ={
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 25,
    fontWeight: 'bold'
}
const  tips_color ={
    textAlign: 'left',
    color: '#8E8E8E'
}
const profileAccess_links ={
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    flexWrap: 'wrap',
    width: '83%',
    fontSize: 14,
    padding: '20px 0'
}
const links={
    color: '#8E8E8E',
    marginRight: 10,
    textDecoration: 'none'
}
const arrayOfTips = [
    { 
        id:0,
        avatar: require('../assets/Profile/Napa.png'),
        tip_name:'Napa', 
        second_name: 'Suggerimenti per te' 
    },
    { 
        id: 1,
        avatar: require('../assets/Profile/genio.png'),
        tip_name: '_Genio_delle_tartarughe_',
        second_name: 'Seguito da Son Goku + altri 5'
    },
    { 
        id: 2,
        avatar: require('../assets/Profile/Crili.png'),
        tip_name: '_Crilin_',
        second_name: 'Seguito da Son Goku + altri 5'
    },       
    { 
        id: 3,
        avatar: require('../assets/Profile/Junior.png'),
        tip_name:'Junior',
        second_name: 'da poco su dragongram'
            
    },
    { 
        id: 4,
        avatar: require('../assets/Profile/tensing.png'),
        tip_name: 'Tensing ',
        second_name: 'da poco su dragongram'
            
    },
    
];
const arrayOfLinks =[
    {
        name:'Informazioni',
        link:'https://about.instagram.com/'

    },
    {
        name:'- Assistenza',
        link:'https://help.instagram.com/'

    },
    {
        name:'- Stampa ',
        link:'https://about.instagram.com/blog'

    },
    {
        name: '- API',
        link:'https://developers.facebook.com/docs/instagram'

    },
    {
        name:'Lavora con noi ',
        link:'https://about.instagram.com/about-us/careers'

    },
    {
        name:'- Privacy ',
        link:'https://help.instagram.com/519522125107875/?maybe_redirect_pol=0 '

    },
    {
        name:'- Condizioni',
        link:'https://help.instagram.com/581066165581870'

    },
    {
        name:'- Luoghi ',
        link:'https://www.instagram.com/explore/locations/'

    },
    {
        name:'- Lingua ',
        link:'#'

    },
];
      
export default function ProfileAccess(){
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () =>  { setShowResults(!showResults)}
    
    const classes = useStyles();
    return(
        <div>
       <div style={profileAccess}>
            <div style={profileAccess_left}>
                
                <Avatar alt="vegeta" src={require('../assets/Profile/profile.jpg')}  className={classes.large}></Avatar>
                <div style={profileAccess_text}>
                    <p style={profileAccess_p}>Vegeta</p>
                    <p style={profileAccess_descripion}>Il principe dei Sayan</p>
                </div>
            </div>
            <div style={profileAccess_right}>
                Passa a
                <Modal title={'Cambia account'}></Modal>
            </div>
        </div>
        
        <div style={tips}>
            <h4 style={tips_color}>Suggerimenti per te</h4>
            <p >Mostra tutti</p>
        </div>
        {arrayOfTips.map(el => (     
        <div key={el.id} style={profileAccess, profileAccess_tips}>
            <div style={profileAccess_leftNoWidth}>
                <Avatar alt="profile" src={el.avatar}  className={classes}></Avatar>
                <div style={profileAccess_text}>
                    <p style={profileAccess_p}>{el.tip_name}</p>
                    <p style={profileAccess_tipText}>{el.second_name}</p>
                </div>
            </div>
            <div style={profileAccess_rightNoWidth}>
                { !showResults ? <p onClick={onClick}>Segui</p>  : null } 
                { showResults ?  <p onClick={onClick}>Segui già</p>: null } 
            </div>
        </div>
        ))}
        <div style={profileAccess_links}>
            {arrayOfLinks.map((link, index) => (    
                <a key={index} style={links} href={link.link}> {link.name}</a>
            ))}  
            <p style={links}>© 2022 INSTAGRAM FROM META</p>
        </div>
       
    </div>
     
    )
}