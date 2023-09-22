import React from 'react';
import Navigation from '../../Shared/Navigation';
import BannerHome from './BannerHome';
import ElectronicsItem from '../Category/ElectronicsItem';
import Fashions from '../Category/Fashions';
import MobileAccessories from '../Category/MobileAccessories';
import Footer from '../../Shared/Footer/Footer';
import Menubar from '../MenuBar/Menubar';

const Home = () => {
    return (
        <div>
                <Navigation></Navigation>
                <BannerHome></BannerHome>
                <Menubar></Menubar>
                {/* <ElectronicsItem></ElectronicsItem>
                <Fashions></Fashions>
                <MobileAccessories></MobileAccessories> */}
                <Footer></Footer>
        </div>
    );
};

export default Home;