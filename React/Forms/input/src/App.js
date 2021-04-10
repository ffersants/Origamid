import React from 'react'

function App() {
  let [nome, setNome] = React.useState()
  let [email, setEmail] = React.useState()

  return (
    <div className="App">
      <form>
        {/* input 1 */}
        <label htmlFor="nome">Nome</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} type="text"/>  
        <p>Nome sendo alterado no JS: {nome}</p>
        {/* input 2 */}
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <p>Nome sendo alterado no JS: {email}</p>

      </form>     
    </div>
  );
}

export default App;
