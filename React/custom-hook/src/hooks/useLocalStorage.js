import React from 'react';

const useLocalStorage = (key, inicial) => {
    const [state, setState] = React.useState(() => {
        const local = window.localStorage.getItem(key)
        //caso já tenhamos o registro no localStorage, o valor deste é retornado 
        //caso contrário, o valor inicial é passado
        return local ? local : inicial
    })

    //aqui o hook useEffect será utilizado para atualizar o localStorage caso
    //a variável estado seja alterada, ou então, a chave 
    React.useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    //o conteúdo retornado é o que será disponibilizado para uso ao chamarmos esse hook
    //ao chamarmos setState passando um novo valor, teremos um update do localstorage
    //como sendo um efeito
    return [state, setState]
}

export default useLocalStorage;