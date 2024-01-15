import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const AboutUsPage = ({ data }) => {
  const {  aboutText, aboutImage,heading } = data.allContentfulAboutUs.edges[0].node;
const parsedHeading = documentToReactComponents(JSON.parse(heading.raw))
  return (
    <Layout>
      <div className='about-section'>
      <div className='about-text'>
      <h2>{parsedHeading}</h2>
        <p>{aboutText.aboutText}</p>
      </div>
       
        <GatsbyImage image={aboutImage.gatsbyImageData} alt="About Us Image" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAboutUs {
      edges {
        node {
          aboutImage {
            gatsbyImageData(width: 500)
          }
          heading {
            raw
          }
          aboutText {
            aboutText
          }
        }
      }
    }
  }
`
export default AboutUsPage;
