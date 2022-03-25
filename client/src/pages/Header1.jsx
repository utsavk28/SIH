import React from 'react'

export const Header1 = () => {
  return (
   

    <>
    
    <header className="header">
        <div className="overlay has-fade hide-for-desktop" />
        <nav className="flex flex-jc-sb flex-ai-c container container--pall">
          <a href="/" className="header__logo logo">
            <i className="bx bxs-bookmark" />
            <span>bookmark</span>
          </a>
          <a href="#" id="btnHamburger" className="header__hamburger hide-for-desktop">
            <span />
            <span />
            <span />
          </a>
          <div className="header__links hide-for-mobile">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#" className="btn-red">Login</a>
          </div>
        </nav>
        <div className="header__menu container--px has-fade hide-for-desktop">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
        </div>
        <div className="header__social-icons has-fade hide-for-desktop">
          <a href="#">
            <i className="bx bxl-facebook-square" />
          </a>
          <a href="#">
            <i className="bx bxl-twitter" />
          </a>
        </div>
      </header>
    
    </>
  )
}
export default Header1;