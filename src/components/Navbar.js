
import React from 'react';
import logoImage from '../images/Group 41.png'
import { Link, graphql, useStaticQuery } from 'gatsby';
const Navbar = () => {
  // navbar component using a static query
  const data = useStaticQuery(graphql`
    query {
      allContentfulNavbarMenu(sort: { order: ASC }) {
        nodes {
          title
          slug
        }
      }
    }
  `);

  const menuItems = data.allContentfulNavbarMenu.nodes;

  return (
    <nav >
            <Link  to="/"><img src={logoImage}/> </Link>
      
      <div className='links'>
        
        {menuItems.map(item => (
          <Link key={item.slug} to={`/${item.slug}`}>{item.title}</Link>
        ))}
       
      </div>
     
     
    </nav>
  );
};

export default Navbar;