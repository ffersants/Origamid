import React from 'react';

const Modal = (props) => {
    if(props.showModal){
        return(
            <div>
                <h1>Showing modal</h1>
                <button onClick={() => props.setModal(false)}>Close</button>
            </div>
        )
    }else {
        return null;
    }
}

export default Modal;