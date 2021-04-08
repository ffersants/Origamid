import React from 'react'

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    async function request(url, options){
        const reponse = await fetch(url);
        const responseJSON = await reponse.json()
        setData(responseJSON)
    }

    return {data, error, loading, request}
}

export default useFetch