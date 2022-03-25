import React from 'react'
import Drag from './Drag'

export const Featurs = () => {
  return (
  <>
  
<section class="features">
  <div class="container">
    <div class="features__text container--pall">
      <h2>Upload Image/Video</h2>
      <p>
        Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
      </p>
    </div>

    <div class="features__list container--pall">
      
     
    </div>
    <div class="features__feature featureTap active">
      <div class="">


        <Drag />
      </div>

      <div class="feature__text container--pall">
        <h3>Bookmark in one click</h3>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop interface 
          gives you complete control over how you manage your favourite sites.
        </p>
        <a href="#" class="primary-btn btn-blue">More Info</a>
      </div>
    </div>
    </div >

   
</section>
  
  
  </>
  )
}

export default Featurs;
