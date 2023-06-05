import { Component } from "react";
import { GlobalStyle } from "GlobalStyles";
import { getImages } from "servises/api";
import { SearchBar } from "components/Searchbar/searchbar";
import { ImageGallery } from "components/ImageGallery/imageGallery";
import { LoadMore } from "components/Button/button";
import { Loader } from "components/Loader/loader";
import { ModalOvelay } from "components/Modal/modal";



export class App extends Component {

  state = {
    images: [],
    searchQuery: '',
    page: 1,
    totalPages: 0,
    query: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getDataImages();
    }
  }

  handleSubmitSearchQuery = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };

    getDataImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const { hits } = await getImages(searchQuery, page);

      this.setState(({ images, page }) => ({
        images: [...images, ...hits],
        page: page + 1,
      }));

      if (page !== 1) {
        // scrollOnLoad();
      }
    } catch (error) {
      this.setState({ error: 'Oops something went wrong...' });
    } finally {
      this.setState({ isLoading: false });
    }
  };


  getLargeImage = largeImage => {
    this.setState({ largeImage, isModalOpen: true });
  };

  // Тогл модалки
  toggleShowModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { images, largeImage, isModalOpen, isLoading, error } = this.state;


    return (
    <div>
        <SearchBar onSubmit={this.handleSubmitSearchQuery } />
        
        <ImageGallery items={images} getItemClick={this.getLargeImage} />
        {images.length >= 12 && <LoadMore onLoadMore={() => this.getDataImages}/>}
        {isLoading && <Loader />}
        {isModalOpen && <ModalOvelay largeImageURL={largeImage} onClick={this.toggleShowModal}/>}
        
      <GlobalStyle/>
    </div>
  );
  }
};