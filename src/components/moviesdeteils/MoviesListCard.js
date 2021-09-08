import {Link} from "react-router-dom";


export default function MoviesListCard({item}) {
  return (
    <div className={'movieslistCard'}>

        <h3>  {item.original_title} </h3>
        <h4><img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.original_title}`}/></h4>

       <h4> <Link to={{pathname:`/movies/${item.id}`,state:item}}>get deteils</Link></h4>
    </div>
  );
}