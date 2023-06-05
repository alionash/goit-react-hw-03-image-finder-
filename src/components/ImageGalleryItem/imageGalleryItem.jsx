import PropTypes from 'prop-types';
import { ImageGalleryElem, ImageGalleryImg } from './imageGalleryItem.styled';


export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
  getItemClick,
}) => {
  const onClickImage = () => {
    getItemClick(largeImageURL);
  };

  return (
    <ImageGalleryElem>
      <ImageGalleryImg src={webformatURL} alt={tags} onClick={onClickImage} />
    </ImageGalleryElem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  getItemClick: PropTypes.func.isRequired,
};