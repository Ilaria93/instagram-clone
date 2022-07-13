import React from 'react'

//COMPONENTS
import Header from '../../components/Header'
import ImagesPage from '../../components/ImagesPage'

//FontAwesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

function FindPeople() {
  const peoples = [
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/junior.jpeg'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/j&g.jpg'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/trunks.png'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/hug.jpeg'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/trunks.png'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/trunks.png'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/junior.jpeg'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/trunks.png'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/trunks.png'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/junior.jpeg'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/trunks.png'),
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/trunks.png'),
    },
  ]
  return (
    <div className="findPeople">
      <Header />
      <hr />
      <div style={{ overflow: 'scroll', height: 'calc(100vh - 60px)' }}>
        <ImagesPage
          array={peoples}
          icon1={faHeart}
          icon2={faComment}
        ></ImagesPage>
      </div>
    </div>
  )
}

export default FindPeople
