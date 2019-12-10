import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout (props){
    const children = props.children;
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;