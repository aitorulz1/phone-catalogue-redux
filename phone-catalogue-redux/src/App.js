import React from 'react';
import MainNav from './components/misc/MainNav';
import MainFooter from './components/misc/MainFooter';
import PhoneList from './components/PhonesList';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'


const App = ({ store }) => {
  console.log(store)

  return (
    <Router>
      <div className="App">
        <MainNav/>

        <Switch>
          <Route exact path="/phones" component={PhoneList}/>
          <Redirect from='/' to='/phones' />
        </Switch>

        <MainFooter/>

      </div>
    </Router> 
  );
}

export default App;
