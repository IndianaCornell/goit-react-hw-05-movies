import {
  SearchFormStyled,
  SearchInputStyled,
  SearchButtonStyled,
} from 'components/SearchBar/SearchBar.styled';

const SearchBar = ({ handleInputChange, handleSubmit, query }) => {
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <label>
        <SearchInputStyled
          type="text"
          autoComplete="off"
          name="search"
          value={query}
          onChange={handleInputChange}
        />
      </label>
      <SearchButtonStyled type="submit">Search</SearchButtonStyled>
    </SearchFormStyled>
  );
};

export default SearchBar;
