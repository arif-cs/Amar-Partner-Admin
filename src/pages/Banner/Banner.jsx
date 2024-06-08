import React from 'react';
import Navbar from '../../layout/Navbar/Navbar';
import Sidebar from '../../layout/SideBar/Sidebar';

const Banner = () => {
    return (
        <>
            <div>
                <div>
                    <Navbar></Navbar>
                </div>
                <div className='flex' >
                    <Sidebar></Sidebar>
                    <div>
                        <h1>This Is Banner Section Page</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;