const API_KEY="PJaS1HplSyfVX8LrB11GYA4G9FMaN0Nd";
const limit = 10;
export const getGifs = async (categoria)=>{
    const busqueda = encodeURI(categoria);
    const url = `https://api.giphy.com/v1/gifs/search?q=${busqueda}&limit=${limit}&api_key=${API_KEY}`;
    const resp= await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    });
    return gifs;
};