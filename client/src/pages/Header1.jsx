import React from 'react';
import Logo_img from '../assets/logo_1.png';

export const Header1 = () => {
    return (
        <>
            <header className='header'>
                <div className='overlay has-fade hide-for-desktop' />
                <nav className='flex flex-jc-sb flex-ai-c container container--pall'>
                    <a href='/home' className='header__logo logo'>
                        <i className='bx bxs-bookmark' />
                        <img src={Logo_img} alt='Logo image'  className='cls1'/>

                        <span>MP Police</span>
                    </a>
                    <a
                        href='#'
                        id='btnHamburger'
                        className='header__hamburger hide-for-desktop'
                    >
                        <span />
                        <span />
                        <span />
                    </a>
                    <div className='header__links hide-for-mobile'>
                        <a href='/home'>Home</a>
                        <a href='/upload'>Upload</a>
                        <a href='/search'>Search</a>
                        <a href='/about' className='btn-red'>
                            About US
                        </a>
                    </div>
                </nav>
                <div className='header__menu container--px has-fade hide-for-desktop'>
                <a href='#home'>Home</a>
                        <a href='#upload'>Upload</a>
                        <a href='/search'>SEARCH</a>
                        <a href='#' className='btn-red'>
                            About US
                        </a>
                </div>
                <div className='header__social-icons has-fade hide-for-desktop'>
                    <a href='#'>
                        <i className='bx bxl-facebook-square' />
                    </a>
                    <a href='#'>
                        <i className='bx bxl-twitter' />
                    </a>
                </div>
            </header>
        </>
    );
};
export default Header1;
