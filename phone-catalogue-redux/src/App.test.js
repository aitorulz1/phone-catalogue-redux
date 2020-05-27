import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import App from './App';
import MainNav from './components/misc/MainNav';

//afterEach(cleanup) //avoid memory leaks


describe('<App />', () => {
  test('loading', () => {
    //expect(getByTestId('loading')).toBeTruthy()
  });
});


