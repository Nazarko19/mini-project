export default function MoviesListCard({item}) {
  return (
    <div>
        {item.overview}{item.release_date}{item.original_title}{item.popularity}

    </div>
  );
}