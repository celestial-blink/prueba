import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import './styles/LayoutOne.css';


const LayoutOne = ({children}) => {
    return (
        <>
            <div className="wrapper-layout-one">
                <Header/>
                <div className="container">
                    {children}
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default LayoutOne;