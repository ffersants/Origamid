import React from 'react'

import CounterContext from './CounterContext.js'
import Counter from './Counter.js';
import Mirror from './Mirror.js'

const App = () => {

    let [total, setTotal] = React.useState(0)

    return (
        <>
            <CounterContext.Provider value={{total, setTotal}}>
                <Counter />
                <Mirror />
            </CounterContext.Provider>
        </>
    )
}

export default App
