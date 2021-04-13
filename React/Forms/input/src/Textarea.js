import React from 'react'

export default function Textarea(){
    const [textAreaValue, setTextAreaValue] = React.useState()

    return( 
        <div>
            <h1>Valor do textarea = {textAreaValue}</h1>

            <textarea onChange={({target}) => setTextAreaValue(target.value)} cols="30" rows="10"/>
        </div>
    )
}