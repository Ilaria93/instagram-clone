import React from 'react'

const ListMessages = (props) => {
  return (
    <div className="Component">
      {props.text ? (
        <p className="direct__message direct__recived">{props.text}</p>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default ListMessages
