import './App.css';
import balderImage from './img/even more fucked.jpg';
import shaftcity from './img/shaftcitytemp.png';
import { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

function App() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (scene) {
      const parallaxInstance = new Parallax(scene, {
        relativeInput: true,
        clipRelativeInput: false,
        hoverOnly: false,
        scalar: 15 // Adjust this value to control movement intensity
      });

      // Cleanup on unmount
      return () => parallaxInstance.destroy();
    }
  }, []);

  return (
    <div className="App">
      <div className="text-center">
        <div className="image-container">
          <div id="scene" ref={sceneRef}>
            <div data-depth="0.5" className="layer">
              <img 
                src={shaftcity} 
                alt="Balder" 
                className="full-screen-image"
              />
            </div>
          </div>
        </div>
        <a href="https://open.spotify.com/artist/5GpFs0JmuMFCGrIMyqO1JI?si=aAM0t-RJSWeD6rp_JKlEOg" 
           className='title-link' 
           target="_blank">
          SHAFTCITY
        </a>
        <div className='date'>LIVE - MARCH 15TH</div>
      </div>
    </div>
  );
}

export default App;