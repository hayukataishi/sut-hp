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
            <div className="contact-wrapper__text">アクセス</div>
            <div className="contact-wrapper__text">
              <p>{'〒460-0024\n愛知県名古屋市中区正木４丁目６－６第１３フクマルビル５０５'}</p>
            </div>
            <>
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
            </>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
