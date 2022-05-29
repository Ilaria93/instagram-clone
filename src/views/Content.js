import React from 'react';
import LeftSidebar from '../components/LeftSidebar';

import RightSidebar from '../components/RightSidebar';
import "../components/styles/content.scss"

export default function Content(){
    return(
        <div>
            <div className="content">
                <div className="content_left">
                    <LeftSidebar />
                </div>
                
                <div className="content_right">
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}