import React, { useState } from 'react';
import ColorBlock from './components/ColorBlock';
import ColorForm from './components/ColorForm';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']);

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    );
  });

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
    // the spread operator (...) is used to create a new array with all the existing colors and then adding the new color to the end of the array.
  };
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>

  );

}


export default App;
