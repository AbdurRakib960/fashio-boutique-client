import React from 'react';
import Announcement from '../../components/Announcement/Announcement';
import Footer from '../../components/Footer/Footer';
import GetUpdates from '../../components/GetUpdates/GetUpdates';
import NavBar from '../../components/NavBar/NavBar';
import Products from '../../components/Products/Products';
import Slider from '../../components/Slider/Slider';
import CategoryItem from '../CategoryItem/CategoryItem';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Slider />
            <CategoryItem />
            <Products />
            <GetUpdates />
            <Footer />
        </div>
    );
};

export default Home;