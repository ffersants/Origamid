import React from 'react';
import ReactDOM from 'react-dom';

import Loop from './Loop';
import Events from './Events';
import ConditionalRendering from './ConditionalRendering';

ReactDOM.render(
  <React.StrictMode>
    <h1 style={{textAlign:'center'}}>Loop</h1>
    <Loop />
    
    <h1 style={{textAlign:'center'}}>Event</h1>
    <Events />
    
    <h1 style={{textAlign:'center'}}>Conditional Rendering</h1>
    <ConditionalRendering />  

  </React.StrictMode>,
  document.getElementById('root')
);


