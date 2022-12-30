import React, { useEffect, useState } from 'react'

//Material - ui
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

//styles
import './styles/stories.css'
import { retrieveStories } from '../hooks/main'
//array
// import { contacts } from './mock-data/contacts'

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
}))

export default function Stories() {
  const classes = useStyles()
  const [stories, setStories] = useState([])

  useEffect(() => {
    const { data } = retrieveStories()
    setStories(data)
  }, [])

  return (
    <div className="stories__content">
      {stories.map((contact, index) => (
        <div key={index} className="first_stories">
          <Avatar
            alt={contact.name}
            src={contact.image}
            className={classes.large}
          ></Avatar>
          <p>{contact.name}</p>
        </div>
      ))}
    </div>
  )
}
