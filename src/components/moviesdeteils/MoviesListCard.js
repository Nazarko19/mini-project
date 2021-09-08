import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route


} from "react-router-dom";




export default function MoviesListCard({item}) {
  return (
    <div>

       <h4>Title:</h4> {item.original_title}
        <h4><img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={`${item.original_title}`}/></h4>
         <h4>Overview: </h4> {item.overview}
         <h4>Release Data: </h4> {item.release_date}
         <h4>Language:</h4> {item.original_language}
         <h4>Rating:</h4>{item.popularity}

        <h4> <Link to={{pathname:`/movies/${item.id}`,state:item}}>get deteil</Link></h4>
        <hr/>
    </div>
  );
}