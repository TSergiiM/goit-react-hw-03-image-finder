import styles from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { Component } from 'react';
export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchQuery = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
    if (this.state.searchQuery.trim() === '') {
      alert('Поле не може бути пустим');
      return;
    }
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <ImSearch />
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchQuery}
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
}
