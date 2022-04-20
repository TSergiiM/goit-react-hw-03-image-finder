import { Gallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import styles from './App.module.css';
import { Component } from 'react';
export class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleSearchSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { showModal, searchQuery } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <Gallery searchQuery={searchQuery} onClick={this.togleModal} />
        {showModal && <Modal onClose={this.togleModal}></Modal>}
      </div>
    );
  }
}
