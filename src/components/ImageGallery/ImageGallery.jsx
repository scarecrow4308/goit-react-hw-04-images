import { Loader } from "../Loader/Loader";
import { ImageGalleryStyled } from "./ImageGallery.styled";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export const ImageGallery = ({
  images,
  setModalIsOpen,
  setImagePath,
  loading,
}) => {
  if (images) {
    const element = images.map(({ id, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        loading={loading}
        tags={tags}
        setImagePath={setImagePath}
        setModalIsOpen={setModalIsOpen}
        largeImageURL={largeImageURL}
      />
    ));

    return <ImageGalleryStyled>{element}</ImageGalleryStyled>;
  }

  if (loading) return <Loader />;
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  setModalIsOpen: PropTypes.func,
  setImagePath: PropTypes.func,
  loading: PropTypes.bool,
};
