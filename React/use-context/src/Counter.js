import React from 'react'
import CounterContext from './CounterContext.js'

function Counter() {

  let CounterComponentContext = React.useContext(CounterContext)


  return (
    <div className="App">
      <p>Test</p>
      Counting: {CounterComponentContext.total}
      {/* <button onClick={() => setCount(count+=1)}>Increase</button> */}
    </div>
  );
}

export default Counter;
