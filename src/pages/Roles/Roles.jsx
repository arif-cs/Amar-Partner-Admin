import React from 'react';
import Navbar from '../../layout/Navbar/Navbar';
import Sidebar from '../../layout/SideBar/Sidebar';

const Roles = () => {
    return (
        <div>

            <div>
                <Navbar></Navbar>
            </div>
            <div className='flex' >
                <Sidebar></Sidebar>
                <div>
                    <h1>This Is Roles Page</h1>
                </div>
            </div>
        </div>
    );
};

export default Roles;