import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenres} from "../../service/serviceMovie";

export default function Genres() {
    let state = useSelector(state => state)
    let dispatch = useDispatch()
    let {genres} = state


    useEffect(()=>{
        getGenres().then(value => {
            dispatch({type:'getGenres',payload:value.data.genres})
        })
    },[])

    return (
    <div>

            {
                genres && genres.map(value=> <div key={value.id}>{value.name}</div>)
            }

    </div>
  );
}