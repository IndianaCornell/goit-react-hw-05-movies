const SearchBar = ({ handleInputChange, handleSubmit, query }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          autoComplete="off"
          name="search"
          value={query}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
