import { SearchButton } from "./SearchButton/SearchButton";
import { SearchFormStyled, SearchFormInput } from "./SearchForm.styled";
import { ImageClass } from "../../../API/ImagesApi";
import PropTypes from "prop-types";

export const SearchForm = ({ setQuery, setPage, setImages, setLoading }) => {
  const images = new ImageClass();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { value } = e.target.elements.search;
    setQuery(value);
    const data = await images.fetchPhotos(value, 1);
    setPage(2);
    setLoading(false);
    const { hits } = data;
    setImages(hits);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <SearchButton type="submit" />
      <SearchFormInput
        type="text"
        placeholder="Search images and photos"
        autocomplete="off"
        name="search"
        autoFocus
      />
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  setQuery: PropTypes.func,
  setPage: PropTypes.func,
  setImages: PropTypes.func,
  setLoading: PropTypes.func,
};
