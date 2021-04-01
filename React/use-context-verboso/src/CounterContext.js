import React from 'react';

export const CounterContext = React.createContext();

export const CounterContextProvider = ({children}) => {
    let [total, setTotal] = React.useState(0)

    return (
        <CounterContext.Provider value={{total, setTotal}}>
            {children}
        </CounterContext.Provider> 
    )
}