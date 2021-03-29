import React from 'react';

const Contador = () => {
    let [cliques, setClique] = React.useState(0)
    
    React.useEffect(() => {
        document.title = 'Cliques: ' + cliques
    }, [cliques])

    return(
        <>
            <button onClick={() => {setClique(cliques + 1)}}>Voce clicou {cliques}</button>
            <button onClick={() => {setClique(cliques - 1)}}>Subtrair 1</button>
        </>
    )
}

export default Contador;