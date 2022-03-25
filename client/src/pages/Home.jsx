// import React from 'react';
// import Header from './Header';
// import Searchbar from './Searchbar';
// import Drag from './Drag';
// import Searchresults from './Searchresults';
// import Vehicleinfo from './Vehicleinfo';
// import '../assets/style1.css';

// const Home = () => {
//     return (
//         <>
//             <Header />
//             <Searchbar />
//             <Drag />
//             {/* <Card /> */}
//             {/* <Searchresults /> */}
//         </>
//     );
// };

// export default Home;
import React, { useState } from "react";
import Header1 from "./Header1";
import Featurs from "./Featurs";
import Hero from "./Hero";
import Footer from "./Footer";
import Faq from "./Faq";
import "../assets/template1.css";

export const Home = () => {
  const [data, setData] = useState();

  return (
    <>
      <header className="header">
        <div className="overlay has-fade hide-for-desktop" />
        <Header1 />
      </header>
      <Hero data={data} setData={setData} />
      <Featurs />
    
      <Footer />
    </>
  );
};

export default Home;
