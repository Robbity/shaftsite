import './App.css';
import balderImage from './img/even more fucked.jpg';

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <img src={balderImage} alt="Balder" className="full-screen-image" />
        <div className='title'>SHAFTCITY</div>
        <div className='date'>MARCH 15TH</div>
      </div>
    </div>
  );
}

export default App;