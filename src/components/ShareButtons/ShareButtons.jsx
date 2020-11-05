import React, { useState, useEffect } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';

const ShareButton = () => {
  // const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      // setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      // setIsDesktop(false);
    }
  }, []);

  const iconSize = isMobile ? 28 : 36;

  return (
    <>
      <p className="footer__text">＼シェアよろしくお願いします／</p>
      <>
        <TwitterShareButton
          className="share-button"
          url="https://suspicious-jennings-0dd049.netlify.app/"
          title="タイトル"
        >
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton
          className="share-button"
          url="https://suspicious-jennings-0dd049.netlify.app/"
          title="タイトル"
        >
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
        <LineShareButton
          className="share-button"
          url="https://suspicious-jennings-0dd049.netlify.app/"
          title="タイトル"
        >
          <LineIcon round size={iconSize} />
        </LineShareButton>
      </>
    </>
  );
};

export default ShareButton;
