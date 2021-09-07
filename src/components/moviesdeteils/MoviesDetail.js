import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { getMovieDEtail} from "../../service/serviceMovie";


export default function MoviesDetail() {

    export default function MoviesDetail() {
        let state = useSelector(state => state)
        let dispatch = useDispatch()
        let {movies} = state





        useEffect(()=>{
            getMovieDEtail(id).then(value => {
                dispatch({type:'getMovies',payload:value.data.results})
            });
        },[])


        return (
            <div className={'movies1'}>
                {
                    movies && movies.map(value => <div>  <h4>Title:</h4> {value.original_title}</div>)
                }

            </div>
        );
    }
  return (
    <div>


    </div>
  );
}