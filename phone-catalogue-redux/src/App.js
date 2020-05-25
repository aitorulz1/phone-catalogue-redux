import React, { Component } from 'react';
import MainNav from './components/misc/MainNav';
import MainFooter from './components/misc/MainFooter';
import PhoneList from './components/PhonesList';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchData } from './redux/actions';
import { getPhones, getPhonesPending, getPhonesError } from './redux/reducers';
import { bindActionCreators } from 'redux';
import Loading from './components/misc/Loading';

class App extends Component {
  
  componentDidMount(){
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render(){
    const { phones, error, pending } = this.props;
    //console.log('PROPS ---------------------->', this.props)

    if(pending) return <Loading />

    return (
      <div className="App">
        <MainNav/>
  
        <Switch>
          <Route 
            exact path="/phones" 
            component={props => 
              <PhoneList {...phones}/>
            } />
          <Redirect from='/' to='/phones' />
        </Switch>
  
        <MainFooter/>
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    pending: getPhonesPending(state),
    data: getPhones(state),
    error: getPhonesError(state)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

//export default App;
