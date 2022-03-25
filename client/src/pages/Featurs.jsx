import React from 'react'

export const Featurs = () => {
  return (
  <>
  
<section class="features">
  <div class="container">
    <div class="features__text container--pall">
      <h2>Features</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
      </p>
    </div>

    <div class="features__list container--pall">
      <li class="featureTap active">Simple Bookmarking</li>
      <li class="featureTap">Speedy Searching</li>
      <li class="featureTap">Easy Sharing</li>
    </div>

    <div class="features__feature featureTap active">
      <div class="feature__image"></div>

      <div class="feature__text container--pall">
        <h3>Bookmark in one click</h3>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop interface 
          gives you complete control over how you manage your favourite sites.
        </p>
        <a href="#" class="primary-btn btn-blue">More Info</a>
      </div>
    </div>

    <div class="features__feature featureTap speedy--searching">
      <div class="feature__image"></div>

      <div class="feature__text container--pall">
        <h3>Intelligent Search</h3>
        <p>
          Our powerful search feature will help you find saved sites 
          in no time at all. No need to trawl through all of your bookmarks.
        </p>
        <a href="#" class="primary-btn btn-blue">More Info</a>
      </div>
    </div>

    <div class="features__feature featureTap easy--sharing">
      <div class="feature__image"></div>

      <div class="feature__text container--pall">
        <h3>Share your bookmarks</h3>
        <p>
          Easily share your bookmarks and collections with others. 
          Create a shareable link that you can send at the click of a button.
        </p>
        <a href="#" class="primary-btn btn-blue">More Info</a>
      </div>
    </div>
  </div>
</section>
  
  
  </>
  )
}

export default Featurs;
