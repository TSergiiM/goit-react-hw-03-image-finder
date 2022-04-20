import styles from './ImageGalleryItem.module.css';
export const GalleryItem = ({ searchQuery: { hits } }) => {
  return hits.map(hit => {
    return (
      <li className={styles.ImageGalleryItem} key={hit.id}>
        <img
          className={styles.ImageGalleryItemImage}
          src={hit.webformatURL}
          alt=""
        />
      </li>
    );
  });
};
