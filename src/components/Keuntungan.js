import React from 'react'
import "../styles/keuntunga.scss"

function Keuntungan() {
    return (
        <div className="kContainer">
            <div className="contain c1">
                <span className="title">Pelayanan no.1</span>
                <div className="spacing"></div>
                <p className="content">Kepuasan dan kebutuhan konsumen merupakan yang utama bagi kami</p>
            </div>
            <div className="contain c2">
                <span className="title">Harga Terbaik</span>
                <div className="spacing"></div>
                <p className="content">Belanja di MEBO akan mendapatkan harga lebih terjangkau</p>
            </div>
            <div className="contain c3">
                <span className="title">Garansi 20 Tahun</span>
                <div className="spacing"></div>
                <p className="content">Garansi kasur busa hinnga 20 tahun, tidak perlu khawatir busa rusak</p>
            </div>
            <div className="contain c4">
                <span className="title">Japan Quality</span>
                <div className="spacing"></div>
                <p className="content">Produk yang dijual oleh MEBO memiliki kualitas berstandard jepang</p>
            </div>
        </div>
    )
}

export default Keuntungan
