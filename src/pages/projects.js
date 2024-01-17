
import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"

//The component that renders all the projects that I have done
const Projects = () => {
  // Retrieving the data for the portfolio 
  // Each project has a title, description and image
  const data = useStaticQuery(graphql`query{
     allContentfulPortfolio {
    edges {
      node {
        title
        descriptions{
          descriptions
        } 
      
        images{
          gatsbyImage(width:400)
        }
        
      }
    }
  }
  }`)
  return (
    <Layout>
    <div className="project-wrapper">
      <ul className="posts">
        {data.allContentfulPortfolio.edges.map(edge => (
          <li className="post" key={edge.node.id}>
          <div className="project-section">
          <div className="project-text">
            <h2>{edge.node.title}</h2>
            <p className="excerpt">{edge.node.descriptions.descriptions}</p>
            {/* A link to each project that takes the user for an individual project page  */}
            <Link className="link"  to={'../templates/portfolio-item.js'}>Read more</Link>
            </div>
            <GatsbyImage 
            className="img"
              alt={edge.node.title}
              image={edge.node.images.gatsbyImage}
            />
            {/* Link to the individual portfolio item */}
         
            </div>
          </li>
        ))}
      </ul>

      </div>

    </Layout>

  );
  
}

export const Head = () => <title>Portfolio Page</title>

export default Projects
