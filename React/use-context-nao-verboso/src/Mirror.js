import React from 'react';
import ContadorContext from './Context.js'


const Mirror = () => {
    //desestruturação
    const {count} = React.useContext(ContadorContext)
    
    return (
        <p>Mirror: {count}</p>
    )
}

export default Mirror;