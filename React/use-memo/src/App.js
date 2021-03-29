import React from 'react'

function App() {
  let [value, setValue] = React.useState(0)

  let total = React.useMemo(() => {
    console.log('Valor alterado')
    return value
  }, [value])

  let inputTotal = React.useRef(null)

  function handleClick(){
    setValue(inputTotal.current.value)
  }

  return (
    <div>
      <h1>Soma é igual a {total}</h1>
      <input ref={inputTotal} type="number"/>
      <button onClick={() => handleClick()}>Mudar total</button>
    </div>
  );
}

export default App;
