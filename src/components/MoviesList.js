import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState,} from "react";
import {getMovie, getMoviesDetails} from "../service/serviceMovie";
import MoviesListCard from "./moviesdeteils/MoviesListCard";


export default function MoviesList({item}) {
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let {movies} = state

    let [details,setDetails]= useState([])




    useEffect(()=>{
        getMovie().then(value => {
            dispatch({type:'getMovies',payload:value.data.results})
        });
    },[])


  return (
    <div>
        {
            movies && movies.map(value =><div key={value.id}>{value.title} </div>)
        }

    </div>
  );
}