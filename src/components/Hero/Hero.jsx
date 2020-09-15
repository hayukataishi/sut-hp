import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <LightSpeed left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            <span className="text-color-main">{name || 'SUPER ULTRA THUNDER'}</span>
          </h1>
        </LightSpeed>
        <LightSpeed left={isDesktop} bottom={isMobile} duration={1000} delay={750} distance="30px">
          <h1 className="hero-title">{subtitle || "I'm the Unknown Developer."}</h1>
        </LightSpeed>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
        <LightSpeed left={isDesktop} bottom={isMobile} duration={1000} delay={750} distance="30px">
          <h1 className="hero-title-icon">{subtitle || "I'm the Unknown Developer."}</h1>
        </LightSpeed>
      </Container>
    </section>
  );
};

export default Header;
