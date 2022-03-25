import React, { useState } from 'react';
import Header1 from './Header1';
import Featurs from './Featurs';
import Hero from './Hero';
import Footer from './Footer';
import '../assets/template1.css';
import Searchresults from './Searchresults';

export const Home = () => {
    const [data, setData] = useState();
    const [isloaded, setisloaded] = useState(false);

    return (
        <>
            <header className='header'>
                <div className='overlay has-fade hide-for-desktop' />
                <Header1 />
            </header>
            <Hero
                data={data}
                setData={setData}
                isloaded={isloaded}
                setisloaded={setisloaded}
            />

            {!isloaded && <Featurs />}
            {isloaded && <Searchresults />}
            <Footer />
        </>
    );
};

export default Home;
