import React from 'react';

const View = ({isFetching}) => {
    if(isFetching){
        return (
            <p>Carregando...</p>
        )
    } else{
        return <p>Carregou</p>
    }
}

export default View;