import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../layout/Navbar/Navbar';
import User from '../Users/User';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;