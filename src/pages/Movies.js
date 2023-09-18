import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchPar = searchParams.get('search');

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          setSearchParams({ search: e.target.elements.search.value });
        }}
      >
        <label>
          <input type="text" autoComplete="off" name="search" />
        </label>
        <button type="submit">Search </button>
      </form>
    </>
  );
};

export default Movies;
