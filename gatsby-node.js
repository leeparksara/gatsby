
const path = require('path');
// Fetching the data from the portfolio content type and creating page for each project 
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
}