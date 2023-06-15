import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [ gifs, setGifs ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    const getGifAsync = async() => {
        const newGifs = await getGifs(category)
        setGifs(newGifs)
        setIsLoading(false)
    }

    useEffect( () => { 
        setTimeout( getGifAsync, 200)
    }, [] )

    return {
        gifs,
        isLoading
    }
}