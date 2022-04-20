import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
export const Gallery = () => {
  return (
    <ul className={styles.ImageGallery}>
      <GalleryItem />
    </ul>
  );
};
