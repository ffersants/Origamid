import React from 'react'

export default function Checkbox(){
    const [checked, setChecked] = React.useState(['receive-notification'])
    
    function handleCheck({target}){
        if(target.checked){
            setChecked([...checked, target.value])
        } else{
            setChecked(checked.filter(option => option !== target.value))
        }
    }
    
    function isChecked(value){
        return checked.includes(value)
    }

    return(
        <>
            <p>
                <input 
                    onClick={handleCheck} 
                    checked={isChecked('receive-notification')} 
                    value="receive-notification" 
                    type="checkbox"/>
                Desejo receber notificações por e-mail
            </p>

            <p>
                <input 
                    onClick={handleCheck} 
                    checked={isChecked('terms-agreed')} 
                    value="terms-agreed" 
                    type="checkbox"/>
                Li e concordo com os Termos de Uso
            </p>
        </>
    )
}