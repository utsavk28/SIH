import React from 'react'

export const Faq = () => {
  return (
    <>
    
    <section className="faqs">
        <div className="container container--pall">
          <div className="faqs__info">
            <h1>Frequently Asked Questions</h1>
            <p>
              Here are some of our FAQs. If you have any other questions you’d like 
              answered please feel free to email us.
            </p>
          </div>
          <div className="faqs__questions">
            <div className="questions__question">
              <input type="radio" name="InpRadio" className="question__input-radio" id="faqsQuestion1" />
              <label htmlFor="faqsQuestion1" className="question__info">
                <h3>What is Bookmark?</h3>
                <span>
                  <i className="bx bx-chevron-down" />
                </span>
              </label>
              <div className="question__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                </p>
              </div>
            </div>
            <div className="questions__question">
              <input type="radio" name="InpRadio" className="question__input-radio" id="faqsQuestion2" />
              <label htmlFor="faqsQuestion2" className="question__info">
                <h3>How can I request a new browser?</h3>
                <span>
                  <i className="bx bx-chevron-down" />
                </span>
              </label>
              <div className="question__text">
                <p>
                  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                </p>
              </div>
            </div>
            <div className="questions__question">
              <input type="radio" name="InpRadio" className="question__input-radio" id="faqsQuestion3" />
              <label htmlFor="faqsQuestion3" className="question__info">
                <h3>Is there a mobile app?</h3>
                <span>
                  <i className="bx bx-chevron-down" />
                </span>
              </label>
              <div className="question__text">
                <p>
                  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                  sollicitudin ex et ultricies bibendum.
                </p>
              </div>
            </div>
            <div className="questions__question">
              <input type="radio" name="InpRadio" className="question__input-radio" id="faqsQuestion4" />
              <label htmlFor="faqsQuestion4" className="question__info">
                <h3>What about other Chromium browsers?</h3>
                <span>
                  <i className="bx bx-chevron-down" />
                </span>
              </label>
              <div className="question__text">
                <p>
                  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                  vitae neque eget nisl gravida pellentesque non ut velit.
                </p>
              </div>
            </div>
            <a href="#" className="faqs__cta">More Info</a>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Faq;