import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="お問い合わせ" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            {/* <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p> */}
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              <i className="fa fa-envelope fa-3x fa-button" aria-hidden="true" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              <i className="fa fa-twitter fa-3x fa-button" aria-hidden="true" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              <i className="fa fa-instagram fa-3x fa-button" aria-hidden="true" />
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
