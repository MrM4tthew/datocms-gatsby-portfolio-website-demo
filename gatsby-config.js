require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `MEBO - Belanja Kasur Online, Terpercaya & Terjangkau`,
    description: `Memilih kasur yang tepat sangat penting untuk kesehatan dan masa depan anda. Mebo memberikan solusi dalam memilih kasur terbaik serta bergaransi s/d 20 tahun.`,
    keywords: `Kasur busa, Kasur lipat, Harga kasur busa, Harga kasur inoac, Harga busa inoac, Harga kasur lipat, Kasur busa terbaik`,
    url: `https://meboshop.netlify.app`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: "f710b41e097ddbfc7d6c73079c39b7",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      }
    },
  ],
}
