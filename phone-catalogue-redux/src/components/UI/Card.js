import React from 'react';
import PhoneDetail from '../PhoneDetail';

const Card = ({
  color,
  imageFileName,
  name,
  manufacturer,
  screen,
  price,
  description,
  processor,
  ram  
}) => {

    const nameReeplaceCharacters = name.replace(/[. ,:-]+/g, "-");

    return (
      <>
      <div className="col mb-4">
        <div className="card h-100 shadow-sm rounded-lg">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="col-lg-7 col-md-12 col-12">
                <img 
                  src={imageFileName 
                    ? `/phones-images/${imageFileName}`
                    : `/phones-images/no-thumb.jpg`}
                  className="card-img-top" alt={name}
                />
              </div>
              <div className="col-lg-5 col-md-12 col-12">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{manufacturer}</p>

                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <div className="col-md-12 col-12">
                    <span>{screen}</span>
                  </div>
                  <div className="col-md-12 col-12">
                    <span className="h5 font-weight-bold price">{price} €</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary mt-4 float-right btn-block rounded-pill" data-toggle="modal"
                  data-target={`#${nameReeplaceCharacters}`}>
                    More details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PhoneDetail
        modalId={nameReeplaceCharacters}
        imageFileName={imageFileName}
        name={name}
        description={description}
        processor={processor}
        ram={ram}
        color={color}
      />
      </>
    )
}

export default Card;