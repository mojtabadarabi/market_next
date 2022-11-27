export async function UseFetch(url){
    try {
        const data = await fetch(url,{
            method:'get'
        }) 
        return await data.json()
    } catch (error) {
        error 
    }
}