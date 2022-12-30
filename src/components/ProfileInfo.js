import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'

//FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

//SYLES
import './styles/profileInfo.css'

//COMPONETS
import { retrieveUser } from '../hooks/main'

function ProfileInfo(props) {
  const { postNumber, array } = props

  const [user, setUser] = useState({})

  useEffect(() => {
    const { data } = retrieveUser()
    setUser(data)
  }, [])

  return (
    <div className="profileInfo">
      <div className="profileInfo__top">
        <div className="profileInfo__image">
          <img alt="" src={user.image} />
        </div>
        <div className="profileInfo__info">
          <div className="profileInfo__info-name">
            <p>{user.name}</p>
            <Button className="profileInfo__changes">Modifica profilo</Button>
            <FontAwesomeIcon
              icon={faGear}
              className="profileInfo__settings"
              fontSize="small"
            />
          </div>
          <div className="profileInfo__info-numbers">
            <p>
              {'Post:'}
              <span>{postNumber}</span>
            </p>
            <p>
              <span>{'3,5M'}</span>
              {'followers'}
            </p>
            <p>
              {' '}
              <span>{'100'}</span>
              {' profili seguiti'}
            </p>
          </div>
          <div className="profileInfo__info-bio">
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
      <div className="profileInfo__info-stories">
        {array.map((item, index) => (
          <div key={index}>
            <div
              style={{
                height: 90,
                width: 90,
                margin: 20,
                borderRadius: '50%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: `url(${item.image}`,
                position: 'relative',
              }}
            >
              <small>{item.stories}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProfileInfo
