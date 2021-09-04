import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovie} from "../../service/serviceMovie";
import MoviesListCard from "../moviesdeteils/MoviesListCard";



export default function MoviesLists() {
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
                movies && movies.map(value => <MoviesListCard key={value.id} item={value}/>)
            }

        </div>
    );
}