import  React,{ useState } from "react"
import { graphql,Link  } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as styles from "../styles/style.css";

// Error page thats displays when something goes wrong in the website

const NotFoundPage = ({data}) => {
// Retrieve the stored data in contentful and its structure from graphql
// The data to render error page dynamically 
  const { headText,errortext,errorImage} = data.allContentfulErrorPage.edges[0].node;
   // To be able to render the rich text
  const parsedHeading = documentToReactComponents(JSON.parse(headText.raw))
  // Retrieve the data for the navbar to be able to find the pages 
  const menuItems = data.allContentfulNavbarMenu?.nodes || [];

  // Extracting page paths from menu items with a slash 
  const allPages = menuItems.map(item => `/${item.slug}`)
// using useState as a react hook to manage the search and result query and to update it 
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
// handling the search query and filtgering through all pages 
// all pages stands for the links in our navbar
  const handleSearch = (query) => {
    const lowercaseQuery = query.toLowerCase();

    const results = allPages.filter(path => path.includes(lowercaseQuery));

    setSearchResults(results);
  };

  return(
    
    <div className="error-section">
    <div className="error-text">
    <h1>{errortext.errortext}</h1>
    <p>
    { parsedHeading}</p>
    <div className="search-bar">
          <input
            type="text"
            placeholder="Search pages..."
            value={searchQuery}
            onChange={(e) => {
              const query = e.target.value;
              setSearchQuery(query);
              handleSearch(query);
            }}
          />
          
          {/* We display the search result only when the searchbar is not empty*/}
          {searchQuery && (
  <div className="search-results">
    {searchResults.map(result => (
      <Link key={result} to={result} className="result-item">{result}</Link>
    ))}
  </div>
)}

        </div>
        <Link className="homeBtn" to="/">Go back to home  </Link>
    </div>
   
   

<GatsbyImage image={errorImage.gatsbyImageData} alt="Error Image" />
    </div>
      
 
  )

}
 

/* This query retrieves data from two different Contentful content types "allContentfulErrorPage" and "allContentfulNavbarMenu"*/

export const query = graphql`
  query {
    allContentfulErrorPage {
      
          edges {
            node {
              headText {
                raw
              }
              errortext {
                errortext
              }
              errorImage {
                gatsbyImageData(width: 400)
              }
            }
      }
    }
    allContentfulNavbarMenu(sort: { order: ASC }) {
      nodes {
        title
        slug
      }
    }
  }
`;

export default NotFoundPage