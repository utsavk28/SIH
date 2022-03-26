import React, { useState } from 'react';
import axios from 'axios';
import { ml_url } from '../utils/api';

const Drag = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = async (e) => {
        e.preventDefault();
        // const res = await axios.get(ml_url);
        // console.log(res.data);
    };

    return (
        <>
            <form action='' method='POST' className='fatima'>
                <input
                    type='file'
                    multiple
                    className='muskan'
                    onChange={changeHandler}
                />
                <p>Drag your images/videos here or click in this area.</p>

                <button
                    onClick={handleSubmission}
                    type='submit'
                    className='skkq'
                >
                    Submit
                </button>
            </form>

            <div className='input-group mb-3 shak1 '>
                <input
                    type='text'
                    className='form-control '
                    placeholder='Longitude'
                    aria-label='Username'
                />
                <span className='input-group-text'>||</span>
                <input
                    type='text'
                    className='form-control '
                    placeholder='Lattitute'
                    aria-label='Server'
                />
            </div>
        </>
    );
};

export default Drag;
