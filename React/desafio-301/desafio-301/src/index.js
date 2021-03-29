import React from 'react';
import ReactDOM from 'react-dom';

import View from './View';
import Product from './Product';

ReactDOM.render(
  <React.StrictMode>
   <div>
   <Product product="Notebook" />

<View isFethcing="false" />
   </div>

  </React.StrictMode>,
  document.getElementById('root')
);
