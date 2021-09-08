import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovie} from "../../service/serviceMovie";
import MoviesListCard from "../moviesdeteils/MoviesListCard";
import './MoviesList.css'
import {Route} from "react-router-dom";



export default function MoviesLists(props) {
    let {match:url} = props
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let {movies} = state





    useEffect(()=>{
        getMovie().then(value => {
            dispatch({type:'getMovies',payload:value.data.results})
        });
    },[])


    return (
        <div className={'movies1'}>
            {
                movies && movies.map(value => <MoviesListCard key={value.id} item={value}/>)
            }

            <Route path={`${url}/:id`}/>

        </div>
    );
}