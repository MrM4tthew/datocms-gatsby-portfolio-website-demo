import '../styles/product.scss'
import React from "react"
import { Markup } from 'interweave'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

const Product = (props) => {

    const { product } = props;

    return(
        <div className="product__Container">
            <Link className="link" to={`/product/${product.productseo}-${product.genre.genreseo}`}>
                <div className="img__container">
                    <Img className="image" sizes={product.image.sizes} />
                </div>
                <span className="title">{product.name}</span>
                <Markup content={product.shortdescription}/>
                <Markup content={product.descriptionukuran}/>
            </Link>
        </div>
    )
}

export default Product