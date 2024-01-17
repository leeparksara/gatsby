
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// contact us component 
// Contact Us has only two entries

const ContactUsTemplate = ({ data }) => {
  const contactData = data.allContentfulContactUs.nodes[0]; 

  return (
    <Layout>
 
   
    <div className='form-wrapp'>
      <h1>{contactData.title}</h1>
<div>
  <form>
  <p>{contactData.description}</p>

  <div className='form-input'><input type="text" placeholder='First Name'/>
  <input type='text' placeholder='Last Name'/>
  </div>
  <div className='form-input'><input type='email' placeholder='Email'/>
  <input type='number' placeholder='Number'/>
  </div>
  <textarea placeholder='Type Your Message Here..'/>
  <input className='btn' type='submit' />
  </form>
</div>
 

    </div>
    <div>
<p>Email: {contactData.email}</p>
      <p>Number: {contactData.number}</p>

</div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulContactUs {
      nodes {
        title
        description
        email
        number
      }
    }
  }
`
export default ContactUsTemplate;
