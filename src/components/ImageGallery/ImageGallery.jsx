import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import styles from './ImageGallery.module.css';
import { Loader } from 'components/Loader/Loader';
import { searchQueryAPI } from '../../services/api';

export class Gallery extends Component {
  state = {
    searchQuery: null,
    error: null,
    status: 'idle',
    showModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: 'pending' });
      searchQueryAPI(this.props.searchQuery)
        .then(searchQuery => this.setState({ searchQuery, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { searchQuery, error, status } = this.state;
    const { onClick } = this.props;

    if (status === 'idle') {
      return <div>Pusto!</div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'resolved') {
      return (
        <ul className={styles.ImageGallery}>
          <GalleryItem searchQuery={searchQuery} onClick={onClick} />
        </ul>
      );
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
  }
}
