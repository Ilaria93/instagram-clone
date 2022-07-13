import React from 'react'

//COMPONENTS
import Header from '../../components/Header'
import ImagesPage from '../../components/ImagesPage'
import ProfileInfo from '../../components/ProfileInfo'

import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

function ProfilePage() {
  const ImagesProfile = [
    {
      heart: 1000000,
      comments: 530,
      image: require('../../assets/VProfilePicture/majin-vegeta.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 89000,
      comments: 400,
      image: require('../../assets/VProfilePicture/vsSuper.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 56000,
      comments: 130,
      image: require('../../assets/VProfilePicture/vegeta-perfetto.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 1009789,
      comments: 787,
      image: require('../../assets/VProfilePicture/first-battle.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 45000,
      comments: 100,
      image: require('../../assets/VProfilePicture/family.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 57168,
      comments: 120,
      image: require('../../assets/VProfilePicture/download.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 789045,
      comments: 345,
      image: require('../../assets/VProfilePicture/vsBu.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 90654,
      comments: 934,
      image: require('../../assets/VProfilePicture/vsBroly.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 29000,
      comments: 230,
      image: require('../../assets/VProfilePicture/VegetaVSSemiPerfectCell.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 456093,
      comments: 134,
      image: require('../../assets/VProfilePicture/gogeta.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 789045,
      comments: 234,
      image: require('../../assets/VProfilePicture/pop.jpg'),
      stories: 'Storie in e...',
    },
    {
      heart: 890543,
      comments: 564,
      image: require('../../assets/VProfilePicture/popSajan.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 568799,
      comments: 453,
      image: require('../../assets/VProfilePicture/training.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 687698,
      comments: 678,
      image: require('../../assets/VProfilePicture/withbra.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 3246770,
      comments: 571,
      image: require('../../assets/VProfilePicture/v&sons.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 6738903,
      comments: 342,
      image: require('../../assets/VProfilePicture/v&Bulma.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 6738903,
      comments: 342,
      image: require('../../assets/VProfilePicture/v&Bulma.jpeg'),
      stories: 'Storie in e...',
    },
    {
      heart: 6738903,
      comments: 342,
      image: require('../../assets/VProfilePicture/friends.jpeg'),
      stories: 'Storie in e...',
    },
  ]
  return (
    <div className="profilePage">
      <Header />
      <hr />
      <div style={{ overflow: 'scroll', height: 'calc(100vh - 60px)' }}>
        <ProfileInfo array={ImagesProfile} postNumber={ImagesProfile.length} />
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
