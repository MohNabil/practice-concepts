import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid='app-link'
        >
          Learn Testing and CI/CD with github actions
        </a>
      </header>
    </div>
  );
}

export default App;
