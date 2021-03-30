import React from 'react'
import CounterContext from './CounterContext.js'

const Mirror = ({count} ) => {
    
    let MirrorComponentContext = React.useContext(CounterContext)

    return <p>Mirror: {MirrorComponentContext.total}</p>
}

export default Mirror