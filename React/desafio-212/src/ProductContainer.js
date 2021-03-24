import React from 'react';

const ProductContainer = ({produtos}) => {
    console.log(produtos)
    return(
        <div>
            {produtos.map(produto => {
                return(
                    <>
                        <p key={produto.nome}>{produto.nome}</p>
                        <ul>
                            {produto.caracteristicas.map(caracteristica => {
                                return <li key={caracteristica}>{caracteristica}</li>
                            })} 
                        </ul>
                    </>
                )
            })}

            <ul>
               
            </ul>
        </div>
    )
}

export default ProductContainer;