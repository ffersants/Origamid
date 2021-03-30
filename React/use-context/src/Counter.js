import React from 'react'
import CounterContext from './CounterContext.js'

function Counter() {
  let CounterComponentContext = React.useContext(CounterContext)

  return (
    <div className="App">
      Counting: {CounterComponentContext.total}
      <button onClick={() => CounterComponentContext.setTotal(CounterComponentContext.total+=1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
