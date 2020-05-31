import React from 'react';
import { types } from '../actions/';
import { phonesReducer } from '../reducers/index';

describe('phonesReducer', () => {

  test('Should return default state', () => {
    const newState = phonesReducer(undefined, {})
    expect(newState.data).toEqual([])
    expect(newState.pending).toEqual(false)
    expect(newState.error).toEqual(null)
  })

  test('Should return requesting data type pending true', () => {
    const newState = phonesReducer(undefined, {
      type: types.REQUEST_DATA
    })
    expect(newState.pending).toEqual(true)
    expect(newState.data).toEqual([])
  })

  test('It should return newState if receiving type', () => {
    const data = [{
      color: "white",
      description: 'This is very shirt description',
      id: 0,
      imageFileName: "P10_Lite.jpg",
      name: "Name",
      manufacturer: "Huawei",
      price: 249,
      processor: "Kirin 658",
      ram: 4,
      screen: "5,2 inch Full-HD"
    }]

    const newState = phonesReducer(undefined, {
      type: types.DATA_SUCCESS,
      payload: { data }
    })
    expect(newState.data).toEqual(data)
    expect(newState.pending).toEqual(false)
  })

});
