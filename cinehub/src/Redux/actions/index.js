import {GET_ALL,GET_BY_NAME,GET_MOVIES_DETAIL, FILTER ,RESET } from "./types"
import axios from "axios"



export function getAllMovies(){

    console.log("getAllMovies")
   return async dispatch =>{
    const res = await axios
    .get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)    
    .then(res =>{
        dispatch({
            type:GET_ALL,
            payload:res.data.results
        })
    })
}
}


export function getMoviesByName(name){


    if(name.length<1){
        return {
            type:RESET
            
        }
    }


    return async dispatch =>{
        const res = await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
        .then(res =>{
            dispatch({
                type:GET_BY_NAME,
                payload:res.data.results
            })
        })
    }
}


export function getMovieDetails(id){
    const Id=parseInt(id)

    return async dispatch =>{
        const res = await axios
        .get(`https://api.themoviedb.org/3/movie/${Id}?api_key=${process.env.REACT_APP_API_KEY}`)    
        .then(res =>{
            dispatch({
                type:GET_MOVIES_DETAIL,
                payload:res.data
            })
        })
    }
}


export function FilteredMovies(value){

    console.log("FilteredMovies", value)
    
    if(value===null){
        return {
            type: RESET,
            
          };
    }
    return {
        type: FILTER,
        payload: value,
      };
}
