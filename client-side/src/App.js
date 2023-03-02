// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Nav_page from './component/Nav';
import Home from './component/Home';
import Forms from './component/Forms';
import IsoPartnerships from './component/IsoPartnerships';
import ErrorBoundary from './component/ErrorBoundary'
import Footer from './component/Footer'
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div>
      <Nav_page/>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Forms/>} />
          <Route path="/iso-partnerships" element={<IsoPartnerships/>} />
        </Routes>
      </ErrorBoundary>
      <Footer/>
        
      {/* <Home/>
      <Forms/>        */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Button></Button> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
