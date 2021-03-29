import React from 'react';

function App() {

  const refInputNome = React.useRef(null)

  return (
    <div className="App">
      <form>

        <div>
          <label htmlFor="nome">Nome</label>
          <input ref={refInputNome} id="nome" type="text"/>
        </div>
        
        <button onClick={(e) => {e.preventDefault(); refInputNome.current.focus()}}>Focar input nome</button>

      </form>
    </div>
  );
}
export default App;
