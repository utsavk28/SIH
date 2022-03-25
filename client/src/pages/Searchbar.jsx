import React, { useState } from 'react';
import axios from 'axios';
import Searchresults from './Searchresults';

var data = require('../assets/data.json');

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChanged = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleButtonClicked = () => {
        var searchQuery = this.state.searchQuery;
        console.log('ablhdjln');

        console.log(data);
        //window.location.href = "https://youtube.com/results?search_query=" + searchQuery;
    };

    return (
        <>
            <div className='update-bg-container'>
                <div className='d-flex flex-row '>
                    <div className='container h-100 d-flex'>
                        <div className='my-auto w-100'>
                            <div className='input-group input-group-xl'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Search...'
                                    aria-label='Search...'
                                    aria-describedby='button-addon2'
                                    value={searchQuery}
                                    onChange={handleInputChanged}
                                />
                                <div className='input-group-append'>
                                    <button
                                        className='btn btn-pink'
                                        type='submit'
                                        id='button-addon2'
                                    >
                                        <i
                                            className='fa fa-search'
                                            onClick={handleButtonClicked}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Searchbar;
