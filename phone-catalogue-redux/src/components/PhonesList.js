import React from 'react';
import Card from './UI/Card';
import { getPhones, getPhonesPending, getPhonesError } from '../redux/reducers';
import { connect } from 'react-redux';

const PhoneList = (props) => {
  const phones = props.data
  
  return (
    <div className="container-fluid mt-5 pt-5">
      {phones.length ? (
      <div className="row row-cols-1 row-cols-md-2">
        {phones.map((phone, index) => 
          <Card key={index} {...phone}/>
        )}
      </div>
      ) : (
        <div className="alert alert-dark" role="alert">
          Sorry! No phones at the moment
        </div>
      )
      }


    </div>
)}

const mapStateToProps = (state) => {
  return {
    pending: getPhonesPending(state),
    data: getPhones(state),
    error: getPhonesError(state)
  }
}

export default connect(
  mapStateToProps,
  )(PhoneList);