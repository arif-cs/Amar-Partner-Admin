import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../layout/Navbar/Navbar';
import User from '../Users/User';
import Sidebar from '../../layout/SideBar/Sidebar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;