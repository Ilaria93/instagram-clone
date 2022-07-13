import React from 'react'

//STYLES
import { makeStyles } from '@material-ui/core/styles'

//COMPONENTS
import BlueButton from './BlueButton'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}))

export default function UploadButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <BlueButton label={'Seleziona dal computer'}></BlueButton>
      </label>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
      />
    </div>
  )
}
