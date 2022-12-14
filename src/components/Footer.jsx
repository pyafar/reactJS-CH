import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container'>
            <button type="button" className="btn position-relative pl-3">
                <img src={"/img/facebook.svg"} alt={"Redes Sociales"} />
            </button>
            <button type="button" className="btn position-relative pl-3">
                <img src={"/img/instagram.svg"} alt={"Redes Sociales"} />
            </button>
            <button type="button" className="btn position-relative pl-3">
                <img src={"/img/whatsapp.svg"} alt={"Redes Sociales"} />
            </button>
        </div>
    )
}

export default Footer