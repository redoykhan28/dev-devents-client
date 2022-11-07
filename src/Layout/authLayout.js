import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Headers/Header';

const authLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default authLayout;