import React from 'react'
import {CounterContext} from './CounterContext.js'

function Counter() {

  let {total, setTotal} = React.useContext(CounterContext )

  return (
      <div className="App">
        Counting: {total}
        <button onClick={() => setTotal(total+=1)}>
          Increase
        </button>
      </div>
  );
}

export default Counter;
