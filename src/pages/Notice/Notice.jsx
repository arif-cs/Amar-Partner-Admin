import React from 'react';
import Navbar from '../../layout/Navbar/Navbar';
import Sidebar from '../../layout/SideBar/Sidebar';

const Notice = () => {
    return (
        <>
            <div>

                <div>
                    <Navbar></Navbar>
                </div>
                <div className='flex' >
                    <Sidebar></Sidebar>
                    <div>
                        <h1>This Is Notice Page</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notice;