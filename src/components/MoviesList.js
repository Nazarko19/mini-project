import {useDispatch, useSelector} from "react-redux";
import {useEffect, } from "react";
import {getGenres, getMovie} from "../service/serviceMovie";


export default function MoviesList() {
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let {movies} = state


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