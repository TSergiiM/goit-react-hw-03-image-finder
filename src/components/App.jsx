import { Gallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import styles from './App.module.css';
export const App = () => {
  return (
    <div className={styles.App}>
      <Searchbar />
      <Gallery />
      <Modal />
      <Loader />
    </div>
  );
};
