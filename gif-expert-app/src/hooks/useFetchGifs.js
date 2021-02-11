import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria)=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    useEffect(async ()=>{
    
       setState({data:await getGifs(categoria), loading:false});
    },[categoria])

    return state;
}