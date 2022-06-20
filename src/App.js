import Navbar from './components/Navbar';
import Meme from './components/Meme';
import React from 'react';

function App(props) {

  return (
    <div className="container">
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;
