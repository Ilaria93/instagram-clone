import React from 'react'

//COMPONENTS
import Header from '../../components/Header'
import ImagesPage from '../../components/ImagesPage'

import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

function ProfilePage() {
  const ImagesProfile = [
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
    <div className="profilePage">
      <Header />
      <hr />
      <div>
        <ImagesPage
          array={ImagesProfile}
          icon1={faHeart}
          icon2={faComment}
        ></ImagesPage>
      </div>
    </div>
  )
}

export default ProfilePage
