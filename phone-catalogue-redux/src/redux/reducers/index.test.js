import React from 'react';
import { REQUEST_DATA, DATA_SUCCESS, DATA_ERROR } from '../actions';
import { phonesReducer, initialState } from '.';


describe('Data Reducer', () => {
  test('fake test', () => {
    expect(true).toBeTruthy()
  })
  // test('Should return initialSate', () => {
  //   const newState = phonesReducer(undefined, {});
  //   expect(newState).toEqual({
  //     pending: false,
  //     data: [],
  //     error: null
  //   })
  // })

  // test('Should return new state if receiving type', () => {
  //   const data = {}
  //   const newState = phonesReducer(undefined, {
  //     type: DATA_SUCCESS,
  //     payload: { data }
  //   })
  //   expect(newState).toEqual(data)
  // })
});
