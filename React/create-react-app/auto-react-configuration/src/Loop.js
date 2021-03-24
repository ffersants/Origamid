import React from 'react';

const Loop = () => {
    const livros = ['Lolita', 'Brás Cubas', 'Crime e Castigo', 'Budapeste']
    const paises = [
        {
            pais: 'Brasil',
            capital: 'Brasília'
        },
        {
            pais: 'França',
            capital: 'Paris'
        },
        {
            pais: 'USA',
            capital: 'Nova Iorque'
        },
        {
            pais: 'Holanda',
            capital: 'Amsterdam'
        }
    ]
    return (
        <>
            <div>
                <h1>Array</h1>
                <ul>
                    {
                        livros.map((livro) => {
                            return <li key={livro}>{livro}</li>
                        })
                    }
                </ul>
            </div>
            <div>
                <h1>Object</h1>
                <ul>
                    {
                        paises.map(({pais, capital}) => {
                            return(
                            <>
                                <li key={pais}>País: {pais}</li>
                                <li key={capital}>Capital: {capital}</li>
                                <hr/>
                            </>)
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Loop;