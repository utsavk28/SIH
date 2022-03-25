import React from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Drag from './Drag';
import Searchresults from './Searchresults';
import Vehicleinfo from './Vehicleinfo';
import '../assets/style1.css';

const Home = () => {
    return (
        <>
            <Header />
            <Searchbar />
            <Drag />
            {/* <Card /> */}
            {/* <Searchresults /> */}
        </>
    );
};

export default Home;
