
import { ImageGalleryItem } from 'components/ImageGalleryItem/imageGalleryItem';
import { Gallery } from '../ImageGallery/imageGallery.styled';
import PropTypes from 'prop-types';


export const ImageGallery = ({ items, getItemClick }) => {
  return (
    <Gallery>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} getItemClick={getItemClick}/>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
//   getItemClick: PropTypes.func.isRequired,
};