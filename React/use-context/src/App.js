import React from 'react'

import Counter from './Counter.js';
import Mirror from './Mirror.js'

import {CounterContextProvider} from './CounterContext.js'

const App = () => {
    return (
        <>
            <CounterContextProvider>
                <Counter />
                <Mirror />
            </CounterContextProvider>
        </>
    )
}

export default App
