import styles from './ImageGalleryItem.module.css';
export const GalleryItem = ({ searchQuery: { hits }, onClick }) => {
  return hits.map(hit => {
    return (
      <li className={styles.ImageGalleryItem} key={hit.id}>
        <img
          className={styles.ImageGalleryItemImage}
          src={hit.webformatURL}
          alt=""
          onClick={onClick}
        />
      </li>
    );
  });
};
