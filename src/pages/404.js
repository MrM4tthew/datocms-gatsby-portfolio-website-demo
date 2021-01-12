import React from "react"
import Layout from "../components/layout"
import "../styles/error.scss"
import { Link } from "gatsby"

export default function Error() {

    return (
        <Layout>
            <div className="error__container">
                <span className="error__title">Oops!</span>
                <span className="error__msg">404</span>
                <div className="error__line"/>
                <span className="sub__msg">Page not found</span>
                <Link to="/">
                    <span>Kembali</span>
                </Link>
            </div>
            
        </Layout>
        
    )
}

