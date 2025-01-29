import './App.css';
import balderImage from './img/even more fucked.jpg';
import shaftcity from './img/shaftcitytemp.png';
import { useState, useEffect } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position as percentage of window
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="text-center">
        <div className="image-container">
          <img 
            src={shaftcity} 
            alt="Balder" 
            className="full-screen-image"
            style={{
              transform: `translate(${(mousePosition.x - 50) * -0.5}px, ${(mousePosition.y - 50) * -0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>
        <a href="https://open.spotify.com/artist/5GpFs0JmuMFCGrIMyqO1JI?si=aAM0t-RJSWeD6rp_JKlEOg" className='title-link' target="_blank">SHAFTCITY</a>
        <div className='date'>LIVE - MARCH 15TH</div>
      </div>
    </div>
  );
}

export default App;