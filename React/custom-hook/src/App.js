import React from 'react'
import useLocalStorage from './hooks/useLocalStorage.js'
import useFetch from './hooks/useFetch.js' 


function App() {
  const {data, request} = useFetch()

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/notebook')
  }, [])

  console.log(data)
  return(
    <p>Teste</p>
  )
}

export default App;
// const [produto, setProduto] = useLocalStorage('produto', '')
// // React.useEffect(() => {
//   //   request('https://ranekapi.origamid.dev/json/api/produto/notebook')
//   // }, [])

//   console.log(request, data)
  
//   function handleClick({target}) {
//     setProduto(target.innerText)
//   }
//   return (
//     <div className="App">
//       <button onClick={handleClick}>Notebook</button>
//       <button onClick={handleClick}>Smartphone</button>
//     </div>
//   );