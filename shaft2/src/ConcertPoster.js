import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import posterImage from './img/FINAL_POSTER_NO_YLEM.png';

function ConcertPoster() {
  return (
    <div className="poster-container" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '100vh',
      background: '#000',
      padding: '20px'
    }}>
      <img 
        src={posterImage} 
        alt="Concert Poster" 
        style={{ 
          maxWidth: '100%', 
          maxHeight: '85vh',
          objectFit: 'contain',
          margin: '0 auto',
          display: 'block'
        }}
      />
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginTop: '20px'
      }}>
        <Link 
          to="/" 
          style={{ 
            display: 'inline-block', 
            color: 'white', 
            textDecoration: 'none',
            border: '1px solid white',
            padding: '10px 30px',
            fontSize: '16px',
            letterSpacing: '2px'
          }}
        >
          BACK
        </Link>
        <a 
          href="https://www.eventbrite.com/e/shaft2-viplex-bbystardom-ylem-take-your-time-tickets-1264410890009?aff=oddtdtcreator" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block', 
            color: 'white', 
            textDecoration: 'none',
            border: '1px solid white',
            padding: '10px 30px',
            fontSize: '16px',
            letterSpacing: '2px'
          }}
        >
          TICKETS
        </a>
      </div>
    </div>
  );
}

export default ConcertPoster;
