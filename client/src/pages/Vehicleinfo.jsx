import React from 'react';

const Vehicleinfo = () => {
    return (
        <>
            <div className='drag-area'>
                <div className='icon'>
                    <i className='fas fa-cloud-upload-alt' />
                </div>
                <header>Drag &amp; Drop to Upload File</header>
                <span>OR</span>
                <button>Browse File</button>
                <input type='file' hidden />
            </div>
        </>
    );
};

export default Vehicleinfo