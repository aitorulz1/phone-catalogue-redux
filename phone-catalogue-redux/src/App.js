import React, { Component } from 'react';
import MainNav from './components/misc/MainNav';
import MainFooter from './components/misc/MainFooter';
import PhoneList from './components/PhonesList';
import { 
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchData } from './redux/actions';
import Loading from './components/misc/Loading';
import PropTypes from 'prop-types';

class App extends Component {
  
  componentDidMount(){
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render(){
    const { error, pending } = this.props;

    if(pending) return <Loading />

    //|| data.length === 0
    if(error) return (
      <div className="container-fluid mt-5 pt-5 messageError">
        <div className="d-flex align-items-center">
          <img src="/error.gif" alt="Error" />
          <h3>Ooops! Something is wrong!</h3>
        </div>
      </div>
    )

    return (
      <div className="App" data-testid="custom-element">
        <MainNav/>

        <Router>
          <Switch>
            <Route exact path="/phones" component={PhoneList}/>
            <Redirect from='/' to='/phones' />
          </Switch>
        </Router>
  
        <MainFooter/>
      </div>
    )
  }
  
}

App.propTypes = {
  error: PropTypes.string,
  pending: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    pending: state.pending,
    data:  state.data,
    error: state.error 
  }
}

const mapDispatchToProps = {
  fetchProducts: fetchData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);

