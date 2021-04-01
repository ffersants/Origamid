import React from 'react'
import {CounterContext} from './CounterContext.js'

function Counter() {

  let stateCounterInContext = React.useContext(CounterContext)

  return (
      <div className="App">
        Counting: {stateCounterInContext.total}
        <button onClick={() => stateCounterInContext.setTotal(stateCounterInContext.total+=1)}>
          Increase
        </button>
      </div>
  );
}

export default Counter;
