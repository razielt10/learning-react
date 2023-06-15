import { useFetch, useRandom } from "../hooks"
import { BlockquoteItem } from "../03-examples/BlockquoteItem"
import { LoadingComponent } from "../components"

export const Layout = () => {

    const { random, onHandleRandom } = useRandom()

    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${random}`

    const {data, isLoading, hasError} = useFetch(url)

    // con !! transformo algo null o undefined en false y así desestructuro
    const {author, quote} = !!data && data[0]

    return (
        <>
        <h3>Breaking Bad Quotes</h3>

        <button type="button"
            disabled = { isLoading }
             className="btn btn-secondary" onClick={ () => onHandleRandom( random + 1) }>
            Randomize
        </button>

        { 
            isLoading 
                ? (
                <LoadingComponent />
            ) : (
                data.map( ({quote, author}, index) => {
                    const id = index + 1 
                    return (
                        <BlockquoteItem key={ id } quote={ quote } author={ author } />
                    )
                })
                
            )
        }

        </>
    )
}

