module.exports = {
  siteMetadata: {
    title: `√Q BLOG`,
    author: `sqrt_q`,
    description: `hello.`,
    siteUrl: `https://sqrt_q.com`,
    social: {
      twitter: `sqrt_q`,
    },
    categories: [
      {
       name: "Art",
       slug: "art",
       color: "#3f91b9",
      },
      {
       name: "Animal",
       slug: "animal",
       color: "#8ebfad",
      },
      {
       name: "Self",
       slug: "self",
       color: "#9ea1d2",
      },
      {
       name: "Collect",
       slug: "collect",
       color: "#9ea1d2",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [ 
          `gatsby-remark-code-titles`, 
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 650,
              height: 365,
            },
          },
          {         
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          //{
          //  resolve: `gatsby-remark-twemoji-shortcut`,
          //  options: {
          //    classname: `twemoji`
          //  }
          //},
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                simple: {
                  classes: "simple",
                  title: "optional",
                },
                info: {
                  classes: "info",
                  title: "optional",
                },
                alert: {
                  classes: "alert",
                  title: "optional",
                },
                notice: {
                  classes: "notice",
                  title: "optional",
                },
                imageSmall: {
                  classes: "image-small",
                },
                imageMedium: {
                  classes: "image-medium",
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `√Q BLOG | √Qの個人ブログ`,
        short_name: `√Q BLOG`,
        start_url: `/`,
        background_color: `rgb(33, 36, 45)`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
     {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-177217927-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    //{
    //  resolve: `gatsby-plugin-typography`,
    //  options: {
    //    pathToConfigModule: `src/utils/typography`,
    //  },
    //},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
