import axios from "axios";
const KEY = "tcc9AyqR4VfB4Dy2jHWCxrETTv4EFWL3mS4oSR5g9gQ";
axios.defaults.baseURL = "https://api.unsplash.com";

interface Res{
    total:number;
    result:string;
}

export const FetchImages = async (query:string, currentPage:number):Promise<Res> => {
    const response  = await axios.get("/search/photos?",{
        params: {
            query: query, 
            client_id: KEY,
            page: currentPage,
            per_page: 12,
           orientation: 'landscape'
        }
    })
   
    return {
        result: response.data.results,
        total: response.data.total
    }
}
