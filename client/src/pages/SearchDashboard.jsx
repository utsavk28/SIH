import React from 'react'
import Searchbar from './Searchbar'
import { Searchsidebar } from './Searchsidebar'
import '../assets/dashboard.css'
import Header1 from './Header1'

export const SearchDashboard = () => {
  return (
   <>
   
{/* begin #sidebar */}
<div id="page-container" className="page-header-fixed page-sidebar-fixed">


<div className="sidebar-bg" />
   {/* end #sidebar */}
   <div id="content" className="content abhay">
   
       <Searchbar />
      <h1>Hello</h1>
   </div>
</div>


   
   
   </>
  )
}
