export default function FilmDeteils(props) {

  let {location:{state}} = props
  // console.log(state)
  return (
    <div>

      {
        state.id && <><h4>{state.original_title}</h4>
        <h4><img src={`https://image.tmdb.org/t/p/w300${state.poster_path}`} alt={`${state.original_title}`}/></h4>
        <h4>Overview: </h4> {state.overview}
        <h4>Release Data: </h4> {state.release_date}
        <h4>Language:</h4> {state.original_language}
        <h4>Rating:</h4>{state.popularity}</>
      }

    </div>
  );
}