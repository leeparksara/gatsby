import * as React from "react";
import Navbar from "./Navbar";
import * as styles from "../styles/style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// The layout that will appear on every page navbar, footer
const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
   
    <div className="content">
      {children}
    </div>
    <footer>
    <div className="footer-wrapper">

  
    <div className="contact-info">
    <p> 
    Email: Sara900@gmail.com
    </p>
     

<p>Phone number: 0105644-5612</p>
      </div>
      
      <div>
    <p>Copyright 2023 sara</p>
    </div>
  
    <div className="social-links">
      
      <a href="https://github.com/leeparksara" target="_blank" rel="noopener noreferrer">
      <FaGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/sara-leepark-5ba013263/" target="_blank" rel="noopener noreferrer">
       <FaLinkedin className="icon"/>
      </a>
    </div>
    </div>
    </footer>
   
    
  </div>
);

export default Layout;
