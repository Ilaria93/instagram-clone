import React from 'react';
import Card from './Card';
import Stories from './Stories';

export default function LeftSidebar(){
    return(
        <div>
            <Stories></Stories>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card> 
        </div>
    )
}