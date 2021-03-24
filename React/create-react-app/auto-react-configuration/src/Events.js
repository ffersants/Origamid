import React from 'react';

const Events = () => {
    function clicou(){
        alert('Botão clicado')
    }

    return(
        <div style={{textAlign: 'center'}}>
            <button onClick={clicou}>Clique aqui!</button>
        </div>
    )
}

export default Events;