import './App.css';
// import balderImage from './img/even more fucked.jpg';
// import shaftcity from './img/shaftcitytemp.png';
// import shafttop from './img/shaftcitytop.png';
// import shaftbot from './img/shaftcitybottom.png';

import shaftForeground from './img/shaftcity/shaftcity-foreground.png';
import shaftForemiddle from './img/shaftcity/shaftcity-foremiddle.png';
import shaftBackmiddle from './img/shaftcity/shaftcity-backmiddle.png';
import shaftBack from './img/shaftcity/shaftcity-back.png';
import shaftEnd from './img/shaftcity/shaftcity-end.png';

import { useEffect, useRef, useState } from 'react';
import Parallax from 'parallax-js';

function App() {
  const sceneRef = useRef(null);
  const descriptions = [
    'A place of peace and prosperity. Shaft City is a city of the future.',
    'A place of oppression and decay. Shaft City is a city of the future.'
  ];
  const [randomText] = useState(() =>
    descriptions[Math.floor(Math.random() * descriptions.length)]
  );

  useEffect(() => {
    const scene = sceneRef.current;
    if (scene) {
      const parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        clipRelativeInput: false,
        hoverOnly: false,
        scalar: 15
      });

      return () => parallaxInstance.destroy();
    }
  }, []);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 480000; // 480 seconds

    const grow = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setScale(1 + (progress * 20)); // Increase the multiplier to grow larger

      if (progress < 1) {
        requestAnimationFrame(grow);
      }
    };

    requestAnimationFrame(grow);
  }, []);

  return (
    <div className="App">
      <div className="text-center">
        <div className="links-container" style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.1s linear'
        }}>
          <a href="https://linktr.ee/shaft2" className='links'>
            https://linktr.ee/shaft2
          </a>
        </div>
        <div className="image-container">
          <div id="scene" ref={sceneRef}>
            {/* End - moves the least */}
            <div data-depth="0.2" className="layer">
              <img
                src={shaftEnd}
                alt="End"
                className="full-screen-image"
              />
            </div>
            {/* Back */}
            <div data-depth="0.4" className="layer">
              <img
                src={shaftBack}
                alt="Back"
                className="full-screen-image"
              />
            </div>
            {/* Backmiddle */}
            <div data-depth="0.6" className="layer">
              <img
                src={shaftBackmiddle}
                alt="Backmiddle"
                className="full-screen-image"
              />
            </div>
            {/* Foremiddle */}
            <div data-depth="0.8" className="layer">
              <img
                src={shaftForemiddle}
                alt="Foremiddle"
                className="full-screen-image"
              />
            </div>
            <div data-depth="1.0" className="layer">
              <img
                src={shaftForeground}
                alt="Foreground"
                className="full-screen-image"
              />
            </div>
          </div>
        </div>
        <a href="https://open.spotify.com/artist/5GpFs0JmuMFCGrIMyqO1JI?si=aAM0t-RJSWeD6rp_JKlEOg"
          className='title-link'
          target="_blank">
          SHAFT CITY
        </a>
        <div className='date'>{randomText}</div>
      </div>
    </div>
  );
}

export default App