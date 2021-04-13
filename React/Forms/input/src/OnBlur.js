import React from 'react'

export default function OnBlur(){
    const [input, setInput] = React.useState()
    const [erro, setErro] = React.useState(null)
    function mask({target}){
        let cepInput = target.value
        target.value = cepInput.replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1")    
        setInput(target.value)    
    }

    function validateCEP({target}){
        const input = target.value
        if(input.length === 0){
            setErro('Por favor, digite um CEP')
        } if(!/^\d{5}-?\d{3}$/.test(input)){
            setError('Preencha um CEP válido')
        }
    }

    return(
        <div>
            <label htmlFor="cep-input">Digite seu CEP:</label>
            <input id="cep-input" onBlur={validateCEP} onChange={mask} type="text"/>
            {erro && <p>{erro}</p>}
        </div>
    )

}