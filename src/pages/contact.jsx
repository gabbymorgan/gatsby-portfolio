import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';
import config from '../../config/SiteConfig';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container text>
      <h1>Contact me!</h1>
      <p>
        I'll get right back to you.
      </p>
      <ContactForm />
    </Container>
    <Footer />
  </div>
);

export default Contact;
