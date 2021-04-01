import React from 'react';

import ContadorContext from './Context'

const Counter = () => {
    const {count, setCount} = React.useContext(ContadorContext)
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}

export default Counter;