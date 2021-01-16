import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import "../styles/items.scss"

export default function Template({data}) {
    const description = data.site.siteMetadata.description
    const keywords = data.site.siteMetadata.keywords
    const title = data.site.siteMetadata.title
    const url = data.site.siteMetadata.url
    const genre = data.rekomend.edges[0].node.genre.name
    const category = data.rekomend.edges[0].node.genre.genreseo
    return(
        <Layout>
            <Helmet>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:title" content={`${title}`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={description} />
                <meta property="og:image" content="" />
                <meta property="og:locale" content="" />
                <meta property="og:url" content={`${url}/products/${category}`} />
                <link rel="canonical" href={`${url}/products/${category}`}/>
                <title>{`${title}`}</title>
            </Helmet>
            <div className="cookie__crumble">
                <span><Link to="/" className="cookie__link">Home</Link> / <Link to="/products" className="cookie__link">Produk</Link></span>
            </div>
            <div className="products__container">
                <div className="sidenav">
                    <span className="sidenav__title">kategori</span>
                    <div className="kategori__list">
                        {data ? (
                            <ul>
                                {data.categories.edges.map(({node: category})=> (
                                <Link className="link" to={`/products/${category.genreseo}`}>
                                    <li key={category.id}>{category.name}</li> 
                                </Link>
                                ))}
                            </ul>
                        ): ''}
                    </div>
                </div>
                <div className="content">
                    <div className="item__count">
                        <span>{data.rekomend.edges.length} barang</span>
                    </div>
                    {/* <span className="list__info">menunjukkan hasil "<b>{data.rekomend.edges[0].node.genre.name}</b>"</span> */}
                    <div className="items">
                    {data.rekomend.edges.map(({node: product}) => (
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
    )
}

export const pageQuery = graphql`
  query ProductQuery($category: String!) {
      rekomend: allDatoCmsProduct(filter: {genre: {genreseo: {eq: $category}}}, limit: 100) {
        edges {
          node {
            id
            name
            pricetext
            shortdescription
            descriptionukuran
            productseo
            image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                    ...GatsbyDatoCmsSizes
                }
            }
            genre {
                id
                name
                genreseo
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
`