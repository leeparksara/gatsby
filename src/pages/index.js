import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/style.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
// index page will display navbar, hero section and footer
// the data retrieved from graphql and contentful
const IndexPage = ({ data }) => {
  const { title, heroText, heroImage,heading } = data.allContentfulHomePage.edges[0].node;
  const parsedHeading = documentToReactComponents(JSON.parse(heading.raw));
  return (
    <Layout >
      <section className="hero-section">
        <div className="hero-flex">
        <div>
        <h2>{parsedHeading}</h2>
          <p>{heroText}</p>
        </div>
       
          <GatsbyImage image={heroImage.gatsbyImageData} alt={`Image for ${title}`} />
        </div>
      </section>
    </Layout>
  );
};



export const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          heading {
            raw
          }
          heroImage {
            gatsbyImageData(width: 700)
          }
          heroText
        }
      }
    }
  }
`


export default IndexPage;
