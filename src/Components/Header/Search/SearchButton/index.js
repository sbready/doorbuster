import React from 'react';

import styles from './searchButton.less';

const SearchButton = ({ submitSearch, input }) => {
    return (
        <button className={styles.searchButton} onClick={(e) => submitSearch(e, input)}>
            Submit
        </button>
    );
}

export default SearchButton;
