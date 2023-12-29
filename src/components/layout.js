import * as React from "react"
//import 'bootstrap/dist/css/bootstrap.min.css';

//import { Link } from "gatsby";
import Navbar from "./Navbar";


const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div className="content">
      {children}
    </div>
     <footer> <p>Copyright 2023 sara</p> </footer>
  </div>
  






  /*
    <>
      <header><Link to="/">Gatsby ITHS-starter</Link></header>
      <main>{children}</main>
      <footer>Footer</footer>
    </> */
  )


export default Layout
