// contact-us-template.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
const ContactUsTemplate = ({ data }) => {
  const contactData = data.allContentfulContactUs.nodes[0]; // Assuming you have only one Contact Us entry

  return (
    <Layout>
 
   
    <div>
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
