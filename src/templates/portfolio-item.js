// portfolio-item.js
// This component renders each project individually
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const PortfolioItemTemplate = ({ data }) => {
  const portfolio = data.contentfulPortfolio;

  return (
    <Layout>
    <div className='project'>

  <div>
  <h1>{portfolio.title}</h1>
      <p>{portfolio. descriptions.descriptions}</p>
  </div>

      <GatsbyImage image={portfolio.images.gatsbyImage} alt={portfolio.title} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulPortfolio(slug: { eq: $slug }) {
      title
      descriptions{
        descriptions
      }
      images{
        gatsbyImage(width:700)
      }
    }
  }
`;

export default PortfolioItemTemplate;
