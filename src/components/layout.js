import React from 'react'
import "../styles/layout.scss"
import Header from './header'
import Mobileheader from './mobileheader'
import Footer from './footer'
import * as FaIcons from "react-icons/fa";

function Layout({ children }) {
    return (
        <>
            <Header/>
            <Mobileheader />
            <div className="container">
                {children}
                <div className="contact__container">
                    <div className="wa__text">
                        <span>Hubungi kami</span>
                    </div>
                    <a href="https://wa.me/message/DADPPU4RS55DK1" target="_blank">
                        <div className="waContainer">
                            <FaIcons.FaWhatsapp />
                        </div>
                    </a>
                </div>
                
            </div>
            <Footer/>    
        </>
    )
}

export default Layout
