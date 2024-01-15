/*import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
      <nav>
          <h2>Saras's portfolio</h2>
          <div className='links'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/portfolio'>Portfolio Projects</Link>
          </div>

  </nav>
  )
}

export default Navbar */



import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
const Navbar = () => {
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
    <nav>
      <h2>Sara's Portfolio</h2>
      <div className='links'>
        
        {menuItems.map(item => (
          <Link key={item.slug} to={`/${item.slug}`}>{item.title}</Link>
        ))}
       
      </div>
    </nav>
  );
};

export default Navbar;
