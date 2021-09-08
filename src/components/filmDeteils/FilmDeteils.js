export default function FilmDeteils(props) {
  console.log(props)
  let {location:{state}} = props
  return (
    <div>

      {
        state.id && <>{state.title} {state.original_title}
          {state.overview} </>
      }

    </div>
  );
}