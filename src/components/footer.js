import React from 'react'
import '../styles/footer.scss'
import { Link } from 'gatsby'

function Footer() {
    return (
        <div className="footer__container">
        <div className="footer">
                <div className="left">
                    <div className="mebo__logo"></div>
                    <p>MEBO merupakan toko online yang memudahkan anda dalam memilih kasur busa berkualitas dan tepat sesuai dengan kebutuhan, serta menyediakan layanan pemesanan custom ukuran kasur busa sesuai dengan keinginan anda, kami menjual berbagai jenis kasur busa dengan variasi bahan dan ukuran.</p>
                </div>
                <div className="middle">
                    <span className="title">Artikel & berita</span>
                    <ul className="blog__artikel">
                        <Link to="/blog/blog1"><li>Tips kesehatan</li></Link>
                        <Link to="/blog/blog2"><li>Tips memilih kasur</li></Link>
                        <Link to="/blog/blog3"><li>Tips kebersihan</li></Link>
                    </ul>
                </div>
                <div className="right">
                    <span className="kontak">Kontak</span>
                    <span className="mebo">MEBO</span>
                    <p>Jl. Bintaro Sektor 9<br/>Tangerang Selatan, Banten<br/>
                    WhatsApp: +6287819973671
                    </p>
                </div>
            
            
        </div>
        <div className="bawah">
            <span>Hak cipta @2021 MEBO</span>
        </div>
        </div>
    )
}

export default Footer
