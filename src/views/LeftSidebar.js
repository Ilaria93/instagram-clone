import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Stories from '../components/Stories'
import { retrieveProfiles } from '../hooks/main'
import moment from 'moment'

export default function LeftSidebar() {
  const [newProfiles, setProfiles] = useState([])
  console.log(
    '🚀 ~ file: LeftSidebar.js:8 ~ LeftSidebar ~ newProfiles',
    newProfiles,
  )

  //Retrieve user
  useEffect(() => {
    const { data } = retrieveProfiles()
    console.log('🚀 ~ file: LeftSidebar.js:12 ~ useEffect ~ profiles', data)
    setProfiles(data)
  }, [])

  return (
    <div>
      <Stories />
      {newProfiles.map((element, index) => (
        <Card
          key={index}
          image={element.image}
          name={element.name}
          number={element.number}
          comment_number={element.comment_number}
          pubblication={moment(element.pubblication).format('DD/MM/YYYY')}
          background={element.images}
          city={element.city}
          className="menuItem"
        ></Card>
      ))}
    </div>
  )
}
