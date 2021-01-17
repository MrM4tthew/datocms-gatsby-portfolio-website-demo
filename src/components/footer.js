import React from 'react'
import '../styles/footer.scss'
import { Link } from 'gatsby'

function Footer() {
    return (
        <div className="footer__container">
        <div className="footer">
                <div className="left">
                    <div className="mebo__logo"></div>
                    <div className="newsletter__container">
                        <h3>Daftar Newsletter</h3>
                        <form action="">
                            <input className="text__input" type="text" name="" id="" placeholder="Alamat email"/>
                            <input className="submit__input" type="submit" value="Daftar"/>
                        </form>
                        <p>Dapatkan info terupdate serta promo terbaru dari MEBO dengan mendaftar newsletter</p>
                    </div>
                </div>
                <div className="middle">
                    <span className="title">Produk</span>
                    <ul className="blog__artikel">
                        <Link to="/products/kasur-busa"><li>Kasur busa</li></Link>
                        <Link to="/products/kasur-lipat"><li>Kasur lipat</li></Link>
                        <Link to="/products/sofa-bed"><li>Sofa bed</li></Link>
                        <Link to="/products/aksesoris"><li>Aksesoris</li></Link>
                    </ul>
                </div>
                <div className="middlesecond">
                    <span className="title">Info Lainnya</span>
                    <ul className="information__option">
                        <Link to="/blog/blog1"><li>Tentang Kami</li></Link>
                        <Link to="/blog/blog2"><li>Artikel</li></Link>
                    </ul>
                </div>
                <div className="right">
                    <span className="kontak">Hubungi Kami</span>
                    {/* <span className="mebo">MEBO</span>
                    <p style={{lineHeight: 1.6}}>Jl. Bintaro Sektor 9<br/>Tangerang Selatan, Banten<br/>
                    WhatsApp: +6287819973671
                    </p> */}
                    <div className="kontak__container">
                        <div className="content k1">+62 87819973671</div>
                        <div className="content k2">Service@mebo.com</div>
                        <div className="content k3">
                            <span>Senin - Minggu</span><br/>
                            <span>(09.00 - 21.00)</span>
                        </div>
                    </div>
                </div>
            
            
        </div>
        <div className="bawah">
            <span>Hak cipta @2021 MEBO</span>
        </div>
        </div>
    )
}

export default Footer
