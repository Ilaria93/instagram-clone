import React from 'react'

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

// component
import Home from './views/home/Home'
import Messages from './views/chat/Messages'
import FindPeople from './views/findPeople/FindPeople'
import ProfilePage from './views/profilePage/ProfilePage'

import './App.css'

function App() {
  return (
    <div className="App">
      <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
          <Routes>
            {/* This route is for home component with exact path "/", in component props we passes the imported component*/}
            <Route exact path="/" element={<Home />} />

            {/* This route is for about component with exact path "/messages", in component props we passes the imported component*/}
            <Route exact path="/messages" element={<Messages />} />

            {/* This route is for contactus component with exact path "/location", in component props we passes the imported component*/}
            <Route exact path="/people" element={<FindPeople />} />
            {/* This route is for contactus component with exact path "/profile", in component props we passes the imported component*/}
            <Route exact path="/profile" element={<ProfilePage />} />

            {/* If any route mismatches the upper route endpoints then, redirect triggers and redirects app to home component with to="/" */}
            <Route path="/" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </>
    </div>
  )
}

export default App
