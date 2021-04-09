import React from 'react'
import useLocalStorage from './hooks/useLocalStorage.js'
import useFetch from './hooks/useFetch.js' 


function App() {
  const [produto, setProduto] = useLocalStorage('produto', '')
  
  const { request, data, loading, erro} = useFetch()

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  React.useEffect(() => {
   async function fetchData(){
    const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
   }
   fetchData()
  }, [request])

  if(erro) return <p>{erro}</p>
  if(loading) return <p>Carregando...</p>
  if(data) 
  return (

    <div className="App">
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      {data.map( (produto) => (
        <div key={produto.id}>
          <h1>{produto.nome}</h1>
        </div>
      ))}
    </div>
  )
  else return null
}

export default App;
