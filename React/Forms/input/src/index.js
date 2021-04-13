import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import App2 from './App2';
import Checkbox from './Checkbox';
import OnBlur from './OnBlur';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App2 />

    <Textarea/>

    <Select/>

    <Radio />

    <OnBlur />
    <Checkbox />
  </React.StrictMode>,
  document.getElementById('root')
);

