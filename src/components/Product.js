import '../styles/product.scss'
import React from "react"
import { Markup } from 'interweave'
import {Link} from 'gatsby'
const Product = (props) => {

    const { product } = props;

    return(
        <div className="product__Container">
            <Link className="link" to={`/product/${product.id}-${product.genre.id}`}>
                <div className="img__container">
                    <img className="image" src={product.image.url} alt=""/>
                </div>
                <span className="title">{product.name}</span>
                <Markup content={product.shortdescription}/>
                <Markup content={product.descriptionukuran}/>
            </Link>
        </div>
    )
}

export default Product