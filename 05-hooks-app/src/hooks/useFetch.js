import { useEffect, useState } from "react";

export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = () => {

        setState({
            ...state,
            isLoading: true,
        })

        fetch( url )
            .then(resp => resp.json())
            .then(data => {
                setState({
                    data: data,
                    isLoading: false,
                    hasError: null,
                })
            })
            .catch(err => {
                setState({
                    data: null,
                    isLoading: false,
                    hasError: err,
                })
            })        
    }
    

    useEffect( ()=> {
        getFetch()
    }, [url] )

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}