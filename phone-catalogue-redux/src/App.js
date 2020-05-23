import React from 'react';
import './App.css';
import MainNav from './components/misc/MainNav';
import MainFooter from './components/misc/MainFooter';

const App = () => {
  return (
    <div className="App">
      <MainNav/>
      
      <div className="container-fluid mt-4">
        <h1 className="display-1">Hello</h1>
      </div>

      <MainFooter/>
    </div>
  );
}

export default App;
