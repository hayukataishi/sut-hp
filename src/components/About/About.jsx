import React, { useContext, useState, useEffect } from 'react';
import Bounce from 'react-reveal/Bounce';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="SUPER ULTRA THUNDERについて" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Bounce left={isDesktop || isMobile} duration={1000} delay={600} distance="30px">
              <>
                <div className="about-wrapper__image">
                  <AboutImg alt="profile picture" filename={img} />
                </div>
                <div className="about-wrapper__name">
                  <p>代表取締役　羽床 大志（はゆか たいし）</p>
                </div>
                {/* <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://twitter.com/tin_channel'}
                  >
                    <i className="fa fa-twitter fa-2x fa-button icon-white" aria-hidden="true" />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://www.instagram.com/hayukataishi/?hl=ja'}
                  >
                    <i className="fa fa-instagram fa-2x fa-button icon-white" aria-hidden="true" />
                  </a>
                </div> */}
              </>
            </Bounce>
          </Col>
          <Col md={6} sm={12}>
            <Bounce right={isDesktop || isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Bounce>
          </Col>
        </Row>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Bounce left={isDesktop || isMobile} duration={1000} delay={600} distance="30px">
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tin_channel">
                  <i className="fa fa-twitter fa-2x fa-button icon-white" aria-hidden="true" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/hayukataishi/?hl=ja"
                >
                  <i className="fa fa-instagram fa-2x fa-button icon-white" aria-hidden="true" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/hayuka.taishi/"
                >
                  <i className="fa fa-facebook fa-2x fa-button icon-white" aria-hidden="true" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCS8HogDJIQe4k1TJQK8KtrQ"
                >
                  <i className="fa fa-youtube-play fa-2x fa-button icon-white" aria-hidden="true" />
                </a>
              </div>
            </Bounce>
          </Col>
        </Row>
        <div className="about-youtube">
          <iframe
            title="youtube"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SLWVkdn5CuQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
