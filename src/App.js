import "./App.css";
import { useState, useEffect } from "react";
import { useToggle } from "./hooks/useToggle";
import { SearchBar } from "./components/Searchbar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Modal } from "./components/Modal/Modal";
import LoaderSpinner from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [largeImage, setLargeImage] = useState("");
  const [showModal, setShowModal] = useToggle(false);
  const [isLoading, setIsLoading] = useToggle(false);

  useEffect(
    (prevState) => {
      if (prevState !== images) {
        setImages(images);
      }
    },
    [images, setImages]
  );

  const getSearchValues = ({ searchValue, perPage }) => {
    setIsLoading(!isLoading);
    setSearchValue(searchValue);
    setPerPage(perPage);
  };

  const onImageClick = (largeImageURL) => {
    setLargeImage(largeImageURL);
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <SearchBar getSearchValues={getSearchValues} />

      <ImageGallery
        searchValue={searchValue}
        perPage={perPage}
        onImageClick={onImageClick}
      />
      {isLoading && <LoaderSpinner />}

      {showModal && (
        <Modal toggleModal={setShowModal}>
          <img src={largeImage} alt="" />
        </Modal>
      )}
    </div>
  );
}
export default App;
