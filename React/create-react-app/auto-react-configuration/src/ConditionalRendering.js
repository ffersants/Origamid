import React from 'react';

const ConditionalRendering = () => {
    const failed = false

    if(failed){
        return(
            <div>
                <h4 style={{color: 'red'}}>Opa! Algo de errado aconteceu</h4>
            </div>
        )
    } else{ 
        return null
    }

}

export default ConditionalRendering;