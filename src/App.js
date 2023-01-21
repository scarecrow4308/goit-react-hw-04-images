import { useState } from "react";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Modal } from "./components/Modal/Modal";
import { GlobalStyle, Main } from "./App.styled";
import { ImageClass } from "./API/ImagesApi";

export const App = () => {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imagePath, setImagePath] = useState(``);
  const [loading, setLoading] = useState(false);

  const painting = new ImageClass();

  const onLoadMoreClick = async () => {
    setLoading(true);
    setPage((p) => p + 1);
    const fetchData = await painting.fetchPhotos(query, page);
    setLoading(false);
    const { hits } = fetchData;
    setImages((images) => [...images, ...hits]);
  };

  return (
    <>
      <Main>
        <Searchbar
          setQuery={setQuery}
          setPage={setPage}
          setImages={setImages}
          setLoading={setLoading}
        />
        <ImageGallery
          images={images}
          setModalIsOpen={setModalIsOpen}
          setImagePath={setImagePath}
          loading={loading}
        />
      </Main>
      {images && <Button onLoadMoreClick={onLoadMoreClick} />}
      {modalIsOpen && (
        <Modal closeModal={() => setModalIsOpen((s) => !s)}>
          <img src={imagePath} />
        </Modal>
      )}
      <GlobalStyle />
    </>
  );
};
