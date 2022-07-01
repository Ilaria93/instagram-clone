import { BorderAll } from '@material-ui/icons'
import React from 'react'

const content = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100vh'
}
const left= {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #DBDBDB'
}
const right= {
    width: '60%',
    border: '1px solid #DBDBDB'
}
const up ={
    height: 60,
    pading: '0 20px'
}
export default function Messages () {
    return(
        <div style={content}>
            <div style={left}>left
                <div style={ up}>
                    up
                </div>
                <div>
                    down
                </div>
            </div>
            <div style={right}>right</div>
        </div>

    )

}



