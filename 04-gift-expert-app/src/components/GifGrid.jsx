import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

    /*let gifs = [
         {id: '1', title:'coso', url:'imagens.png'}
    ]*/

    /*const [ gifs, setGifs ] = useState([])

    const getGifAsync = async() => {
        const newGifs = await getGifs(category)
        setGifs(newGifs)
    }

    useEffect( () => { 
        getGifAsync()
        // se podría pero no es buena practica
        //getGifs(category)
        //    .then(....)
        //    .catch(err => console.error) ...

        // no se puede dentro del useEffect
        //const newGifs = await getGifs(category)
        //setGifs(newGifs) 

    }, [] )*/

    //getGifs('ffff')

    const { gifs, isLoading } = useFetchGifs( category )
    

    return (
        <>        
            {         
            <div className='category'>
                <h3>{ category } </h3>
                {
                    isLoading && (<div >Cargando...</div>)
                }
                <div className='category-items'>
                {
                    gifs.map( (gif) => (
                        <GifItem key={ gif.id }
                         { ...gif } />
                    ))
                }
                </div>
            </div>
            }
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

GifGrid.defaultProps = {
    category: ''
}
