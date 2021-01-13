import React from 'react'
import '../styles/header.scss'
import { graphql, Link, StaticQuery } from 'gatsby'
import * as CgIcons from "react-icons/cg"
import * as IoIcons from "react-icons/io";

export default () => (
    <StaticQuery 
        query={graphql`
        query NavbarQuery {
            categories: allDatoCmsGenre {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }
    `}
    render={data => (
        <div className="Header">
            <div className="diskon">
                <span>Dapatkan voucher cashback s/d Rp50.000</span>
            </div>
            <div className="navbar">
                <Link className="linkimg" to="/">
                    <div className="mebo__logo"></div>
                </Link>
                <ul>
                    <Link className="link" to="/products"><li>Produk</li></Link>
                    {data.categories.edges.map(({node: cat}) => (
                        <Link className="link" to={`/products/${cat.id}`}><li>{cat.name}</li></Link>
                    ))}
                </ul>
                <div className="rightside">
                    <form action="/searchlist/barang">
                        <div className="barang__form">
                            <input type="text" name="item" id="" placeholder="search for something"/>
                            <button type="submit"><IoIcons.IoIosSearch /></button>
                        </div>
                    </form>
                    <Link to="/whatsapp" className="snipcart-checkout"><CgIcons.CgShoppingCart /></Link>
                </div>
            </div>
                
        </div>
    )}
    />
)

