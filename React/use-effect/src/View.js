import React from 'react';
import Modal from './Modal.js';

const View = () => {
    let [showModal, setModal] = React.useState(false)
        
    React.useEffect(() => {
        document.getElementById('alerta').style.display = 'block'

        return () => {
            document.getElementById('alerta').style.display = 'none'
        }
    }, [showModal])

    return(
        <>
            <button onClick={() => {setModal(!showModal)}}>
                Mostrar modal
            </button>
            <Modal showModal={showModal} setModal={setModal}/>
        
            <p id="alerta" >Modal sendo apresentado</p>
        </>
    )
}

export default View;