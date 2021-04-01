import React from 'react';

import Mirror from './Mirror'
import Counter from './Counter.js'
import ContadorContext from './Context'

const App = () => {
    let [count, setCount] = React.useState(0)
    return (
        <ContadorContext.Provider value={{count, setCount}}>
            <Counter />
            <Mirror />
        </ContadorContext.Provider>
    )
}

export default App;