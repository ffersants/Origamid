import React from 'react'
import {CounterContext} from './CounterContext.js'

const Mirror = () => {
    let {total, setTotal} = React.useContext(CounterContext)

    return <p>Mirror: {total}</p>
}

export default Mirror