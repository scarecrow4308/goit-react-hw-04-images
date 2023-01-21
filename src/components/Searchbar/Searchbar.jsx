import { SearchForm } from "./SearchForm/SearchForm";
import { SearchBar } from "./Searchbar.styled";
import PropTypes from "prop-types";

export const Searchbar = ({ setQuery, setPage, setImages, setLoading }) => {
  return (
    <SearchBar>
      <SearchForm
        setQuery={setQuery}
        setPage={setPage}
        setImages={setImages}
        setLoading={setLoading}
      />
    </SearchBar>
  );
};

SearchBar.propTypes = {
  setQuery: PropTypes.func,
  setPage: PropTypes.func,
  setImages: PropTypes.func,
  setLoading: PropTypes.func,
};
