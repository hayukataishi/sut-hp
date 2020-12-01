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
        <Title title="お問い合わせ" whiteflg="true" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <div className="contact-wrapper__text">アクセス</div>
            <div className="contact-wrapper__text">
              <p>{'〒460-0024\n愛知県名古屋市中区正木4丁目6-6第13フクマルビル505'}</p>
            </div>
            <div className="contact-icon-wrapper">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
              >
                <i className="fa fa-envelope fa-2x fa-button" aria-hidden="true" />
              </a>
              <a href="https://lin.ee/AHlJKyB">
                <img
                  height="36"
                  border="0"
                  src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
                  alt="line"
                  className="fa-button"
                />
              </a>
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
              >
                <i className="fa fa-line fa-2x fa-button" aria-hidden="true" />
              </a> */}
              {/* <div
                class="line-it-button"
                data-lang="ja"
                data-type="friend"
                data-lineid="@519zleul"
                data-count="true"
                data-home="true"
                style={{ display: 'none' }}
              />
              <script
                src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js"
                async="async"
                defer="defer"
              /> */}
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
              >
                <i className="fa fa-instagram fa-3x fa-button" aria-hidden="true" />
              </a> */}
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
