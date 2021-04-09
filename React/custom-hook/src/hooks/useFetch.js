import React from 'react'

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    const request = React.useCallback(async(url, options) => {
        let responseJSON;
        let response;
        try{
            setError(null)
            response = await fetch(url, options);
            responseJSON = await response.json()
            setData(responseJSON)
        } catch(e){
            responseJSON = null
            setError('Ops... Algo deu errado!')
        } finally{
            setLoading(false)
            return {response, responseJSON}
        }
    }, [])

    return {data, error, loading, request}
}

export default useFetch