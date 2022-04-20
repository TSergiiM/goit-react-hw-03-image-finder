import { Gallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import styles from './App.module.css';
import { Component } from 'react';
export class App extends Component {
  state = {
    searchQuery: '',
  };
  handleSearchSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <Gallery searchQuery={this.state.searchQuery} />
        <Modal />
      </div>
    );
  }
}
