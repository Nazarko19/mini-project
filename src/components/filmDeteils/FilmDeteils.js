export default function FilmDeteils(props) {
  let {location:{state}} = props
  return (
    <div>

      {
        state && {state.id}
      }

    </div>
  );
}