import React from 'react'

//components
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

export default function Content() {
  const content = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: '25px  200px',
    background: '#fafafa',
  }
  const content_left = {
    width: '55%',
  }
  const content_right = {
    width: '40%',
    textAlign: 'right',
    height: 100,
    padding: '20px 0',
  }
  const name = 'Vegeta'

  return (
    <div>
      <div style={content}>
        <div style={content_left}>
          <LeftSidebar />
        </div>

        <div style={content_right}>
          <RightSidebar name={name} />
        </div>
      </div>
    </div>
  )
}
