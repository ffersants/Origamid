import React from 'react';

const Modal = (props) => { 
    if(props.showModal){
        return(
            <div>
                <h1>Mostrando modal</h1>
                <button onClick={() => props.setModal(false)}>Fechar</button>
            </div>
        )
    }else {
        return null;
    }
}

export default Modal;