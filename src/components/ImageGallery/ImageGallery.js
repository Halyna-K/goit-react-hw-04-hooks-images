import s from "./ImageGallery.module.css";
import { useEffect, useState } from "react";
import { FetchObject } from "../Services/pixabay";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "..//Button/Button";

const base_url = `https://pixabay.com/api/`;
const api_key = `23194515-4229c06a71e7a36cb0b196559`;
const newFetchObject = new FetchObject(base_url, api_key);

export function ImageGallery({ searchValue, perPage, onImageClick }) {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchValue.trim()) return;
    newFetchObject.resetPage();
    newFetchObject.query = searchValue;
    newFetchObject.perPage = perPage;
    newFetchObject
      .searchPhotos()
      .then((searchResults) => {
        setSearchResults(searchResults);
      })
      .catch((err) => {
        setError(error);
        console.log(err);
      });
  }, [searchValue, perPage, setSearchResults, error]);

  if (newFetchObject.page !== 1) {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  }

  const handleClick = () => {
    newFetchObject.page = 1;
    newFetchObject
      .searchPhotos()
      .then((searchResults) => {
        setSearchResults((prev) => [...prev, ...searchResults]);
      })
      .catch((err) => {
        setError(error);
        console.log(err);
      });
  };

  return (
    <>
      <ul className={s.ImageGallery}>
        {searchResults.length > 0 &&
          searchResults.map((el) => (
            <ImageGalleryItem
              key={el.id}
              image={el}
              src={el.largeImageURL}
              onImageClick={onImageClick}
            />
          ))}
      </ul>
      {searchResults.length >= 12 && <Button onClick={handleClick} />}
    </>
  );
}
