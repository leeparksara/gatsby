/*
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import {GatsbyImage} from 'gatsby-plugin-image';

export const query = graphql`
query ($slug: String!) {
    contentfulPortfolio(slug: {eq: $slug}) {
        title
        descriptions{
            descriptions
          }

          images{
            gatsbyImage(width:700)
          }
    }
}`;

const portfolioItem = (props) =>{
    <Layout>
        <Link  to='/portfolio/'> Visit the blog page</Link>
        <div>
            <h1>{props.data.contentfulPortfolio.title}</h1>
            <GatsbyImage image={props.data.contentfulPortfolio.images.GatsbyImage} 
            alt={props.data.contentfulPortfolio.title}/>

           
        </div>
    </Layout>
};


export default portfolioItem */

// portfolio-item.js

import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const PortfolioItemTemplate = ({ data }) => {
  const portfolio = data.contentfulPortfolio;

  return (
    <Layout>
    <div className='project'>

  
      <h1>{portfolio.title}</h1>
      <p>{portfolio. descriptions.descriptions}</p>
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
