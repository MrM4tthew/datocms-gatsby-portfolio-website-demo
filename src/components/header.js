import React from 'react'
import '../styles/header.scss'
import { graphql, Link, StaticQuery } from 'gatsby'
import * as CgIcons from "react-icons/cg"
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

export default () => (
    <StaticQuery 
        query={graphql`
        query NavbarQuery {
            categories: allDatoCmsGenre {
                edges {
                    node {
                        id
                        name
                        genreseo
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
                        <Link className="link" to={`/products/${cat.genreseo}`}><li>{cat.name}</li></Link>
                    ))}
                </ul>
                <div className="rightside">
                    <form action="/searchlist/barang">
                        <div className="barang__form">
                            <input type="text" name="item" id="" placeholder="Cari produk..."/>
                            <button type="submit"><IoIcons.IoIosSearch /></button>
                        </div>
                    </form>
                    <Link to="/whatsapp" className="snipcart-checkout"><HiIcons.HiOutlineShoppingCart /></Link>
                </div>
            </div>
                
        </div>
    )}
    />
)

