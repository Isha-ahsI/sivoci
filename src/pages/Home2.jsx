import React from 'react'
import HeroSection2 from '../components/herosections/HeroSection2'
import TrustedBrands from '../components/home/TrustedBrands'
import AboutUs from '../components/home/AboutUs'
import Services from '../components/home/Services'
import Pricing from '../components/home/Pricing'
import Features from '../components/home/Features'
import Team from '../components/home/Team'
import ContactUs from '../components/home/ContactUs'
import FAQs from '../components/home/FAQs'

const Home2 = () => {
    return (
        <>
            <HeroSection2 />
            <TrustedBrands />
            <AboutUs />
            <Services />
            <Features />
            <Pricing />
            <Team />
            <ContactUs />
            <FAQs />
        </>
    )
}

export default Home2
