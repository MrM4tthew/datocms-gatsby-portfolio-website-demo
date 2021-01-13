import React, { useState } from 'react'
import '../styles/mobileheader.scss'
import {Link} from 'gatsby'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as HiIcons from "react-icons/hi";

export default () => {
    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const showSearch = () => setSearch(!search);

    return(
        <div className="containernav">
            <div className="sidenav">
                <div className="promo">
                    <span>Dapatkan voucher cashback s/d Rp50.000</span>
                </div>
                <div className="navbar1">
                    <Link to="/">
                        <div className="mebo__logo"/>
                    </Link>
                    <div className="searchIcon">
                        <FaIcons.FaSearch onClick={showSearch}/>
                    </div>
                    <div className="cartIcon">
                        <Link to="/whatsapp">
                            <HiIcons.HiOutlineShoppingCart />
                        </Link>
                    </div>
                    <div className="burgerIcon">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </div>
                    
                    
                </div>
            </div>   
            <nav className={sidebar ? 'navMenu active' : 'navMenu'}>
                <div className="topitems">
                    <div className="mebo__logo"/>
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </div>
                <ul className="navitems">
                    <Link to="/products"><li className="navcontent">Produk</li></Link>
                    <Link to="/products/DatoCmsGenre-14776902-en" onClick={showSidebar}><li className="navcontent">Bantal guling</li></Link>
                    <Link to="/products/DatoCmsGenre-14776899-en" onClick={showSidebar}><li className="navcontent">Kasur busa</li></Link>
                    <Link to="/products/DatoCmsGenre-14776900-en" onClick={showSidebar}><li className="navcontent">Kasur lipat</li></Link>
                    <Link to="/products/DatoCmsGenre-14776901-en" style={{borderBottom: "0.1rem solid #6e6e6e"}} onClick={showSidebar}><li className="navcontent">Sofa bed</li></Link>
                </ul>
            </nav>
            <nav className={search ? 'navSearch active' : 'navSearch'}>
                <div className="topitems">
                    <form action="/searchlist/barang">
                        <input type="text" name="item" placeholder="bantal...." required/>
                        {/* <button type="submit"><FaIcons.FaSearch /></button> */}
                    </form>
                    <AiIcons.AiOutlineClose className="xbtn" onClick={showSearch}/>
                </div>
            </nav>
        </div>
    )
}

