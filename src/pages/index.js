import * as React from "react";
import * as styles from '../styles/home.module.css'; // Note the use of 'styles' as an object

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <section className={styles.head}>
      <div>
        {/* Your content here */}
        This is my content here 
      </div>
    </section>
  </Layout> 
);

export const Head = () => <title>Home Page</title>;

export default IndexPage;
