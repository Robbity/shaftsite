import React, { useState, useEffect } from 'react';
import shaftcity from './img/shaftcity.png';
import './App.css';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <div className="background-overlay"></div>
      <div className="content-overlay">
        <div style={{ position: 'relative' }}>
          <img src={shaftcity} alt="Shaftcity" className="spinning-logo" />
          <div className="cd-middle"></div>
        </div>
      </div>

      <div class="wrapper">
        <div class="marquee">
          <p>
            shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. 
            shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. 
          </p>
          <p style={{ margin: '3px' }}></p>
          <p>
            shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity.
            shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity. shaftcity.  
          </p>
        </div>
      </div>

      {/* <div className="visitor-counter">
        Visitors: 1337
      </div> */}

      <div className={`spotify-embed ${isDesktop ? 'desktop' : 'mobile'}`}>
        {isDesktop ? (
          <iframe 
          style={{borderRadius: '12px'}} 
          src="https://open.spotify.com/embed/artist/5GpFs0JmuMFCGrIMyqO1JI?utm_source=generator&theme=0" 
          width="100%" 
          height="450" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          />
        ) : (
          <iframe 
            style={{borderRadius: '12px'}} 
            src="https://open.spotify.com/embed/artist/5GpFs0JmuMFCGrIMyqO1JI?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default App;
