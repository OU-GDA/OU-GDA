import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/secret' className='App-link'>
          Hi Skyler
        </Link>
      </header>
    </div>
  );
}

export default App;
