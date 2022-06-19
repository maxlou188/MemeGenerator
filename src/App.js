import Navbar from './components/Navbar';
import Meme from './components/Meme';
import React from 'react';
import Box from './components/Box';
import boxesArray from './boxes';

function App(props) {
  const [boxes, setBoxes] = React.useState(boxesArray);

  function toggle(id) {
    setBoxes(prevBoxes => {
      return prevBoxes.map((box) => {
        return box.id === id ? {...box, on: !box.on} : box;
      });
    });
  };

  const boxesElements = boxes.map(box => 
    <Box
      isOn={box.on}
      isDarkMode={props.darkMode}
      handleClick={toggle}
      id={box.id}
    />);

  return (
    <div className="container">
      {/* <Navbar />
      <Meme /> */}
      {boxesElements}
    </div>
  );
}

export default App;
