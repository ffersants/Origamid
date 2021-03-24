import React from 'react';
import Modal from './Modal.js'

const App = () => { 
    let [showModal, setModal] = React.useState(false)

    return(
        <>
            <h1>Esse é o App!</h1>
            <button onClick={() => setModal(true)}>Abrir modal</button>
            <Modal showModal={showModal} setModal={setModal}/>
        </>
    )
} 

export default App;