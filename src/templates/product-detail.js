import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Product from "../components/Product"
import { graphql, Link } from 'gatsby'
import { Markup } from 'interweave'
import "../styles/detailproduct.scss"
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import 'pure-react-carousel/dist/react-carousel.es.css';

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
            <div className="cookie__crumble">
                <span><Link to="/" className="cookie__link">Home</Link> / <Link to="/products" className="cookie__link">Produk</Link> / {name}</span>
            </div>
            <div className="detail__container">
                <div className="topdetail">
                    <div className="img__container">
                        <Img sizes={image}/>
                    </div>
                    <div className="topcontent__container">
                        <span className="topcontent t1">{name}</span>
                        <span className="topcontent t5">Rp. {price}</span>
                        <span className="topcontent t2">{shortdescription}, {ukuran}</span>
                        <div className="topcontent t3">
                            <div className="red__circle"></div>
                            <span className="quality">Japan quality</span>
                        </div>
                        <Link to="/whatsapp"
                        class="add-item"
                        >
                        <CgIcons.CgShoppingCart />
                        Tambah ke keranjang
                        </Link>
                        <a className="whatsapp__btn" href="https://wa.me/message/DADPPU4RS55DK1">
                            <FaIcons.FaWhatsapp />
                            <span>Whatsapp</span>
                        </a>
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
                <div className="detail__line"></div>
                <div className="rekomen__list">
                    <span className="mainTitle">Rekomendasi</span>
                    <div className="carousel__container desktop">
                        <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={150}
                        totalSlides={rekomendlist.length}
                        visibleSlides={4}
                        >
                            <div className="sliderContainer">
                                <ButtonBack className="Button back"><img src="/image/left.svg" alt=""/></ButtonBack>
                                <Slider className="slide__img">
                                    {rekomendlist.map(({node: rekomend}) => (
                                        <Slide>
                                            <Product key={rekomend.id} product={ rekomend }/>   
                                        </Slide>
                                    ))}
                                </Slider>
                                <ButtonNext className="Button next"><img src="/image/right.svg" alt=""/></ButtonNext>
                            </div>  
                        </CarouselProvider>
                    </div>
                    <div className="carousel__container mobile">
                        <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={150}
                        totalSlides={rekomendlist.length}
                        visibleSlides={2}
                        >
                            <div className="sliderContainer">
                                <ButtonBack className="Button back"><img src="/image/left.svg" alt=""/></ButtonBack>
                                <Slider className="slide__img">
                                    {rekomendlist.map(({node: rekomend}) => (
                                        <Slide>
                                            <Product key={rekomend.id} product={ rekomend }/>   
                                        </Slide>
                                    ))}
                                </Slider>
                                <ButtonNext className="Button next"><img src="/image/right.svg" alt=""/></ButtonNext>
                            </div>  
                        </CarouselProvider>
                    </div>
                    <div className="carousel__container mobiledes">
                        <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={150}
                        totalSlides={rekomendlist.length}
                        visibleSlides={3}
                        >
                            <div className="sliderContainer">
                                <ButtonBack className="Button back"><img src="/image/left.svg" alt=""/></ButtonBack>
                                <Slider className="slide__img">
                                    {rekomendlist.map(({node: rekomend}) => (
                                        <Slide>
                                            <Product key={rekomend.id} product={ rekomend }/>   
                                        </Slide>
                                    ))}
                                </Slider>
                                <ButtonNext className="Button next"><img src="/image/right.svg" alt=""/></ButtonNext>
                            </div>  
                        </CarouselProvider>
                    </div>
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