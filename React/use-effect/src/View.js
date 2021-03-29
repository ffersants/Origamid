import React from 'react';
import Modal from './Modal.js';

const View = () => {
    let [showModal, setModal] = React.useState(false)

    return (
        <>
            <button onClick={() => { setModal(!showModal) }}>
                Show modal
            </button>

            {/* <Modal showModal={showModal} setModal={setModal}/> */}
            <div style={{ display: showModal ? 'block' : 'none' }}>
                <h1>Showing modal</h1>
                <button onClick={() => setModal(false)}>Close</button>
            </div>

            <p id="alerta">{showModal ? 'Showing modal' : ''}</p>
        </>
    )
}

export default View;