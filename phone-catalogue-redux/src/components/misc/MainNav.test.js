import React from 'react';
import MainNav from "./MainNav";
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup) //avoid memory leaks

describe('<MainNav />', () => {
  describe('render()', () => {
    test('renders navigation text', () => {
      const { getByText } = render(<MainNav/>);
      const textHeader = getByText(/Phone Catalogue/i);
      expect(textHeader).toBeInTheDocument();
    });
  });
});