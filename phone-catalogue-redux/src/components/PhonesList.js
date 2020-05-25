import React from 'react';
import Card from './UI/Card';

const PhoneList = (phones) => {
  console.log('PHONES ---------------------->', phones)

  return (
    <div className="container-fluid mt-4">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <Card />
        </div>
      </div>
    </div>
)}

export default PhoneList;