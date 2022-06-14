import React from 'react';

//components
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

export default function Content(){
    const content = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        padding: '35px 230px'
    };
    const content_left = {
        width: '48%'
    };
    const content_right = {
        width: '48%',
        textAlign: 'right',
        height: 100,
        padding: '20px 0',
    }

    return(
        <div>
            <div style={content}>
                <div style={content_left}>
                    <LeftSidebar />
                </div>
                
                <div  style={content_right}>
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}