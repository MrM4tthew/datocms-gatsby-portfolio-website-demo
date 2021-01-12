import React from 'react'
import Layout from '../components/layout'
import * as FaIcons from "react-icons/fa";
import '../styles/whatsapp.scss'

function Whatsapp() {
    return (
        <Layout>
            <div className="wa__container">
                <span className="wa__title">Maaf,</span>
                <p>untuk sementara fitur checkout sedang dalam proses pengembangan</p>
                <span className="sub__par">pesan produk melalui whatsapp</span>
                <a href="https://wa.me/message/DADPPU4RS55DK1">
                    <FaIcons.FaWhatsapp />
                    <span>Whatsapp</span>
                </a>
            </div>
        </Layout>
    )
}

export default Whatsapp
