import React from 'react';
import Card from './Card';
import Stories from './Stories';

//images
import goku from '../assets/Profile/goku.jpeg'
import trunks from '../assets/Profile/trunks-future.jpeg';
import Goan from '../assets/Profile/goan.png';
import bulma from '../assets/Profile/Bulma&V.jpeg';
import Goten from '../assets/Profile/goten.jpeg';
import Pan from '../assets/Profile/pan.jpeg';
import Bra from '../assets/Profile/bra.png';
import Cyborg from '../assets/Profile/c-18.jpeg';


const arrayOfObjects = [
    { 
        image: Bra,
        name:'Bra',
        number: 150,
        comment_number: 9,
        pubblicetion: 2  + ' ' + 'ore fa'
    },
    { 
        image: goku,
        name: 'Goku', 
        number: 580,
        comment_number: 13,
        pubblicetion: 5 + ' ' +  'ore fa'
    },    
    { 
        image: bulma,
        name: 'Bulma',
        number: 789,
        comment_number: 65,
        pubblicetion: 1  + ' ' + 'Giorno fa'
        
    },
    { 
        image: trunks,
        name: 'Trunks',
        number: 200,
        comment_number:7, 
        pubblicetion: 3  + ' ' + 'ore fa'
        
    },

  ];
  


export default function LeftSidebar(){
    return(
        <div>
            <Stories></Stories>
                {arrayOfObjects.map((element, index) => (
                    <Card image={element.image} name={element.name} number={element.number} comment_number={element.comment_number} pubblicetion={element.pubblicetion} className="menuItem"></Card>
                ))}
        </div>
    )
}