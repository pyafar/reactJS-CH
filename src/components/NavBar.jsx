import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
            <nav className='navBar'>

                <div className='row justify-content-between align-items-center navBar-top'>
                    <div className="col-11">
                    <a href="#"><img src={"img/logo-header.png"} alt={"Frutilla a la reina"} /></a>
                    </div>
                    <div className="col-1">
                    {<CartWidget/>}
                    </div>
                </div>

                <ul className='navBar-links'>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">PRODUCTOS</a>
                    </li>
                    <li>
                        <a href="#">NOSOTROS</a>
                    </li>
                    <li>
                        <a href="#">CONTACTO</a>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default NavBar