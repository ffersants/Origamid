import React from 'react'

export default function Radio(){
    const [radio, setRadio] = React.useState()

    function handleChange({target}){
        setRadio(target.value)
    }

    return(
        <>
            <h1>Selecione sua bebida favorita</h1>
            <label>
                <input name="bebida" onChange={handleChange} type="radio" value="cafe" id="cafe"/>
                Café
            </label>
            <label>
                <input name="bebida" onChange={handleChange} type="radio" value="cha" id="cha"/>
                Chá
            </label>
            <label>
                <input name="bebida" onChange={handleChange} type="radio" value="suco" id="suco"/>
                Suco
            </label>
            <p>Minha bebida favorita é {radio}</p>
        </>
    )
}