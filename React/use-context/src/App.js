import React from 'react'

import Counter from './Counter.js';
import Mirror from './Mirror.js'

const App = () => {

    let [count, setCount] = React.useState(0)

    return (
        <>
            <Counter setCount={setCount} count={count}/>
            <Mirror count={count}/>
        </>
    )
}

export default App
