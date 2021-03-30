import React from 'react'

import CounterContext from './CounterContext.js'
import Counter from './Counter.js';
import Mirror from './Mirror.js'

const App = () => {

<<<<<<< HEAD
    let [count, setCount] = React.useState(0)

    return (
        <>
            <Counter setCount={setCount} count={count}/>
            <Mirror count={count}/>
=======
    let [total, setTotal] = React.useState(0)

    return (
        <>
            <CounterContext.Provider value={{total: 0}}>
                <Counter />
                <Mirror />
            </CounterContext.Provider>
>>>>>>> b2247c41dfd1c25b1c2348545286ee88e93e04c0
        </>
    )
}

export default App
