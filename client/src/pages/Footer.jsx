import React from 'react'

export const Footer = () => {
  return (
    <>
    
    <section className="contact">
        <div className="container container--pall">
          <div className="contact__header">
            <span className="contact__header--subtitle">35,000+ already joined</span>
            <h1 className="contact__header--title">Stay up-to-date with what we’re doing</h1>
          </div>
          <form className="contact__form">
            <div className="form__input--group form__input--group--email">
              <input className="form__input form__input--email" type="text" name="email" placeholder="Enter your email address" />
              <span className="form__input--error--icon"><i className="bx bxs-error-circle" /></span>
              <span className="form__input--error--message" />
            </div>
            <div className="form__input--group form__input--group--submit">
              <input className="form__input form__input--submit" type="submit" defaultValue="Contact Us" />
            </div>
          </form>
        </div>
      </section>
    
    
    </>
  )
}
 export default Footer;