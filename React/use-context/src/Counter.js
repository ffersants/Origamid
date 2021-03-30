import React from 'react'
import CounterContext from './CounterContext.js'

<<<<<<< HEAD
function Counter({count, setCount}) {
  return (
    <div className="App">
      Counting: {count}
      <button onClick={() => setCount(count+=1)}>
        Increase
      </button>
=======
function Counter() {

  let CounterComponentContext = React.useContext(CounterContext)


  return (
    <div className="App">
      <p>Test</p>
      Counting: {CounterComponentContext.total}
      {/* <button onClick={() => setCount(count+=1)}>Increase</button> */}
>>>>>>> b2247c41dfd1c25b1c2348545286ee88e93e04c0
    </div>
  );
}

export default Counter;
