import React from 'react';
import Card from './UI/Card';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types'; 

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
        <div className="alertoooo alert-dark" role="alert">
          Sorry! No phones at the moment
        </div>
      )
      }
    </div>
)}

const mapStateToProps = state => {
  return {
    pending: state.pending,
    data:  state.data,
    error: state.error 
  }
}

PhoneList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    imageFileName: PropTypes.string.isRequired,
    manufacturer: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    processor: PropTypes.string,
    ram: PropTypes.number,
    screen: PropTypes.string
  })),
  error: PropTypes.string,
  pending: PropTypes.bool
}


export default connect(
  mapStateToProps,
  )(PhoneList);
