import React from 'react'
import {CounterContext} from './CounterContext.js'

const Mirror = () => {
    let stateCounterInContextMirror = React.useContext(CounterContext)

    return <p>Mirror: {stateCounterInContextMirror.total}</p>
}

export default Mirror