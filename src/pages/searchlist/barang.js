import React from 'react'
import Layout from '../../components/layout'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import "../../styles/items.scss"
import {Link} from 'gatsby'
import withLocation from '../../components/withLocation'
import PropTypes from 'prop-types'

const barang = ({search}) => {
    const { item } = search;
    const bolditem = <b>{item}</b>
    return(
        <StaticQuery 
            query={graphql`
            query SearchQuery {
            products: allDatoCmsProduct(limit: 5000) {
                edges {
                node {
                    id
                    name
                    pricetext
                    shortdescription
                    description
                    productseo
                    genre{
                        id
                        genreseo
                    }
                    image {
                    url
                    sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                        ...GatsbyDatoCmsSizes
                    }
                    }
                }
                }
            }
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
            <Layout>
            <div className="cookie__crumble">
                <span><Link to="/" className="cookie__link">Home</Link> / Produk</span>
            </div>
                <div className="products__container">
                    <div className="sidenav">
                        <span className="sidenav__title">kategori</span>
                        <div className="kategori__list">
                            <ul>
                                {data.categories.edges.map(({node: category})=> (
                                   <Link className="link" to={`/products/${category.genreseo}`}>
                                    <li key={category.id}>{category.name}</li> 
                                   </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        
                    <div className="item__count">
                            <span> {data.products.edges.filter(({node: produk}) => produk.name.toLowerCase().includes(item)).length} barang</span>
                        </div>
                        <span className="list__info">{data.products.edges.filter(({node: produk}) => produk.name.toLowerCase().includes(item)).length == 0 ?  "Hasil pencarian tidak ditemukan" : `Hasil pencarian "${item}"` }</span>
                        <div className="items">  
                        {data.products.edges.filter(({node: product}) => product.name.toLowerCase().includes(item)).map(({node: product}) => (
                            <Link className="link" to={`/product/${product.productseo}-${product.genre.genreseo}/`}>
                                <div className="list__container">
                                    <div className="list__image">
                                        <Img sizes={product.image.sizes} />
                                    </div>
                                    <div className="list__content">
                                        <span className="list__title">{product.name}</span>
                                        <span className="list__desc">{product.shortdescription}</span>
                                        <span className="list__desc">{product.descriptionukuran}</span>
                                        <span className="list__price">Rp{product.pricetext}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                    
                </div>
            </Layout>
        )}
        />

    )
}

barang.propTypes = {
    search: PropTypes.object,
}

export default withLocation(barang)