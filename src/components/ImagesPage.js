import React from 'react'

//STYLES
import './styles/imagesPage.css'

//FontAwesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ImagesPage({ array = [], icon1, icon2 }) {
  return (
    <div className="imagesPage__content">
      {array.map((item, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${item.image}` }}
          className="imagesPage__box"
        >
          <div className="imagesPage__hover"></div>
          <div className="imagesPage__number">
            <FontAwesomeIcon className="imagesPage__icon" icon={icon1} />
            <p>{item.heart}</p>
          </div>
          <div className="imagesPage__number">
            <FontAwesomeIcon className="imagesPage__icon" icon={icon2} />
            <p>{item.comments}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ImagesPage
