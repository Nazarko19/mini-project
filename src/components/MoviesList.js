import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getGenres, getMovie, getMoviesDetails} from "../service/serviceMovie";

export default function MoviesList({item}) {
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let {movies,genres} = state
    let [deteils,setDeteils] = useState([])


    useEffect(()=>{
        getMovie().then(value => {
            dispatch({type:'getMovies',payload:value.data.results})
        });
    },[])

    useEffect(()=>{
        getGenres().then(value => {
            dispatch({type:'getGenres',payload:value.data.genres})
        })
    },[])

    useEffect(()=>{
        getMoviesDetails()
    })
  return (
    <div>
        {
            movies && movies.map(value =><div key={value.id}>{value.title} </div>)
        }
        <div>
            {
              genres && genres.map(value=> <div>{value.name}</div>)
            }
        </div>

    </div>
  );
}