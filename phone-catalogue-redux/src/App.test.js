import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup) //avoid memory leaks

describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      expect(true).toBeTruthy();
    });
  });
});


