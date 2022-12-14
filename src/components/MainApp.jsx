import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import AppRouter from '../routes/AppRouter'
// import SlideShow from './SlideShow'


const MainApp = () => {
    return (
        <>
            <NavBar />
            {/* <SlideShow /> */}
            <AppRouter/>
            <Footer />
        </>
    )
}

export default MainApp