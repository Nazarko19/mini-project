import {Link} from "react-router-dom";


export default function MoviesListCard({item}) {
  return (
    <div className={'movieslistCard'}>

        <h3>  {item.original_title} </h3>
        <h4><img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.original_title}`}/></h4>
         {/*<h4>Overview: </h4> {item.overview}*/}
         {/*<h4>Release Data: </h4> {item.release_date}*/}
         {/*<h4>Language:</h4> {item.original_language}*/}
         {/*<h4>Rating:</h4>{item.popularity}*/}

       <h4> <Link to={{pathname:`/movies/${item.id}`,state:item}}>get deteils</Link></h4>
    </div>
  );
}