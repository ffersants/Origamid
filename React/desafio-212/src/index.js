import React from 'react';
import ReactDOM from 'react-dom';

import ProductContainer from './ProductContainer.js'

const products = [
  {
    nome: 'Notebook',
    caracteristicas: ['16GB de RAM', 'HD de 512GB']
  },
  {
    nome: 'Smartphone',
    caracteristicas: ['2GB de RAM', 'HD de 128GB']
  }
]
ReactDOM.render(
  <React.StrictMode>
    <ul>
      <li>
        <a href="/" >Home</a>
      </li>
      <li>
        <a href="/produtos">Produtos</a>
      </li>

      <div>
        <div style={{display: window.location.pathname === '/' ? 'block' : 'none'}} id="home">
          <h1>Home</h1>
          <p>Essa é a home do site</p>
        </div>

        <div style={{display: window.location.pathname === '/produtos' ? 'block' : 'none'}} id="home">
          <ProductContainer produtos={products} />
        </div>
      </div>
    </ul>
  </React.StrictMode>,
  document.getElementById('root')
);
