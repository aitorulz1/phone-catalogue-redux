import React from 'react';

const PhoneDetail = ({
  modalId,
  imageFileName,
  name,
  description,
  processor,
  ram,
  color }) => {

  return (
    <div className="modal fade phoneDetail_modal" id={modalId} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="d-flex">
              <div className="col-6">
              <img 
                src={imageFileName 
                  ? `/phones-images/${imageFileName}`
                  : `/phones-images/no-thumb.jpg`}
                className="card-img-top" alt={name}
              />
              </div>
              <div className="col-6">
                <h6>Description:</h6>
                <p>{description}</p>
                <h6>Processor: <span className="font-weight-light">{processor}</span></h6>
                <h6>Ram: <span className="font-weight-light">{ram}</span></h6>
                <h6>Color: <span className="font-weight-light">{color}</span></h6>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}



export default PhoneDetail;