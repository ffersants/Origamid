import React from 'react'
import useLocalStorage from './hooks/useLocalStorage.js'

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '')
  function handleClick({target}) {
    setProduto(target.innerText)
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </div>
  );
}

export default App;
