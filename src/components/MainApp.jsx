import React from 'react'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'
import NavBar from './NavBar'
import SlideShow from './SlideShow'

const MainApp = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting={"No encontramos ese producto!"}/>
            <SlideShow />
            <Footer />
        </>
    )
}

export default MainApp