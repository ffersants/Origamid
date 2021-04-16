import React from 'react'
import style from 'styled-components'

function App() {

  const paragraph = style.p`
    color: green;
  `

  return (
    <div className="App">
      <p>Hi</p>
    </div>
  );
}

export default App;
