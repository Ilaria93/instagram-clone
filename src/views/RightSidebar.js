import React from 'react'
import ProfileAccess from '../components/ProfileAccess'

export default function RightSidebar(props) {
  const { name } = props
  return (
    <div>
      <ProfileAccess myName={name}></ProfileAccess>
    </div>
  )
}
