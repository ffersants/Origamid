import React from 'react'

function App() {
  let success;

  let [form, setForm] = React.useState({
    nome: '',
    email: '',
    password: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })

  function handleChange({target}){
    const {id, value} = target
    console.log(form)
    setForm({...form, [id]: value})
  }

  async function handleSubmit(e){
    e.preventDefault()

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    .then(r => {
      console.log(r)
      r.status === 200 ? success = true : success = false
    })

    return success
  }

  return (
    <div className="App">
      <form>
        <div>
        <label htmlFor="nome">Nome</label>
        <input onChange={handleChange} id="nome" type="text"/>

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} id="email" type="email"/>

        <label htmlFor="senha">Senha</label>
        <input onChange={handleChange} id="senha" type="password"/>

        <label htmlFor="cep">CEP</label>
        <input onChange={handleChange} id="cep" type="text"/>

        <label htmlFor="rua">Rua</label>
        <input onChange={handleChange} id="rua" type="text"/>
        </div>

       <div>
       <label htmlFor="numero">Número</label>
        <input onChange={handleChange} id="numero" type="number"/>

        <label htmlFor="bairro">Bairro</label>
        <input onChange={handleChange} id="bairro" type="text"/>

        <label htmlFor="cidade">Cidade</label>
        <input onChange={handleChange} id="cidade" type="text"/>

        <label htmlFor="estado">Estado</label>
        <input onChange={handleChange} id="estado" type="text"/>
       </div>
       <button onClick={handleSubmit}>Enviar</button>
      </form>
      {success && <p>Criado com sucesso!</p>} 
    </div>
  );
}

export default App;
