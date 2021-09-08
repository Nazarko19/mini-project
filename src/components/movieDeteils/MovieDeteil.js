import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovieDEtail} from "../../service/serviceMovie";

export default function MovieDeteil() {
  let state = useSelector(state => state)
  let dispatch = useDispatch()
  let {moviesdeteil} = state





  useEffect(()=>{
    getMovieDEtail(id).then(value => {
      dispatch({type:'getMovieDetail',payload:value.data.results})
    });
  },[])


  return (
      <div className={'moviesdeteils'}>
        {
          moviesdeteil && moviesdeteil.map(value=> <div>{value.title}</div>)
        }

      </div>
  );
}