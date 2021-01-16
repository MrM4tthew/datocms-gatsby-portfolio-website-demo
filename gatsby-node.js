const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    const detailTemplate = path.resolve('src/templates/product-detail.js');
    const productsTemplate = path.resolve('src/templates/products-option.js')

    const firstpromise = graphql(`{
        allDatoCmsProduct {
            edges {
              node {
                productseo
                genre {
                    genreseo
                  }
              }
            }
          }
    }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allDatoCmsProduct.edges.forEach(({node}) => {
            createPage({
                path: `/product/${node.productseo}-${node.genre.genreseo}/`,
                component: detailTemplate,
                context: {
                    id: node.productseo,
                    category: node.genre.genreseo
                }
            })
        })
    })

    // Lanjutin bikin dua promise
    const secondpromise = graphql(`{
        allDatoCmsProduct {
            edges {
              node {
                genre {
                    genreseo
                  }
              }
            }
          }
    }`).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allDatoCmsProduct.edges.forEach(({node}) => {
            createPage({
                path: `/products/${node.genre.genreseo}`,
                component: productsTemplate,
                context: {
                    category: node.genre.genreseo
                }
            })
        })
    })

    return Promise.all([firstpromise, secondpromise])
}