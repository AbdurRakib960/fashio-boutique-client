import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import Footer from '../../components/Footer/Footer';
import GetUpdates from '../../components/GetUpdates/GetUpdates';
import NavBar from '../../components/NavBar/NavBar';
import FilteredProducts from '../FilteredProducts/FilteredProducts';

const CategoryProduct = () => {
    return (
        <div>
            <NavBar />
            <Announcement />
            <FilteredProducts />
            <GetUpdates />
            <Footer />
        </div>
    );
};

export default CategoryProduct;