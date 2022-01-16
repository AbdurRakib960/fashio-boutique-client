import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import Footer from '../../components/Footer/Footer';
import GetUpdates from '../../components/GetUpdates/GetUpdates';
import NavBar from '../../components/NavBar/NavBar';
import Product from '../Product/Product';


const SelectedSingleProduct = () => {
    return (
        <div>
            <NavBar />
            <Announcement />
            <Product />
            <GetUpdates />
            <Footer />
        </div>
    );
};

export default SelectedSingleProduct;