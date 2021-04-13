import React from 'react'

export default function Select(){
    const [selectValue, setSelectValue] = React.useState()

    return(
        <div>
            <h1>Valor selecionado = {selectValue}</h1>
            <select onChange={({target}) => setSelectValue(target.value)} name="" id="">
                <option selected disabled value="">Selecione seu dia preferido do dia</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
            </select>
        </div>
    )
}