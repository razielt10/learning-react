import 'whatwg-fetch'

export const getImagen = async(apiKey) => {

    try {

        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const image = data.images.original;

        return image;
        /*const img = document.createElement('img');
        img.src = url;
        document.body.append( img );*/

    } catch (error) {
        // manejo del error
        
        return new Error('errors.giphy-client')
    }
}
