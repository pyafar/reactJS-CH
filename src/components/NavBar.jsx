import React from 'react';
import CartWidget from './CartWidget';
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className='navBar'>

                <div className='row justify-content-between align-items-center navBar-top'>
                    <div className="col-11">
                        <Link to={"/"}><img src={"/img/logo-header.png"} alt={"Frutilla a la reina"} /></Link>
                    </div>
                    <div className="col-1">
                        {<CartWidget />}
                    </div>
                </div>

                <ul className='navBar-links'>
                    <li>
                        <NavLink to={"/"}>INICIO</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/tortas"}>TORTAS</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/alfajores"}>ALFAJORES</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/cuadrados"}>CUADRADOS</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/cupcakes"}>CUPCAKES</NavLink>
                    </li>

                </ul>
            </nav>

        </>
    )
}

export default NavBar