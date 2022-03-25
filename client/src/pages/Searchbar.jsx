import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../utils/api';

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
            {/* <div className='input-group input-group-xl'>
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
                className='primary-btn btn-primary offset-md-10 offset-mt-4 avi1'
                onClick={handleButtonClicked}
            >
                <span className='fa fa-search'> </span>
                &nbsp; Search
            </button> */}


            <div className="input-group mb-3">
        <input
         type="text" 
         className="form-control" 
         placeholder="Search Number.." 
         aria-label="Search Number.." 
         aria-describedby="button-addon2"
         value={searchQuery}
         onChange={handleInputChanged}
          />

        <button className="btn btn-outline-primary" 
        type="button" 
        id="button-addon2"
        onClick={handleButtonClicked}
        >  <span className='fa fa-search'> </span>   &nbsp;  Search</button>
      </div>

        </>
    );
};

export default Searchbar;
