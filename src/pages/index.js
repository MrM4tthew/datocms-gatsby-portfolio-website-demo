import React from "react"
import Layout from "../components/layout"
import Keuntungan from "../components/Keuntungan"
import Belanja from "../components/Belanja"
import Product from "../components/Product"
import { Link, graphql } from "gatsby"
import "../styles/home.scss"
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Home({data}) {

    const categories = data.categories.edges
    const products = data.rekomend.edges
    return (
        <Layout>
        <div className="imgcontainer">
            {/* <div className="imgContent">
                <h2>Diskon Hingga <br/><span style={{fontSize: "6rem"}}>50%</span></h2>
                <p>Belanja di MEBO melalui <br/>
                shopee, dapatkan berbagai <br/>
                promo menarik
                </p>
                <a>Telusuri >></a>
            </div> */}
            <img style={{width: "100vw", objectFit: "contain"}} src="/image/kasurtopmobile.png" alt=""/>
        </div>
        <div className="homeContent">
                <div className="item__carousel">
                    <span className="mainTitle">Produk Terlaris</span>
                    <div className="carousel__container desktop">
                        <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={150}
                        totalSlides={products.length}
                        visibleSlides={4}
                        >
                            <div className="sliderContainer">
                                <ButtonBack className="Button"><img src="image/left.svg" alt=""/></ButtonBack>
                                <Slider>
                                    {
                                    products.map( ({node: product}) => <Slide><Product key={product.id} product={ product }/></Slide>)
                                    }
                                </Slider>
                                <ButtonNext className="Button"><img src="image/right.svg" alt=""/></ButtonNext>
                            </div>  
                        </CarouselProvider>
                    </div>
                    <div className="carousel__container mobile">
                        <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={150}
                        totalSlides={products.length}
                        visibleSlides={3}
                        >
                            <div className="sliderContainer">
                                <ButtonBack className="Button"><img src="image/left.svg" alt=""/></ButtonBack>
                                <Slider>
                                    {
                                    products.map( ({node: product}) => <Slide><Product key={product.id} product={ product }/></Slide>)
                                    }
                                </Slider>
                                <ButtonNext className="Button"><img src="image/right.svg" alt=""/></ButtonNext>
                            </div>  
                        </CarouselProvider>
                    </div>
                    <div className="carousel__container mobilesmall">
                        <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={150}
                        totalSlides={products.length}
                        visibleSlides={2}
                        >
                            <div className="sliderContainer">
                                <ButtonBack className="Button"><img src="image/left.svg" alt=""/></ButtonBack>
                                <Slider>
                                    {
                                    products.map( ({node: product}) => <Slide><Product key={product.id} product={ product }/></Slide>)
                                    }
                                </Slider>
                                <ButtonNext className="Button"><img src="image/right.svg" alt=""/></ButtonNext>
                            </div>  
                        </CarouselProvider>
                    </div>
                </div>
                <div className="keuntunganContainer">
                    <span className="mainTitle">Keuntungan belanja di MEBO</span>
                    <Keuntungan />
                </div>
                <div className="artikelContainer">
                    <span className="mainTitle">Artikel & Berita</span>
                    <div className="listArtikel">
                        <div className="atas">
                            <div className="artikel">
                                <Link className="link" to="/blog/blog1">
                                <div className="img__artikel1" />
                                <span className="first">Tips memiliki kasur</span>
                                <span className="second">Jangan sampai salah memilih kasur</span>
                                <p>Terdapat banyak sekali jenis kasur yang dijual di pasaran dengan berbagai tingkat kualitas, salah memilih jenis kasur dapat membuat tidur anda menjadi kurang nyenyak, lihat beberapa tips dalam memilih kasur...</p>
                                </Link>
                            </div>
                            <div className="artikel">
                                <Link className="link" to="/blog/blog2">
                                <div className="img__artikel2"/>
                                <span className="first">Tips kesehatan</span>
                                <span className="second">Posisi tidur yang salah dapat menyebabkan nyeri punggung</span>
                                <p>Tidur seharusnya dapat membuat tubuh menjadi lebih rileks dan segar, namun posisi tidur yang salah dapat menyebabkan nyeri punggung dan beberapa cedera lainnya, berikut beberapa solusinya >></p>
                                </Link>
                            </div>
                        </div>
                        <div className="bawah">
                            <div className="artikel">
                                <Link className="link" to="/blog/blog3">
                                <div className="img__artikel3"/>
                                <span className="first">Tips memiliki kasur</span>
                                <span className="second">Jangan sampai salah memilih kasur</span>
                                <p>Banyak masalah yang akan muncul ketika menggunakan kasur yang sudah berumur seperti, tungau dapat hidup dan berkembang biak pada kasur tersebut, ada beberapa solusi terhindar dari tungau...</p>
                                </Link>
                            </div>
                            <div className="artikel">
                                <Link className="link" to="/blog/blog4">
                                <div className="img__artikel4"/>
                                <span className="first">Tips memiliki kasur</span>
                                <span className="second">Jangan sampai salah memilih kasur</span>
                                <p>Stress dapat mengganggu kamu saat melakukan aktivitas dan akibatnya produktivitas menurun, itu dapat disebabkan oleh kualitas tidur yang tidak maksimal. Lihat tips untuk tidur berkualitas...</p>
                                </Link>
                            </div>
                            <div className="artikel">
                                <Link className="link" to="/blog/blog5">
                                <div className="img__artikel5"/>
                                <span className="first">Tips memiliki kasur</span>
                                <span className="second">Jangan sampai salah memilih kasur</span>
                                <p>Sebagian orang sering mengalami sulit tidur dengan sebab yang tidak jelas. Hal tersebut sangat mengganggu dan membuat tidak nyaman, ada beberapa cara untuk mengatasi masalah tersebut…</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pelayananContainer">
                    <span className="mainTitle">Pelayanan</span>
                    <div className="listPelayanan">
                        <div className="pelayanan p1">
                            <div className="desktopImg" src="/image/pelayananmeborevisi1desktop.png" />
                            <div className="mobileImg" src="/image/pelayananmeborevisi1mobile.png" />
                        </div>
                        <div className="pelayanan p2">
                            <img className="desktopImg" src="/image/pelayananmeborevisi2desktop.png" alt=""/>
                            <img className="mobileImg" src="/image/pelayananmeborevisi2mobile.png" alt=""/>
                        </div>
                    </div>      
                </div>
                <div className="kategoriContainer">
                    <span className="mainTitle">Kategori</span>
                    <div className="listKategori">
                        {categories.length ? (
                                categories.map( ({node: category}) => (
                                    <div className="kategori__card">
                                        <Link to={`/products/${category.id}`}>
                                            <img src={category.image.url} alt=""/>
                                            <span>{category.name}</span>
                                        </Link>
                                        
                                    </div>
                                ))
                        ) : ''}
                    </div>                
                </div>
                <div className="promoContainer">
                    <span className="mainTitle">Promo</span>
                    <div className="promo__img desktopImg" style={{width: '100%'}} />
                    <div className="promom__img mobileImg" />
                </div>
            </div>
        </Layout>
        
    )
}

export const pageQuery = graphql`
  query HomeQuery{
      rekomend: allDatoCmsProduct(limit: 5){
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
                image {
                    url
                    sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                        ...GatsbyDatoCmsSizes
                    }
                }
            }
          }
      }
  }
`
