const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators

    const detailTemplate = path.resolve('src/templates/product-detail.js');
    const productsTemplate = path.resolve('src/templates/products-option.js')

    const firstpromise = graphql(`{
        allDatoCmsProduct {
            edges {
              node {
                id
                genre {
                    id
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
                path: `/product/${node.id}-${node.genre.id}/`,
                component: detailTemplate,
                context: {
                    id: node.id,
                    category: node.genre.id
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
                    id
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
                path: `/products/${node.genre.id}`,
                component: productsTemplate,
                context: {
                    category: node.genre.id
                }
            })
        })
    })

    return Promise.all([firstpromise, secondpromise])
}