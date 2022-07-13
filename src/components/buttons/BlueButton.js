import React from 'react'

//MATERIAL - UI
import { Button } from '@material-ui/core'

//STYLES
import './blueButton.css'

function BlueButton(props) {
  const { label } = props
  return (
    <Button
      variant="contained"
      color="primary"
      component="span"
      className="blueButton"
    >
      {label}
    </Button>
  )
}
export default BlueButton
