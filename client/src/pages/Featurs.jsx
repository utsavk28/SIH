import React from 'react';
import Drag from './Drag';

export const Featurs = () => {
    return (
        <>
            <section className='features' id='upload'>
                <div className='container'>
                    <div className='features__text container--pall'>
                        <h2>Upload Image/Video</h2>
                        <p>
                            Our aim is to make it quick and easy for you to get
                            to your suspect. Our vision is to eradicate manual
                            effort of searching for tracking a vehicle.
                        </p>
                    </div>

                    <div className='features__list container--pall'></div>
                    <div className='features__feature featureTap active'>
                        <div className=''>
                            <Drag />
                        </div>

                        <div className='feature__text container--pall md-4'>
                            <h3>Bookmark in one click</h3>
                            <p>
                                Organize your bookmarks however you like. Our
                                simple drag-and-drop interface gives you
                                complete control over how you manage your
                                favourite sites.
                            </p>
                            <a href='#' className='primary-btn btn-blue '>
                                More Info
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Featurs;
