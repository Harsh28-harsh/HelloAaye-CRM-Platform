const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by name, email or company..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;