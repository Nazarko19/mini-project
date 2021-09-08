export default function FilmDeteils(props) {

  let {location:{state}} = props
  console.log(state)
  return (
    <div>

      {
        state.id && <>{state.title} {state.original_title}
          {state.overview} </>
      }

    </div>
  );
}