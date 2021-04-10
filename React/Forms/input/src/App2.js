import React from 'react'

function App2() {
  let [form, setForm] = React.useState({
      nome: '',
      email: ''
  })

  function handleChange({target}){
    const {id, value} = target
    //[id] cria uma chave no objeto com a string armazenada em id
    console.log({...form, [id]: value})
    setForm({...form, [id]: value})
  }

  return (
    <div className="App">
      <form>
        {/* input 1 */}
        <label htmlFor="nome">Nome</label>
        <input id="nome" value={form.nome} onChange={handleChange} type="text"/>  
        <p>Nome sendo alterado no JS: {form.nome}</p>
        {/* input 2 */}
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={form.email} onChange={handleChange}/>
        <p>Nome sendo alterado no JS: {form.email}</p>

      </form>     
    </div>
  );
}

export default App2;
