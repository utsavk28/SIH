import React from 'react';

const Header = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg  '>
                <a className='navbar-brand' href='#'>
                    <img
                        src='https://www.mppolice.gov.in/sites/default/files/MP-POLICE_0_0.png'
                        className='mp-police1-navbar-2-image'
                    />
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNavAltMarkup'
                    aria-controls='navbarNavAltMarkup'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
            </nav>

            <div className='help-bg-container'>
                <div className='d-flex flex-row  offset-md-4'>
                    <i className='fas fa-phone-alt help-phone-icon' />
                    <a className='nav-link active' href='#'>
                        HOME
                    </a>
                    <div className='help-vertical-line ml-5' />
                    <a className='nav-link active' href='#'>
                        CONTACT
                    </a>
                    <div className='help-vertical-line ml-5' />
                    <a className='nav-link active' href='#'>
                        ABOUT US
                    </a>
                    <div className='help-vertical-line ml-5' />
                </div>
            </div>
        </>
    );
};

export default Header;
