import React from 'react'

function Counter({count, setCount}) {
  return (
    <div className="App">
      Counting: {count}
      <button onClick={() => setCount(count+=1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
