import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExperApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCat) => {
        // setCounter(counter + 1)
        // setCategories( [...categories, 'Otro'] )
        const found = categories.filter( c => {
            return c.toLowerCase() == newCat.toLowerCase()
        })
        if (found.length != 0) {
            console.log('ya tengo esa categoria')
            return 
        }

        setCategories( (c) =>  [...c, newCat] )
    } 

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            
            {/* input */}
            <AddCategory onAddCategory={ onAddCategory } />

            {/* Listado Gif */}
            {
                categories.map( (cat) => (
                    <GifGrid key={ cat } category={ cat } />
                ))
            }
        </>
    )
}