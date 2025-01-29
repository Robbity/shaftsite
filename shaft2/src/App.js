import './App.css';
import balderImage from './img/even more fucked.jpg';
import shaftcity from './img/shaftcitytemp.png';
import shafttop from './img/shaftcitytop.png';
import shaftbot from './img/shaftcitybottom.png';
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

  return (
    <div className="App">
      <div className="text-center">
        <a href="https://linktr.ee/shaft2"
          className='links'
          target="_blank">
          <div className='links'>Socials</div>
        </a>
        <div className="image-container">
          <div id="scene" ref={sceneRef}>
            <div data-depth="0.5" className="layer">
              <img
                src={shafttop}
                alt="Foreground"
                className="full-screen-image"
              />
            </div>
            <div data-depth="0.3" className="layer">
              <img
                src={shaftbot}
                alt="Background"
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