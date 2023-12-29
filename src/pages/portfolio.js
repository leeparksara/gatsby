import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
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
      <h1>Portfolio page</h1>
      <ul className="posts">
        {data.allContentfulPortfolio.edges.map((edge) => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
  {edge.node.title}
              </h2>
            
              
            
              <p className="excerpt" >
                {edge.node.descriptions.descriptions}

              </p>
              <GatsbyImage alt={edge.node.title} image={edge.node.images.gatsbyImage} />
            </li>

          )
        })}
        
     </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout> )
  
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
