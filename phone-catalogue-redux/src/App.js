import React from 'react';
import './App.css';
import MainNav from './components/misc/MainNav';
import MainFooter from './components/misc/MainFooter';
import { Switch, Route, Redirect } from 'react-router-dom';
import PhoneList from './components/PhonesList';

const App = () => {
  return (
    <div className="App">
      <MainNav/>

      <Switch>
        <Route exact path="/phones" component={PhoneList}/>
        <Redirect from='/' to='/phones' />
      </Switch>

      <MainFooter/>

    </div>
  );
}

export default App;
