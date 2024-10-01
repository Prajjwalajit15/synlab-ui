 
import React from 'react'; 
import Header from './components/Header/header';  
import HeroSection from './components/HeroSection/HeroSection';
import TheOgCreators from './components/TheOgCreators/TheOgCreators';
import Categories from './components/Categories/Categaries';
import HeroSection2 from './components/HeroSection2/HeroSection2'; 
import LiveCampign from './components/LiveCampaign/LiveCampaign';
import LiveCampaignHeading from './components/LiveCampaignHeading/LiveCampaignHeading';
import HeroSection3 from './components/HeroSection3/HeroSection3';
import HeroSection4 from './components/HeroSection4/HeroSection4';
import HeroSection5 from './components/HeroSection5/HeroSection5';
import HeroSection6 from './components/HeroSection6/HeroSection6';
import HeroSection7 from './components/HeroSection7/HeroSection7';
import Spotlight from './components/Spotlight/Spotlight';
import Rise from './components/Rise/Rise';
import UGC from './components/UGC/UGC';

const App = () => {
    return (
        <div>
            <Header/> 
            <HeroSection/>
            <TheOgCreators/>
            <Categories/>
            <Spotlight/>
            <HeroSection2/>
            <Rise/>
            <HeroSection3/>
            <HeroSection4/>
            <LiveCampaignHeading/>  
            <LiveCampign/> 
            <UGC/>
            <HeroSection5/>
            <HeroSection6/>
            <HeroSection7/>
        </div>
    );
};

export default App;
