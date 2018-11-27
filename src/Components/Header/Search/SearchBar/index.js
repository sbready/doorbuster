import React from 'react';

import styles from './searchBar.less';

const SearchBar = ({ input, onChange }) => {
    return (
        <input
            type='text' 
            value={input}
            onChange={onChange}
            id='search-input' 
            placeholder='Search Doorbusters' 
            aria-label='Search Doorbusters'
            // autocomplete='off'
            className={styles.searchBar} 
        />
    );
}

export default SearchBar;