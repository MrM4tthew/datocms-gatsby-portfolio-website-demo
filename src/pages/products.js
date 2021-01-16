import React from 'react'
import Layout from '../components/layout'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import "../styles/items.scss"
import {Link} from 'gatsby'
import Helmet from 'react-helmet'

export default () => (
    <StaticQuery 
        query={graphql`
        query CatalogueQuery {
        products: allDatoCmsProduct(limit: 100) {
            edges {
            node {
                id
                name
                pricetext
                shortdescription
                description
                descriptionukuran
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
        site {
            siteMetadata {
              description
              keywords
              title
              url
            }
          }
        
        }
    `}
    render={data => (
        <Layout>
            <Helmet>
                <meta name="description" content={data.site.siteMetadata.description} />
                <meta name="keywords" content={data.site.siteMetadata.keywords} />
                <meta property="og:title" content={`${data.site.siteMetadata.title} - produk`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={data.site.siteMetadata.description} />
                <meta property="og:image" content="" />
                <meta property="og:locale" content="" />
                <meta property="og:url" content={`${data.site.siteMetadata.url}/products`} />
                <link rel="canonical" href={`${data.site.siteMetadata.url}/products`}/>
                <title>{`${data.site.siteMetadata.title} - produk`}</title>
            </Helmet>
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
                        <span>{data.products.edges.length} barang</span>
                    </div>
                    <span className="list__info">Semua barang</span>
                    <div className="items">  
                    {data.products.edges.map(({node: product}) => (
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
            {/* <div className="products__spacing"></div> */}
        </Layout>
    )}
    />
)
