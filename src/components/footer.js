import React from 'react'
import '../styles/footer.scss'
function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <img src="/image/blacklogo.svg" alt=""/>
                <p>Grosir Busa merupakan toko online yang memudahakan anda dalam memilih kasur busa berkualitas dan tepat sesuai dengan kebutuhan, serta menyediakan laynana pememsanan custom ukuran kasur busa sesuai dengan keinginan anda. Grosir Busa juga memiliki toko di Shopee marketplace, kami menjual berbagai jenis kasur busa dengan variasi bahan dan ukuran. Semua produk yang dijual oleh Grosir Busa merupakan produk berstandard Jepang dan bergaransi resmi.</p>
            </div>
            <div className="right">
                <span className="kontak">Kontak</span>
                <span className="mebo">MEBO</span>
                <p>Jl. Bintaro Sektor 9, Tangerang Selatan, Banten<br/>
                WhatsApp: +6287819973671 | Shopee : Grosir Busa
                </p>
                <div className="kontakimg">
                    <img clasName="wa" src="/image/walogo1.svg" alt=""/>
                    <img src="/image/shopeelogo1.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer
