import React from 'react';

import './Search.css';

const Search = ({placeholder}) => {
    return (
        <div className="wrapper-search">
            <input type="search" placeholder={placeholder}/>
        </div>
    );
}

export default Search;