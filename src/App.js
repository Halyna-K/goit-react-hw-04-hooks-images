import "./App.css";
import { Component } from "react";
import { SearchBar } from "./components/Searchbar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Modal } from "./components/Modal/Modal";
import LoaderSpinner from "./components/Loader/Loader";

class App extends Component {
  state = {
    images: [],
    searchValue: "",
    largeImage: "",
    perPage: 12,
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // this.setState({ isLoading: !this.state.isLoading });
    if (prevState.images !== this.state.images) {
      this.setState(this.state.images);
    }
    // if (prevState.isLoading !== this.state.isLoading) {
    //   this.setState(this.state.isLoading);
    // }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  onImageClick = (largeImageURL) => {
    this.setState({ largeImage: largeImageURL });
    this.toggleModal();
  };

  getSearchValues = (searchValue, perPage) => {
    // this.setState({ isLoading: !this.state.isLoading });
    this.setState({ searchValue, perPage, isLoading: !this.state.isLoading });
  };

  render() {
    const { searchValue, perPage, showModal, largeImage, isLoading } =
      this.state;

    return (
      <div className="App">
        <SearchBar getSearchValues={this.getSearchValues} />
        {isLoading && <LoaderSpinner />}

        <ImageGallery
          searchValue={searchValue}
          perPage={perPage}
          onImageClick={this.onImageClick}
        />

        {showModal && (
          <Modal toggleModal={this.toggleModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
