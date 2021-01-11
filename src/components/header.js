import React from 'react'
import '../styles/header.scss'
import { graphql, Link, StaticQuery } from 'gatsby'
import * as CgIcons from "react-icons/cg";

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
                    <img src="/image/blacklogo.svg" alt=""/>
                </Link>
                <ul>
                    <Link className="link" to="/products"><li>Produk</li></Link>
                    {data.categories.edges.map(({node: cat}) => (
                        <Link className="link" to={`/products/${cat.id}`}><li>{cat.name}</li></Link>
                    ))}
                    
                </ul>
                <div className="rightside">
                    <form action="">
                        <input type="text" name="search" id="" placeholder="search for something"/>
                        <button type="submit"></button>
                    </form>
                    <button className="snipcart-checkout"><CgIcons.CgShoppingCart /></button>
                </div>
            </div>
                
        </div>
    )}
    />
)

