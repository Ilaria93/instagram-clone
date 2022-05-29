import React from 'react';
import Header from "./components/Header"
import Content from './views/Content';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Content />
    </div>
  );
}

export default App;
