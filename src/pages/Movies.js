import { useEffect, useState } from 'react';
import { fetchByQuery } from 'api';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import SearchBar from 'components/SearchBar/SearchBar';

import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [requestDone, setRequestDone] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');

  const searchQuery = searchParams.get('search') ?? '';

  useEffect(() => {
    const result = async () => {
      try {
        if (searchQuery.trim() === '') {
          return;
        }
        const filmList = await fetchByQuery(searchQuery);
        setSearchResult(filmList);

        if (filmList) {
          setRequestDone(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.search.value === '') {
      toast.error('Please complete the search field. ');
      setSearchParams({});
      return;
    }
    setSearchParams({ search: e.target.elements.search.value });
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        query={query}
      />
      {requestDone ? <MovieList movies={searchResult} /> : ''}
    </>
  );
};

export default Movies;
