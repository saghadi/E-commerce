import React from 'react'
import Header from './Header'
import Banner from './Banner'
import TodaySection from './TodaySection'
import Categories from './Categories'
import Selling from './Selling'
import Enhance from './Enhance'
import Explore from './Explore'
import Arrival from './Arrival'
import Delivery from './Delivery'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <TodaySection />
            <Categories />
            <Selling />
            <Enhance />
            <Explore />
            <Arrival />
            <Delivery />
            <Footer />
        </div>
    )
}

export default Home