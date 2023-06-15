export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search`
        + `?api_key=eim24RuezM1Yiad7So8Jz3O6YC5hvzw9` 
        + `&q=${category}&limit=10`
    console.log(url)
    const resp = await fetch( url );

    const { data } = await resp.json()

    const gifs = data.map( gif => ({ 
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }) )

    return gifs
}