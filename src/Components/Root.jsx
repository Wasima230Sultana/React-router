import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Root.css'
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
               <Sidebar></Sidebar>
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;