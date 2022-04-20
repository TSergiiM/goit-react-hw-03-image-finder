import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import styles from './ImageGallery.module.css';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

const API_KEY = '25371642-f176f31923c7990a059799838';
const BASE_URL = 'https://pixabay.com/api/';

export class Gallery extends Component {
  state = {
    searchQuery: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: 'pending' });
      fetch(
        `${BASE_URL}/?q=${this.props.searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`blablabla`));
        })
        .then(searchQuery => this.setState({ searchQuery, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { searchQuery, error, status } = this.state;

    if (status === 'idle') {
      return <div>Pusto!</div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={styles.ImageGallery}>
            <GalleryItem searchQuery={searchQuery} />
            <Button>Load more</Button>
          </ul>
        </>
      );
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    return;
  }
}
