import React from 'react';
import SearchBar from './SearchBar/index';
import SearchButton from './SearchButton/index';
// import SearchDropDown from './SearchDropDown';

const Search = () => {
    return (
        <div>
            <SearchBar />
            <SearchButton />
        </div>
    )
}

export default Search;



    //     this.state = {
    //         input: '',
    //         autocomplete: false,
    //     }

    // handleInput = e => {
    //     let text = e.target.value
    //     this.setState({
    //         input: text,
    //         autocomplete: text.length >= 3
    //     })
    // }

    // getUrlSafeTerm(input) {
    //     const newInput = input.replace(/ /g, '+').replace(/’/g, '\'');
    //     return encodeURI(newInput).replace(/&/g, '%26');
    // }

    // submitSearch = (event, input) => {
    //     event.preventDefault()
    //     location.href = `/search?keywords=${this.getUrlSafeTerm(input)}&SearchType=Header`;
    //     this.setState({
    //         input: ''
    //     })
    // }

    //     return (
    //         <div>
    //             <form className={styles.searchArea}>
    //                 <SearchBar input={input} onChange={this.handleInput} />
    //                 <SearchButton input={input} submitSearch={this.submitSearch} />
    //             </form>
    //             <SearchDropDown autocomplete={autocomplete} input={input} updatedInput={this.getUrlSafeTerm(input)} />
    //         </div>
    //     );
    // }