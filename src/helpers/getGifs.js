export const getGifs = async( category ) => {

    const apiKey = 'kbv241U1r9Bti0yhExZWTN0rCjyIgPZc'; // Remplazar ApiKey
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=8`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}