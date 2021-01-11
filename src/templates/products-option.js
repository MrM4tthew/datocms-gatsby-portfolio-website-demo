import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import "../styles/items.scss"

export default function Template({data}) {
    return(
        <Layout>
            <div className="products__container">
                <div className="sidenav">
                    <span className="sidenav__title">kategori</span>
                    <div className="kategori__list">
                        {data ? (
                            <ul>
                                {data.categories.edges.map(({node: category})=> (
                                <Link className="link" to={`/products/${category.id}`}>
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
                    <span>menunjukkan hasil <b>{data.rekomend.edges[0].node.genre.name}</b></span>
                    <div className="items">
                    {data.rekomend.edges.map(({node: product}) => (
                        <Link className="link" to={`/product/${product.id}-${product.genre.id}/`}>
                            <div className="list__container">
                                <div className="list__image">
                                    <Img sizes={product.image.sizes} />
                                </div>
                                <div className="list__content">
                                    <span className="list__title">{product.name}</span>
                                    <span className="list__desc">{product.shortdescription}</span>
                                    <span className="list__desc">{product.descriptionukuran}</span>
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
      rekomend: allDatoCmsProduct(filter: {genre: {id: {eq: $category}}}) {
        edges {
          node {
            id
            name
            shortdescription
            descriptionukuran
            image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                    ...GatsbyDatoCmsSizes
                }
            }
            genre {
                id
                name
              }
          }
        }
      }
      categories: allDatoCmsGenre {
        edges {
            node {
                id
                name
            }
          }
      }
  }
`