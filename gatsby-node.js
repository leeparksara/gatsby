/*
const path = require ('path');

exports.createPages = async ({graphql, actions}) =>{
    const {createPages} = actions;

    const response = await graphql(`
    allContentfulPortfolio {
        edges {
          node {
         slug
          
            
          }
        }
      }
      }
    `);


    response.data.allContentfulPortfolio.edges.forEach((edge)=>{
        createPages ({
            path: `/portfolio/${edge.node.slug}`,
            component: path.resolve('./src/templates/portfolio-items.js'),
            context:{
                slug: edge.node.slug,
            },
        });
    });
}; */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulPortfolio {
        nodes {
          title
          slug
        }
      }
    }
  `);

  const portfolios = result.data.allContentfulPortfolio.nodes;

  portfolios.forEach(portfolio => {
    createPage({
      path: `/portfolio/${portfolio.slug}`,
      component: path.resolve('./src/templates/portfolio-item.js'),
      context: {
        slug: portfolio.slug,
      },
    });
  });
};
