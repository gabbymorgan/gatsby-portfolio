import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';

const array = ['Agile',
  'CSS',
  'GIT',
  'GraphQL',
  'HTML',
  'JavaScript',
  'MongoDB',
  'Node',
  'Postman',
  'Python',
  'React',
  'Redux',
  'Responsive Design',
  'REST',
  'VS Code'];
const skillsText = {};

class About extends React.Component {
  constructor() {
    super();
    this.state = {
    hover: false
    };
  }

  render() {
    return (
      <div className="container about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Header>About</Header>
        <Container text>
          <h1>Hi!</h1>
          <p>
            My name is William, and I'm a full stack web developer. Technologies and processes I am skilled in include...
          </p>
          {array.map(skill => {
            return (
              <div className='Skill'>
                <h1 className={this.state.hover === skill ? '' : 'no-hover'}>{skill}</h1>
                <img key={skill} src={require(`../../content/skills/${skill}.png`)} alt={skill} width={'30%'}
                onMouseEnter={() => this.setState({hover: skill})}
                onMouseLeave={() => this.setState({hover: null})}
                onClick={() => {window.open(`http://google.com?q=${skill}`)}}/>
                <p>{skillsText[skill]}</p>
              </div>
            ) 
          })}
          <p className='bottom-text'>...and many more. Please feel free to <a href='/contact'>contact me</a> to talk about your project. Thank you.</p>
          </Container>
        <Footer />
      </div>
    );
  }

  handleEnter() {

  }
}

export default About;
