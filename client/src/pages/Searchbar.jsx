import React, { useState } from 'react';
import axios from 'axios';
import Searchresults from './Searchresults';
import { url } from '../utils/api';
var data1 = require('../assets/data.json');

const Searchbar = ({ setData, setisloaded }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChanged = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleButtonClicked = async () => {
        const res = await axios.get(`${url}/locs/${searchQuery}`);
        console.log(res.data.data);
        setData(res.data.data);
        setisloaded(true);
    };

    return (
        <>
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
            </div>

            <button
                href='#'
                className='primary-btn btn-primary offset-md-4 avi1'
                onClick={handleButtonClicked}
            >
                <span className='fa fa-search'> </span>
                &nbsp; Search
            </button>
        </>
    );
};

export default Searchbar;
