import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import CollaborateImg from '../Image/CollaborateImg';

const Collaborate = () => {
  const { collaborate } = useContext(PortfolioContext);

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
    <section id="collaborate">
      <Container>
        <div className="collaborate-wrapper">
          <Title title="コラボレーション" />
          {collaborate.map((collabo) => {
            const { title, info, info2, info3, url, img, id, youtube } = collabo;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="collaborate-wrapper__text">
                      <h3 className="collaborate-wrapper__text-title">
                        {title || 'Collaborate Title'}
                      </h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                        <p className="mb-4">{info3 || ''}</p>
                      </div>
                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || '#!'}
                        >
                          気になる
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="collaborate-wrapper__image">
                      {!url && !youtube && (
                        <div>
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <CollaborateImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </div>
                      )}
                      {url && !youtube && (
                        <a
                          href={url || '#!'}
                          target="_blank"
                          aria-label="Collaborate Link"
                          rel="noopener noreferrer"
                        >
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <CollaborateImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </a>
                      )}
                      {youtube && (
                        <div>
                          <div data-tilt className="thumbnail rounded">
                            <iframe
                              title="youtube"
                              width="560"
                              height="315"
                              src={youtube}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Collaborate;
