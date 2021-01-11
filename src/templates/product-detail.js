import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { Markup } from 'interweave'
import "../styles/detailproduct.scss"
import * as CgIcons from "react-icons/cg";

export default function Template({data}) {
    const productInfo = data.products.edges[0].node;
    const id = productInfo.id
    const genreid = productInfo.genre.id
    const name = productInfo.name
    const shortdescription = productInfo.shortdescription
    const ukuran = productInfo.descriptionukuran
    const description = productInfo.description
    const price = productInfo.price
    const shipping = productInfo.shipping.keterangan
    const image = productInfo.image.sizes
    const imageurl = productInfo.image.url

    const rekomendlist = data.rekomend.edges;
    return(
        <Layout>
            <div className="detail__container">
                <div className="topdetail">
                    <div className="img__container">
                        <Img sizes={image}/>
                    </div>
                    <div className="topcontent__container">
                        <span className="topcontent t1">{name}</span>
                        <span className="topcontent t5">{price}</span>
                        <span className="topcontent t2">{shortdescription}, {ukuran}</span>
                        <div className="topcontent t3">
                            <div className="red__circle"></div>
                            <span className="quality">Japan quality</span>
                        </div>
                        <button
                        class="snipcart-add-item"
                        data-item-id={id}
                        data-item-price={price}
                        data-item-url={`/product/${id}-${genreid}`}
                        data-item-name={name}
                        data-item-image={imageurl}
                        >
                        <CgIcons.CgShoppingCart />
                        Tambah ke keranjang
                        </button>
                    </div>
                </div>
                <div className="middetail">
                    <div className="mid__content c1">
                        <span className="title">Deskripsi produk</span>
                        <Markup content={description} />
                    </div>
                    <div className="mid__content c2">
                        <span className="title">Pengiriman</span>
                        <Markup content={shipping} />
                    </div>
                </div>
                <div className="rekomen__list">
                    {rekomendlist.map(({node: rekomend}) => (
                        <Link to={`/product/${rekomend.id}-${rekomend.genre.id}`}>
                            <img src={rekomend.image.url} alt=""/>
                            <h3>{rekomend.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query ProductsQuery($id: String!, $category: String!) {
    products: allDatoCmsProduct(filter: {id: {eq: $id}}) {
        edges {
          node {
            id
            name
            price
            description
            shortdescription
            descriptionukuran
            shopeelink
            shipping {
                keterangan
                tipeshipping
            }
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
  }
`