import React from 'react'

function Counter() {

  let [count, setCount] = React.useState(0)

  return (
    <div className="App">
      Counting: {count}
      <button onClick={() => setCount(count+=1)}>Increase</button>
    </div>
  );
}

export default Counter;
